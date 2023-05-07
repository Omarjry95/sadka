import React, {useState} from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import {Button} from "@app/reusable";
import {useTheme} from "@react-navigation/native";
import {BaseProps} from "@app/reusable/complex/info/models";
import Dialog from "@app/reusable/complex/info/dialog";

export default function Info({ ModalBody }: BaseProps) {

    const [infoVisible, showInfo] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <React.Fragment>
            <Button
                variant="straight"
                margin={{ l: 10 }}
                onPress={() => showInfo(true)}
                childComponent={() => (
                    <Entypo
                        name="info-with-circle"
                        color={colors.label}
                        size={16}
                    />
                )}
            />

            <Dialog
                visible={infoVisible}
                showDialog={showInfo}
                DialogBody={ModalBody}
            />
        </React.Fragment>
    )
}