import React, {useState} from 'react';
import {View} from "react-native";
import TextInput from "@app/reusable/textInput";
import styles from "@app/screens/signIn/form/styles";
import {Button} from "@app/reusable";
import Entypo from '@expo/vector-icons/Entypo';
import {useTheme} from "@react-navigation/native";

export default function Form() {

    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);

    const { colors } = useTheme();

    const passwordVisibilityToggler = (): JSX.Element => (
        <Button
            variant="straight"
            padding={{ a: 10 }}
            onPress={() => hidePasswordChars((hiddenPasswordChars) => !hiddenPasswordChars)}
            childComponent={() => (
                <Entypo
                    name="eye"
                    color={hiddenPasswordChars ? "black" : colors.primary}
                    size={16}
                />
            )}
        />
    )

    return (
        <View style={styles.container}>
            <TextInput
                variant="labelInside"
                padding={{ a: 10 }}
                margin={{ b: 20 }}
                label="Adresse éléctronique / Identifiant"
            />

            <TextInput
                hideChars={hiddenPasswordChars}
                variant="labelInside"
                padding={{ a: 10 }}
                label="Mot de passe"
                rightComponent={passwordVisibilityToggler}
            />
        </View>
    )
}