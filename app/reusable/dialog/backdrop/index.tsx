import React from 'react';
import styles from "@app/reusable/dialog/styles";
import {TouchableOpacity} from "react-native";
import { BackdropProps } from "@app/reusable/dialog/models";

const Backdrop = ({ onPress }: BackdropProps) => (
    <TouchableOpacity
        style={styles.pressableBackdrop}
        activeOpacity={1}
        onPress={onPress}
    />
)

export default Backdrop;