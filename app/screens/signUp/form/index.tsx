import React, {useCallback, useState} from 'react';
import {View} from "react-native";
import styles from "@app/screens/signUp/form/styles";
import {Button, TextInput, Text} from "@app/reusable";
import {PasswordVisibilityToggler} from "@app/reusable/complex";
import {FormInputsProps} from "@app/screens/signUp/models";
import {useTheme} from "@react-navigation/native";
import {emailRegex} from "@app/utilities/regex";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";

export default function Form() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRepassword] = useState<string>("");
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);
    const [hiddenRepasswordChars, hideRepasswordChars] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { colors } = useTheme();

    const dispatch = useDispatch();

    const formInputs: FormInputsProps[] = [
        { label: "Prénom", value: firstName, onChange: setFirstName },
        { label: "Nom", value: lastName, onChange: setLastName },
        { label: "Adresse éléctronique", value: email, onChange: setEmail },
        { label: "Mot de passe", hideChars: hiddenPasswordChars, value: password, onChange: setPassword,
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
    ]

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
        if (password.length < 6) {
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

    const onSubmit = () => {
        dispatch(showLoading());

        const validationChain: Array<() => boolean> = [verifyUnfilledFields, validateEmail, validatePasswordConditions,
            validatePasswordAndRepasswordMatching];

        let validationSuccess: boolean = true;
        let validationStepIndex: number = 0;

        while (validationSuccess && validationStepIndex < validationChain.length) {
            validationSuccess = validationChain[validationStepIndex]();
            validationStepIndex++;
        }

        if (!validationSuccess) {
            dispatch(hideLoading());
        }
    };

    return (
        <View style={styles.container}>
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