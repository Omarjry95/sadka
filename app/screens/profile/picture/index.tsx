import React, {useCallback} from 'react';
import {View} from "react-native";
import styles, {
    ACTION_BUTTON_DIMENSIONS,
    PICTURE_CONTAINER_DIMENSIONS,
    PICTURE_CONTAINER_PADDING
} from "@app/screens/profile/styles";
import {Image, Button} from "@app/reusable";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useTheme} from "@react-navigation/native";
import {ImagePickerResult, launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';
import { PictureBaseProps } from "../models";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Picture({ pictureUri, setNewPicture }: PictureBaseProps) {

    const { colors } = useTheme();

    const pickImage = useCallback(async () => {
        const result: ImagePickerResult = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: false,
            allowsMultipleSelection: false
        });

        const { canceled, assets } = result;

        if (!canceled && assets && assets.length > 0) {
            setNewPicture(assets[0].uri);
        }
    }, []);

    return (
        <View style={styles.pictureContainer}>
            <Button
                width="100%"
                height="100%"
                padding={{ a: PICTURE_CONTAINER_PADDING }}
                border={{ a: 1 }}
                borderColor="black"
                borderRadius={{ a: PICTURE_CONTAINER_DIMENSIONS / 2 }}
                borderStyle="dashed"
                childComponent={() => (
                    pictureUri ? (
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
                                    <View style={{
                                        ...styles.actionButton,
                                        backgroundColor: colors.primary
                                    }}
                                    >
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
                    ) : (
                        <View style={{
                            ...styles.buttonContainer,
                            backgroundColor: colors.border
                        }}>
                            <MaterialIcons
                                name="add-a-photo"
                                color="black"
                                size={42}
                            />
                        </View>
                    )
                )}
                onPress={pickImage}
            />
        </View>
    )
}