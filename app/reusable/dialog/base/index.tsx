import React, {useMemo} from 'react';
import {View, Modal, GestureResponderEvent} from "react-native";
import styles from "@app/reusable/dialog/styles";
import {Button, Text} from "@app/reusable";
import {ActionButtonProps, StrictBaseProps} from "@app/reusable/dialog/models";
import {useTheme} from "@react-navigation/native";
import Backdrop from "@app/reusable/dialog/backdrop";
import {EdgeInsets, useSafeAreaInsets} from "react-native-safe-area-context";

export default function Base({ visible, mainAction, DialogBody, overrideClassicAction,
                                 customActions }: StrictBaseProps) {

    const { colors } = useTheme();

    const insets: EdgeInsets = useSafeAreaInsets();

    const actions: ActionButtonProps[] = useMemo(() => overrideClassicAction ?
      customActions.map((action => ({
          ...action,
          onPress: (event: GestureResponderEvent) => {
              const { onPress: onCustomPress } = action;

              mainAction();

              if (onCustomPress)
                  onCustomPress(event);
          }
      }))) :
      [{
          onPress: mainAction,
          childComponent: () => (
            <Text
              variant="normal"
              value="Fermer"
              color="black"
              align="center"
            />)
      }], [overrideClassicAction, customActions]);

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={mainAction}
        >
            <View style={{
                ...styles.container,
                backgroundColor: colors.backdrop
            }}>
                <View style={{
                    ...styles.wrapper,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom + 80
                }}>
                    <DialogBody />

                    <View style={styles.actions}>
                        {actions.map((action, index, array) => (
                          <Button
                            {...action}
                            variant="straight"
                            width="100%"
                            padding={{ v: 10 }}
                            color="white"
                            border={{ t: 1 }}
                            borderColor={colors.border}
                            borderRadius={{ b: index === array.length - 1 ? 10 : 0 }}
                          />
                        ))}
                    </View>
                </View>

                <Backdrop onPress={mainAction} />
            </View>
        </Modal>
    )
}