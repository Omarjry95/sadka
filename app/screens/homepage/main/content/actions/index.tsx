import React from 'react';
import {Button, Text} from "@app/reusable";
import {View} from "react-native";
import styles from '@app/screens/homepage/styles';
import {ActionBaseProps} from "@app/screens/homepage/models";
import {homepageActions} from "@app/screens/homepage/constants";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MainStackParamList} from "@app/navigation/models";
import {useDispatch} from "react-redux";
import {setIsDonationSpontaneous} from "@app/global/donationSlice";

export default function Actions() {

  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const onPressHomepageAction = (isDonationSpontaneous: boolean) => {
    dispatch(setIsDonationSpontaneous(isDonationSpontaneous));

    navigation.navigate("Donation");
  }

  return (
    <View style={styles.actionsContainer}>
      {homepageActions.map((action: ActionBaseProps, index: number, array: ActionBaseProps[]) => (
        <Button
          variant="gradient"
          padding={{ v: 20, h: 5 }}
          margin={{ b: index !== array.length - 1 ? 10 : 0 }}
          childComponent={() => (
            <View style={styles.actionButtonContentContainer}>
              {action.icon()}

              <Text
                margin={{ l: 10 }}
                value={action.label}
              />
            </View>
          )}
          onPress={() => onPressHomepageAction(action.isDonationSpontaneous)}
        />
      ))}
    </View>
  )
}