import React from 'react';
import { Image } from 'react-native';
import {BaseStrictProps} from "@app/reusable/image/models";
import styles from './styles';

const Water = ({ source, borderRadius, fullWidth, resizeMode }: BaseStrictProps) => (
    <Image
        style={{
            ...styles.container,
            width: fullWidth ? "100%" : undefined,
            borderRadius
        }}
        source={source}
        resizeMode={resizeMode}
    />
);

export default Water;