import React from 'react';
import {Text} from "@app/reusable";
import {View} from "react-native";
import { ListItemProps } from "../../../models";
import styles from '../styles';
import {Padding} from "@app/utilities/globalModels";

export default function ListItem({ id, label, leftComponent: LeftComponent, paddings }: ListItemProps & { paddings: Padding }) {

    return (
        <View
            key={id}
            style={{
                ...styles.listItemContainer,
                ...paddings
            }}
        >
            {LeftComponent && <LeftComponent />}

            <Text
                italic={id === null}
                value={label}
                color="black"
            />
        </View>
    )
}