import React from 'react';
import {Image} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';
import { ItemImageProps } from "@app/reusable/select/models";

const ItemImage = ({ photoUrl, diameter }: ItemImageProps) => (
    <View style={{
        ...styles.imageLeftContainer,
        width: diameter,
        height: diameter,
        borderRadius: diameter
    }}>
        <Image
            variant="water"
            source={photoUrl}
            borderRadius={diameter / 2}
        />
    </View>
);

export default ItemImage;