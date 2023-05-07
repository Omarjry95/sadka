import React, {useCallback, useState} from 'react';
import {View} from "react-native";
import styles from "@app/screens/signUp/form/styles";
import {Button, TextInput} from "@app/reusable";
import Text from "../../../reusable/text";
import {PasswordVisibilityToggler} from "@app/reusable/complex";
import {FormInputsProps} from "@app/screens/signUp/models";

export default function Form() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRepassword] = useState<string>("");
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);
    const [hiddenRepasswordChars, hideRepasswordChars] = useState<boolean>(true);

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

    const onSubmit = useCallback(() => {

    }, []);

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