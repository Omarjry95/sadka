import React from 'react';
import {TextInput} from "@app/reusable";
import {View} from "react-native";
import styles from "@app/screens/profile/styles";
import {NameBaseProps} from "@app/screens/profile/models";

export default function Name({ nameParts, setNameParts }: NameBaseProps) {

    return (
        <View style={styles.nameContainer}>
            {nameParts.map((part: string, index: number, array: string[]) => (
                <TextInput
                    variant="transparent"
                    padding={{ v: 5, h: 10 }}
                    margin={{ b: index !== array.length - 1 ? 5 : 0 }}
                    size={32}
                    align="center"
                    onChange={(text: string) => setNameParts((prevState: string[]) => {
                        let newState: string[] = JSON.parse(JSON.stringify(prevState));

                        newState[index] = text;

                        return newState;
                    })}
                    value={part}
                />
            ))}
        </View>
    )
}