import React, {useEffect, useRef, useState} from 'react';
import {Button, Text} from "@app/reusable";
import {TextInput, View} from "react-native";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";
import styles from './styles';
import {useClickOutside} from "react-native-click-outside";

export default function Transparent({ value, capitalizeChars, paddings, margins, radiuses, size, align, onChange }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const textInputRef = useRef<TextInput>(null);
    const containerRef = useClickOutside<View>(() => textInputRef.current?.blur());

    const { colors } = useTheme();

    useEffect(() => {
        if (isFocused) { textInputRef.current?.focus(); }
    }, [isFocused]);

    return (
        <View
            ref={containerRef}
            style={{...margins}}
        >
            <View style={styles.buttonContainer}>
                <TextInput
                    multiline
                    autoCapitalize={capitalizeChars ? "characters" : "sentences"}
                    ref={textInputRef}
                    style={{...styles.main,
                        ...paddings,
                        ...radiuses,
                        backgroundColor: isFocused ? "black" : "transparent",
                        color: isFocused ? "white" : "black",
                        fontSize: size,
                        textAlign: align
                    }}
                    selectionColor={colors.label}
                    value={value}
                    onChangeText={(text) => onChange(text)}
                    onBlur={() => setFocus(false)}
                />

                {!isFocused && (
                    <Button
                        width="100%"
                        height="100%"
                        position="absolute"
                        childComponent={() => (<View style={styles.buttonHighlighter} />)}
                        onPress={() => setFocus(true)}
                    />
                )}
            </View>
        </View>
    )
}