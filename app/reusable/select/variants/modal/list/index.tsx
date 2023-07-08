import React, {useCallback} from 'react';
import {FlatList, View} from "react-native";
import styles from '../styles';
import {ListItemProps, ListProps} from "@app/reusable/select/models";
import {Text} from "@app/reusable";

export default function List({ list }: ListProps) {

    const renderItem = useCallback(({ item }: { item: ListItemProps }) => {
        const { id, label, leftComponent: LeftComponent } = item;

        return (
            <View
                key={id}
                style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
            >
                <LeftComponent />

                <Text
                    value={label}
                    color="black"
                />
            </View>
        )
    }, []);

    return (
        <View style={styles.modalBody}>
            <FlatList
                data={list}
                renderItem={renderItem}
            />
        </View>
    )
}