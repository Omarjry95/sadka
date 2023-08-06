import React, {useCallback} from 'react';
import {FlatList, View} from "react-native";
import styles from '../styles';
import {ListItemProps, ListProps} from "@app/reusable/select/models";
import ListItem from "@app/reusable/select/variants/modal/listItem";
import {Divider} from "@app/reusable";

export default function List({ list, paddings }: ListProps) {

    const renderItem = useCallback(({ item }: { item: ListItemProps }) => (
        <ListItem
            id={item.id}
            label={item.label}
            leftComponent={item.leftComponent}
            paddings={paddings}
        />
    ), []);

    return (
        <View style={styles.modalBody}>
            <FlatList
                data={list}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<Divider />)}
            />
        </View>
    )
}