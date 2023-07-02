import React, {useState} from 'react';
import {Button, Text} from "@app/reusable";
import {TextInput, View} from "react-native";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";
import styles from './styles';

export default function Transparent({ value, paddings, margins, radiuses, size, onChange }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <View style={{
            ...margins
        }}>
            {isFocused ?
                <TextInput
                    style={{...styles.main,
                        ...paddings,
                        ...radiuses,
                        fontSize: size
                    }}
                    selectionColor={colors.label}
                    value={value}
                    onChangeText={(text) => onChange(text)}
                    onBlur={() => setFocus(false)}
                /> :
                <Button
                    childComponent={() => (
                        <Text
                            variant="title"
                            value={value}
                            size={size}
                            color="black"
                            transform="uppercase"
                        />
                    )}
                    onPress={() => setFocus(true)}
                />
            }
        </View>
    )
}