import React from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import {Button} from "@app/reusable";
import {useTheme} from "@react-navigation/native";
import {BaseProps} from "@app/reusable/complex/passwordVisibilityToggler/models";

export default function PasswordVisibilityToggler({ areCharsHidden, toggleChars }: BaseProps) {

    const { colors } = useTheme();

    return (
        <Button
            variant="straight"
            padding={{ a: 10 }}
            onPress={toggleChars}
            childComponent={() => (
                <Entypo
                    name="eye"
                    color={areCharsHidden ? "black" : colors.primary}
                    size={16}
                />
            )}
        />
    )
}