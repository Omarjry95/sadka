import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from "react-native";
import styles from "@app/screens/signUp/form/styles";
import {Button, TextInput, Text, RadioGroup} from "@app/reusable";
import {PasswordVisibilityToggler} from "@app/reusable/complex";
import {FormInputsProps} from "@app/screens/signUp/models";
import {useTheme} from "@react-navigation/native";
import {emailRegex} from "@app/utilities/regex";
import {useDispatch} from "react-redux";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {useLazyGetRolesQuery} from "@app/api/apis/roleApi";
import {useCreateUserMutation} from "@app/api/apis/userApi";
import {WsCreateUserBaseProps, WsMiddlewareResponseBaseProps} from "@app/api/models";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {UnrestrictedStackParamList} from "@app/navigation/models";
import {MutationError} from "@app/utilities/globalModels";
import {useGetClientCredentialsBearerTokenMutation} from "@app/api/apis/oauth2Api";
import {passwordConditions} from "@app/utilities/conditions";

export default function Form({ navigation }: { navigation: NativeStackNavigationProp<UnrestrictedStackParamList, 'SignUp'> }) {

    const [role, setRole] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [charityName, setCharityName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRepassword] = useState<string>("");
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);
    const [hiddenRepasswordChars, hideRepasswordChars] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [getRoles, { data: roles = [], isLoading: isGetRolesLoading, isSuccess: isGetRolesSuccess, isError: isGetRolesError }] = useLazyGetRolesQuery();

    const [createUser, { isSuccess: isCreateUserSuccess, isError: isCreateUserError, error: createUserError }] = useCreateUserMutation();

    const [getClientCredentialsBearerToken] = useGetClientCredentialsBearerTokenMutation();

    const { colors } = useTheme();

    const dispatch = useDispatch();

    const getClientCredentialsBearerTokenAsync = useCallback((): Promise<WsMiddlewareResponseBaseProps> => getClientCredentialsBearerToken().unwrap(), []);

    useEffect(() => {
        dispatch(showLoading());

        getClientCredentialsBearerTokenAsync()
            .then(() => getRoles());
    }, []);

    useEffect(() => {
        if (isGetRolesSuccess || isGetRolesError) {
            if (isGetRolesSuccess && !!roles.length) {
                setRole(roles[0]._id);
            }

            if (isGetRolesError) {
                dispatch(showModal({
                    variant: "error",
                    mainAction: () => {
                        dispatch(hideModal());
                        navigation.navigate('SignIn');
                    }
                }));
            }

            dispatch(hideLoading());
        }
    }, [isGetRolesLoading, isGetRolesSuccess, isGetRolesError]);

    useEffect(() => {
        if (isCreateUserSuccess || isCreateUserError) {
            if (isCreateUserSuccess) {
                dispatch(showModal({
                    variant: "success",
                    mainAction: () => { },
                    stateMessage: "Votre compte a été créé avec succès. Vous pouvez vous connecter sur notre plateforme."
                }));

                setTimeout(() => {
                    dispatch(hideModal());
                    navigation.navigate('SignIn');
                }, 2000);
            }

            if (isCreateUserError) {
                let createUserErrorMessage: string = "Désolé, une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer plus tard.";

                try {
                    const { data: createUserErrorData } = createUserError as MutationError;
                    const { message: wsCreateUserErrorMessage } = createUserErrorData;

                    if (wsCreateUserErrorMessage === "UAE") {
                        createUserErrorMessage = "L'adresse éléctronique que vous avez saisie est déjà exploitée par un autre utilisateur."
                    }
                }
                catch (e: any) { console.log(e.message); }

                setErrorMessage(createUserErrorMessage);
            }

            dispatch(hideLoading());
        }
    }, [isCreateUserSuccess, isCreateUserError]);

    const additionalFormInputsByRole: FormInputsProps[] = useMemo(() => {
        let defaultInputs: FormInputsProps[] = [];

        if (!!roles.length) {
            if (role === roles[0]._id) {
                defaultInputs = [{ id: 'firstName', label: "Prénom", value: firstName, onChange: setFirstName },
                    { id: 'lastName', label: "Nom", value: lastName, onChange: setLastName } ];
            }
            else if (role === roles[1]._id) {
                defaultInputs = [{ id: 'charityName', label: "Nom de l'organisme", value: charityName, onChange: setCharityName }];
            }
        }

        return defaultInputs;
    }, [firstName, lastName, charityName, role, roles]);

    const formInputs: FormInputsProps[] = [
        ...additionalFormInputsByRole,
        { id: 'email', label: "Adresse éléctronique", value: email, onChange: setEmail },
        { id: 'password', label: "Mot de passe", hideChars: hiddenPasswordChars, value: password, onChange: setPassword,
            rightComponent: () => (
                <PasswordVisibilityToggler
                    areCharsHidden={hiddenPasswordChars}
                    toggleChars={() => hidePasswordChars(hiddenChars => !hiddenChars)}
                />
            ),
            helpComponent: () => (
                <View style={styles.modalBody}>
                    <Text
                        variant="normal"
                        value="- Votre mot de passe doit contenir au moins 6 caractères."
                        color="black"
                    />
                </View>
            )
        },
        { label: "Confirmer votre mot de passe", hideChars: hiddenRepasswordChars, value: repassword, onChange: setRepassword,
            rightComponent: () => (
                <PasswordVisibilityToggler
                    areCharsHidden={hiddenRepasswordChars}
                    toggleChars={() => hideRepasswordChars(hiddenChars => !hiddenChars)}
                />
            )
        }
    ];

    const verifyUnfilledFields = (): boolean => {
        let errorMessage: string = "";

        const unfilledInputs: FormInputsProps[] = formInputs.filter(input => !input.value.length);

        if (unfilledInputs.length) {
            errorMessage += unfilledInputs.length === 1 ? "Le champ" : "Les champs";
            errorMessage += " ";
            errorMessage += unfilledInputs.map(input => "'" + input.label + "'").join(", ");
            errorMessage += " ";
            errorMessage += "sont obligatoires."

            setErrorMessage(errorMessage);

            return false;
        }

        return true;
    }

    const validateEmail: () => boolean = useCallback((): boolean => {
        if (!emailRegex.test(email)) {
            setErrorMessage("Vous n'avez pas saisi une adresse éléctronique valide.");

            return false;
        }

        return true;
    }, [email]);

    const validatePasswordConditions: () => boolean = useCallback((): boolean => {
        if (!passwordConditions(password)) {
            setErrorMessage("Le mot de passe que vous avez saisi ne respecte pas les exigences demandées.")

            return false;
        }

        return true;
    }, [password]);

    const validatePasswordAndRepasswordMatching: () => boolean = useCallback((): boolean => {
        if (password !== repassword) {
            setErrorMessage("Veuillez resaisir votre mot de passe correctement.");

            return false;
        }

        return true;
    }, [password, repassword]);

    const applyValidationChain = (): boolean => {
        const validationChain: Array<() => boolean> = [verifyUnfilledFields, validateEmail, validatePasswordConditions,
            validatePasswordAndRepasswordMatching];

        let validationSuccess: boolean = true;
        let validationStepIndex: number = 0;

        while (validationSuccess && validationStepIndex < validationChain.length) {
            validationSuccess = validationChain[validationStepIndex]();
            validationStepIndex++;
        }

        return validationSuccess;
    }

    const onSubmit = () => {
        dispatch(showLoading());

        if (!applyValidationChain()) {
            dispatch(hideLoading());
        }
        else {
            getClientCredentialsBearerTokenAsync()
                .then(() => {
                    const createUserWSArgs: WsCreateUserBaseProps = formInputs.reduce((acc, { id, value }) =>
                            id ? {...acc, [id]: value} : acc,
                        {} as WsCreateUserBaseProps);

                    createUser({...createUserWSArgs, role });
                });
        }
    };

    return (
        <View style={styles.container}>
            <RadioGroup
                variant="bordered"
                value={role}
                list={roles.map((role) => {
                    return {
                        ...role,
                        id: role._id
                    }
                })}
                padding={{ h: 5 }}
                cellPadding={{ a: 10 }}
                margin={{ b: 20 }}
                cellMargin={{ r: 10, b: 10 }}
                border={{ a: 2 }}
                setValue={setRole}
            />

            {formInputs.map(input => (
                <TextInput
                    variant="labelInside"
                    value={input.value}
                    hideChars={!!input.hideChars}
                    padding={{ a: 10 }}
                    margin={{ b: 20 }}
                    label={input.label}
                    rightComponent={input.rightComponent}
                    helpComponent={input.helpComponent}
                    onChange={input.onChange}
                />
            ))}

            {errorMessage.length > 0 && (
                <Text
                    variant="normal"
                    value={errorMessage}
                    margin={{ b: 20 }}
                    color={colors.primary}
                    align="center"
                />
            )}

            <Button
                variant="gradient"
                padding={{ v: 20, h: 5 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="S'inscrire"
                    />
                )}
                onPress={onSubmit}
            />
        </View>
    )
}