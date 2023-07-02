import React, {useEffect, useMemo, useState} from 'react';
import {Text, Button, TextInput} from "@app/reusable";
import {useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {View} from "react-native";
import styles from "@app/screens/profile/styles";

export default function Name() {

    const [nameParts, setNameParts] = useState<string[]>([]);

    const { currentUser } = useSelector(userSelector);

    useEffect(() => {
        if (currentUser) {
            let parts: string[] = [];

            const { role, firstName, lastName, charityName } = currentUser;

            if (role === 0 && firstName && lastName) { parts.push(firstName, lastName); }

            if (role === 1 && charityName) { parts.push(charityName); }

            if (parts.length > 0) { setNameParts(parts); }
        }
    }, [currentUser]);

    return (
        <View style={styles.nameContainer}>
            {nameParts.map((part: string, index: number, array: string[]) => (
                <TextInput
                    variant="transparent"
                    padding={{ v: 5, h: 10 }}
                    margin={{ b: index !== array.length - 1 ? 10 : 0 }}
                    borderRadius={{ a: 10 }}
                    size={32}
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