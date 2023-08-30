import React, {useMemo} from "react";
import {HEADER_RIGHT_PIN_DIMENSIONS} from "@app/screens/homepage/constants";
import {View} from "react-native";
import styles from "@app/screens/homepage/styles";
import {Button, Image} from "@app/reusable";
import {useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";

export default function Pin({ navigation }: { navigation: any }) {

  const { currentUser } = useSelector(userSelector);

  const currentUserPhoto: string | undefined = useMemo(() => currentUser?.photo, [currentUser]);

  return (
    <Button
      width={HEADER_RIGHT_PIN_DIMENSIONS}
      height={HEADER_RIGHT_PIN_DIMENSIONS}
      color="black"
      borderRadius={{ a: HEADER_RIGHT_PIN_DIMENSIONS / 2 }}
      childComponent={() => (
        <View style={styles.pinImageContainer}>
          {currentUserPhoto && (
            <Image
              fullWidth
              variant="water"
              source={currentUserPhoto}
              borderRadius={HEADER_RIGHT_PIN_DIMENSIONS / 2}
            />
          )}
        </View>
      )}
      onPress={() => navigation.navigate('Profile')}
    />
  )
}