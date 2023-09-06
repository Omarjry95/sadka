import React, {useState} from 'react';
import {TextInput, View} from "react-native";
import Text from '@app/reusable/text';
import styles from "@app/reusable/textInput/variants/labelInside/styles";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";
import { Info } from "@app/reusable/complex";

export default function LabelInside({ value, label, hideChars, numericKeyboard, paddings, margins, size, RightComponent, HelpComponent,
                                        onChange }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <View style={{...styles.container,
            ...paddings,
            ...margins,
            borderColor: isFocused ? colors.primary : colors.border
        }}>
            <View style={styles.textInputWrapper}>
                <View style={styles.labelWrapper}>
                    <Text
                        variant="normal"
                        value={label}
                        margin={{ b: 5 }}
                        color="gray"
                        size={13}
                    />

                    {HelpComponent && (
                        <Info ModalBody={HelpComponent} />
                    )}
                </View>

                <TextInput
                  style={{...styles.textInput,
                    fontSize: size
                  }}
                  secureTextEntry={hideChars}
                  keyboardType={numericKeyboard ? "numeric" : "default"}
                  selectionColor={colors.label}
                  value={value}
                  onChangeText={(text) => onChange(text)}
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