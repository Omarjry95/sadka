import React, {useMemo} from 'react';
import {BaseStrictProps, ListItemProps} from "@app/reusable/select/models";
import {View} from "react-native";
import {Button, Text} from "@app/reusable";
import styles from './styles';
import {hideModal, showModal} from "@app/global/globalSlice";
import {useDispatch} from "react-redux";
import List from "@app/reusable/select/variants/modal/list";
import ListItem from "@app/reusable/select/variants/modal/listItem";

export default function Modal({ list, value, label, width, paddings, margins, borders, borderColor, radiuses }: BaseStrictProps) {

    const dispatch = useDispatch();

    const selectedItem: ListItemProps | undefined = useMemo(() => list.find((item: ListItemProps) => item.id === value), [list, value]);

    return (
        <View style={{
            ...styles.container,
            ...margins,
            width
        }}>
            {label && (
                <Text
                    margin={{ b: 10 }}
                    color="black"
                    value={label}
                />
            )}

            <Button
                style={{
                    ...borders,
                    ...radiuses,
                    borderColor
                }}
                width="100%"
                childComponent={() => (
                    <>
                        {selectedItem && (
                            <ListItem
                                id={selectedItem.id}
                                label={selectedItem.label}
                                leftComponent={selectedItem.leftComponent}
                                paddings={paddings}
                            />
                        )}
                    </>
                )}
                onPress={() => {
                    if (selectedItem) {
                        dispatch(showModal({
                            variant: "normal",
                            mainAction: () => dispatch(hideModal()),
                            dialogBody: () => (
                                <List
                                    list={list}
                                    paddings={paddings}
                                />
                            )
                        }))
                    }
                }}
            />
        </View>
    )
}