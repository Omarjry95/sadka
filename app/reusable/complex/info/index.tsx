import React from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import {Button} from "@app/reusable";
import {useTheme} from "@react-navigation/native";
import {BaseProps} from "@app/reusable/complex/info/models";
import {useDispatch} from "react-redux";
import {hideModal, showModal} from "@app/global/globalSlice";

export default function Info({ ModalBody }: BaseProps) {

    const { colors } = useTheme();

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Button
                variant="straight"
                margin={{ l: 10 }}
                onPress={() => dispatch(showModal({
                    variant: "normal",
                    mainAction: () => dispatch(hideModal()),
                    dialogBody: ModalBody
                }))}
                childComponent={() => (
                    <Entypo
                        name="info-with-circle"
                        color={colors.label}
                        size={16}
                    />
                )}
            />
        </React.Fragment>
    )
}