import React from 'react';
import {BaseStrictProps} from "@app/reusable/select/models";
import {View} from "react-native";
import {Button, Text} from "@app/reusable";
import styles from './styles';
import {hideModal, showModal} from "@app/global/globalSlice";
import {useDispatch} from "react-redux";
import List from "@app/reusable/select/variants/modal/list";

export default function Modal({ list, label, width, paddings, margins, borders, borderColor, radiuses }: BaseStrictProps) {

    const dispatch = useDispatch();

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
                    ...paddings,
                    ...borders,
                    ...radiuses,
                    borderColor
                }}
                width="100%"
                childComponent={() => (
                    <View style={{ width: "100%" }}>
                        <Text
                            margin={{ b: 5 }}
                            color="black"
                            value="Association"
                        />
                    </View>
                )}
                onPress={() => dispatch(showModal({
                    variant: "normal",
                    mainAction: () => dispatch(hideModal()),
                    dialogBody: () => (<List list={list} />)
                }))}
            />
        </View>
    )
}