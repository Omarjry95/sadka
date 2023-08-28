import React, {useCallback} from 'react';
import {FlatList, View} from "react-native";
import styles from '../styles';
import {ListItemProps, ListProps} from "@app/reusable/select/models";
import ListItem from "@app/reusable/select/variants/modal/listItem";
import {Divider} from "@app/reusable";

export default function List({ list, selectedId, paddings, setValue }: ListProps) {

    const renderItem = useCallback(({ item, index }: { item: ListItemProps, index: number }) => {
        const isSelected: boolean = item.id === selectedId;

        return (
            <ListItem
                id={item.id}
                index={index}
                label={item.label}
                leftComponent={item.leftComponent}
                bottomComponent={item.bottomComponent}
                selected={isSelected}
                disabled={isSelected}
                paddings={paddings}
                setValue={setValue}
            />
        )
    }, []);

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