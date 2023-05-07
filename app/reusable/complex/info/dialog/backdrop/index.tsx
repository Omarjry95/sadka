import React from 'react';
import styles from "@app/reusable/complex/info/styles";
import {TouchableOpacity} from "react-native";
import { BackdropProps } from "../../models";

const Backdrop = ({ showDialog }: BackdropProps) => (
    <TouchableOpacity
        style={styles.pressableBackdrop}
        activeOpacity={1}
        onPress={() => showDialog(false)}
    />
)

export default Backdrop;