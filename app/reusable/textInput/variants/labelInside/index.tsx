import React, {useState} from 'react';
import {TextInput, View} from "react-native";
import Text from '@app/reusable/text';
import styles from "@app/reusable/textInput/variants/labelInside/styles";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";

export default function LabelInside({ label, hideChars, paddings, margins, size, RightComponent }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <View style={{...styles.container,
            ...paddings,
            ...margins,
            borderColor: isFocused ? colors.primary : colors.border
        }}>
            <View style={styles.textInputWrapper}>
                <Text
                    variant="normal"
                    value={label}
                    margin={{ b: 5 }}
                    color="gray"
                    size={13}
                />

                <TextInput
                    secureTextEntry={hideChars}
                    style={{...styles.textInput,
                        fontSize: size
                    }}
                    selectionColor={colors.label}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </View>

            {RightComponent && (
                <RightComponent />
            )}
        </View>
    )
}