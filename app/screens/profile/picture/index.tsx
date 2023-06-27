import React from 'react';
import {View} from "react-native";
import styles, {PICTURE_CONTAINER_DIMENSIONS, PICTURE_CONTAINER_PADDING} from "@app/screens/profile/styles";
import {Image, Button} from "@app/reusable";
import {useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useTheme} from "@react-navigation/native";

export default function Picture() {

    const { currentUser } = useSelector(userSelector);

    const { colors } = useTheme();

    return (
        <View style={styles.pictureContainer}>
            {currentUser?.picture ? (
                <Image
                    variant="water"
                    source={currentUser.picture}
                />
            ) : (
                <Button
                    width="100%"
                    height="100%"
                    padding={{ a: PICTURE_CONTAINER_PADDING }}
                    border={{ a: 1 }}
                    borderColor="black"
                    borderRadius={{ a: PICTURE_CONTAINER_DIMENSIONS / 2 }}
                    borderStyle="dashed"
                    childComponent={() => (
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
                    )}
                />
            )}
        </View>
    )
}