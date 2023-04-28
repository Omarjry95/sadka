import React, {useState} from 'react';
import {TextInput, View} from "react-native";
import Text from '@app/reusable/text';
import styles from "@app/reusable/textInput/variants/labelInside/styles";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";

export default function LabelInside({ label, size }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <View style={{...styles.container,
            borderColor: isFocused ? colors.primary : colors.border
        }}>
            <Text
                variant="normal"
                value={label}
                padding={{ b: 5 }}
                color="gray"
                size={13}
            />

            <TextInput
                style={{...styles.textInput,
                    fontSize: size
                }}
                selectionColor={colors.label}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
    )
}