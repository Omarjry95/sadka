import React, {useEffect, useRef, useState} from 'react';
import {Button, Text} from "@app/reusable";
import {TextInput, View} from "react-native";
import {BaseStrictProps} from "@app/reusable/textInput/models";
import {useTheme} from "@react-navigation/native";
import styles from './styles';
import {useClickOutside} from "react-native-click-outside";

export default function Transparent({ value, paddings, margins, radiuses, size, onChange }: BaseStrictProps) {

    const [isFocused, setFocus] = useState<boolean>(false);

    const textInputRef = useRef<TextInput>(null);
    const containerRef = useClickOutside<View>(() => setFocus(false));

    const { colors } = useTheme();

    useEffect(() => {
        if (isFocused) { textInputRef.current?.focus(); }
    }, [isFocused]);

    return (
        <View
            ref={containerRef}
            style={{...margins}}
        >
            {isFocused ?
                <TextInput
                    ref={textInputRef}
                    style={{...styles.main,
                        ...paddings,
                        ...radiuses,
                        fontSize: size
                    }}
                    selectionColor="black"
                    value={value}
                    onChangeText={(text) => onChange(text)}
                /> :
                <View style={{ position: "relative" }}>
                    <Button
                        style={{...paddings}}
                        childComponent={() => (
                            <Text
                                variant="title"
                                value={value}
                                size={size}
                                color="black"
                                transform="uppercase"
                                align="center"
                            />
                        )}
                        onPress={() => setFocus(true)}
                    />

                    <View style={styles.buttonHighlighter} />
                </View>
            }
        </View>
    )
}