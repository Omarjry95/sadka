import React from 'react';
import styles, {ACTION_BUTTON_DIMENSIONS, PICTURE_CONTAINER_DIMENSIONS} from "@app/screens/profile/styles";
import {Button, Image} from "@app/reusable";
import {View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {SelectedPictureDisplayBaseProps} from "@app/screens/profile/models";

const SelectedPictureDisplay = ({ pictureUri, setNewPicture }: SelectedPictureDisplayBaseProps) => (
    <View style={styles.photoWrapper}>
        <Image
            fullWidth
            variant="water"
            source={pictureUri}
            borderRadius={PICTURE_CONTAINER_DIMENSIONS / 2}
        />

        <Button
            width={ACTION_BUTTON_DIMENSIONS}
            height={ACTION_BUTTON_DIMENSIONS}
            position="absolute"
            positioning={{ b: 0, r: -10 }}
            childComponent={() => (
                <View style={styles.actionButton}>
                    <Ionicons
                        name="remove"
                        color="white"
                        size={36}
                        style={styles.actionButtonIcon}
                    />
                </View>
            )}
            onPress={() => setNewPicture(undefined)}
        />
    </View>
)

export default SelectedPictureDisplay;