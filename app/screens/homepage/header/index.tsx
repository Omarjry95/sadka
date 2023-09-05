import React, {useMemo} from "react";
import {View} from "react-native";
import styles from "@app/screens/homepage/styles";
import {Button, Image, Text} from "@app/reusable";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {euroSymbol} from "@app/utilities/regex";
import {useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {HEADER_RIGHT_PIN_DIMENSIONS} from "@app/screens/homepage/constants";

export default function Header({ navigation }: { navigation: any }) {

  const { currentUser } = useSelector(userSelector);

  const currentUserPhoto: string | undefined = useMemo(() => currentUser?.photo, [currentUser]);

  return (
    <View style={styles.pinContainer}>
      <Button
        padding={{ a: 5 }}
        border={{ a: 2 }}
        borderColor="black"
        borderRadius={{ a: 10 }}
        childComponent={() => (
          <MaterialCommunityIcons
            name="hamburger"
            color="black"
            size={24}
          />
        )}
        onPress={navigation.openDrawer}
      />

      <View style={styles.pinWrapper}>
        <Text
          bold
          margin={{ r: 15 }}
          color="black"
          value={`0${euroSymbol}`}
        />

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
      </View>
    </View>
  )
}