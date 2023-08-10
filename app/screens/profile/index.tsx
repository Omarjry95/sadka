import React, {useState} from 'react';
import {View} from "react-native";
import styles from "@app/screens/profile/styles";
import Picture from "@app/screens/profile/picture";
import Name from "@app/screens/profile/name";
import Association from "@app/screens/profile/association";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RestrictedStackParamList} from "@app/navigation/models";
import {useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";

export default function Profile({ navigation }: NativeStackScreenProps<RestrictedStackParamList, 'Profile'>) {

    const { currentUser } = useSelector(userSelector);

    const [pictureUri, setNewPicture] = useState<string | undefined>(currentUser?.picture);

    return (
        <View style={styles.container}>
            <Picture
                pictureUri={pictureUri}
                setNewPicture={setNewPicture}
            />

            <Name />

            <Association navigation={navigation} />
        </View>
    )
}