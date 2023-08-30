import React from 'react';
import {Button, Text} from "@app/reusable";
import {View} from "react-native";
import styles from '@app/screens/homepage/styles';
import {ActionBaseProps} from "@app/screens/homepage/models";
import {homepageActions} from "@app/screens/homepage/constants";

const Actions = () => (
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
      />
    ))}
  </View>
)

export default Actions;