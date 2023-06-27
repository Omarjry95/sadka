import React from 'react';
import { Image } from 'react-native';
import {BaseStrictProps} from "@app/reusable/image/models";
import styles from './styles';

const Water = ({ source }: BaseStrictProps) => (
    <Image
        style={styles.container}
        source={source}
    />
);

export default Water;