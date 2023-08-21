import React, {useCallback} from 'react';
import {View} from "react-native";
import styles, {
    PICTURE_CONTAINER_DIMENSIONS,
    PICTURE_CONTAINER_PADDING
} from "@app/screens/profile/styles";
import {Button} from "@app/reusable";
import {ImagePickerResult, launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';
import { PictureBaseProps } from "../models";
import SelectedPictureDisplay from "@app/screens/profile/picture/selectedPictureDisplay";
import EmptyPictureDisplay from "@app/screens/profile/picture/emptyPictureDisplay";

export default function Picture({ pictureUri, setNewPicture }: PictureBaseProps) {

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
                        <SelectedPictureDisplay
                            pictureUri={pictureUri}
                            setNewPicture={setNewPicture}
                        />
                    ) : (
                        <EmptyPictureDisplay />
                    )
                )}
                onPress={pickImage}
            />
        </View>
    )
}