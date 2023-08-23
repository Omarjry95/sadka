import React, {useCallback, useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import styles from './styles';
import {PasswordVisibilityToggler} from "@app/reusable/complex";
import {Button, Text, TextInput} from "@app/reusable";
import ChangePasswordBaseProps from "./models/ChangePasswordBaseProps";
import {changePasswordElementDefaultValue} from "@app/screens/changePassword/constants";
import {
  ChangePasswordElementBaseProps,
  ChangePasswordElementHiddenProp,
  ChangePasswordElementValueProp
} from "@app/screens/changePassword/models";
import NewPasswordHelpComponent from "@app/screens/changePassword/newPasswordHelp";

type ChangePasswordBaseKeys = keyof ChangePasswordBaseProps;

export default function ChangePassword() {

  const [changePasswordElements, setPasswordElements] = useState<ChangePasswordBaseProps>({
      oldPassword: changePasswordElementDefaultValue("Votre mot de passe actuel"),
      newPassword: changePasswordElementDefaultValue("Votre nouveau mot de passe", NewPasswordHelpComponent),
      confirmNewPassword: changePasswordElementDefaultValue("Confirmer votre nouveau mot de passe")
    });

  const updateElementBaseProp = useCallback((elementKey: ChangePasswordBaseKeys, actualValue: ChangePasswordElementBaseProps,
                                 propertyToUpdate: ChangePasswordElementValueProp | ChangePasswordElementHiddenProp): void => {
    setPasswordElements((elements: ChangePasswordBaseProps) => ({
      ...elements,
      [elementKey]: {
        ...actualValue,
        ...propertyToUpdate
      }
    }))
  }, []);

  const renderElement = (k: string): JSX.Element => {
    const elementKey: ChangePasswordBaseKeys = k as ChangePasswordBaseKeys;

    const changePasswordElement: ChangePasswordElementBaseProps = changePasswordElements[elementKey];

    const { value, hidden, label, helpComponent } = changePasswordElement;

    const args: [ChangePasswordBaseKeys, ChangePasswordElementBaseProps] = [elementKey, changePasswordElement];

    return (
      <TextInput
        variant="labelInside"
        value={value}
        hideChars={hidden}
        padding={{ a: 10 }}
        margin={{ b: 30 }}
        label={label}
        rightComponent={() => (
          <PasswordVisibilityToggler
            areCharsHidden={hidden}
            toggleChars={() => updateElementBaseProp(...args, { hidden: !hidden })}
          />)}
        helpComponent={helpComponent}
        onChange={(value: string) => updateElementBaseProp(...args, { value })}
      />
    )
  }

  const onSubmit = () => {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {Object.keys(changePasswordElements).map(renderElement)}

        <Button
          variant="gradient"
          padding={{ v: 20, h: 5 }}
          childComponent={() => (
            <Text
              variant="normal"
              value="Confirmer"
            />
          )}
          onPress={onSubmit}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}