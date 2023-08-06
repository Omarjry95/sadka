import React from 'react';
import { Image } from 'react-native';
import {BaseStrictProps} from "@app/reusable/image/models";
import styles from './styles';

const Water = ({ source, borderRadius }: BaseStrictProps) => (
    <Image
        style={{
            ...styles.container,
            borderRadius
        }}
        source={source}
    />
);

export default Water;