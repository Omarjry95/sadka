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
  ChangePasswordElementValueProp, ConditionCheckBaseProps
} from "@app/screens/changePassword/models";
import NewPasswordHelpComponent from "@app/screens/changePassword/newPasswordHelp";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import {useDispatch} from "react-redux";
import {useTheme} from "@react-navigation/native";
import {EmailAuthProvider, reauthenticateWithCredential, signOut, updatePassword, User} from "firebase/auth";
import {firebaseAuth} from "../../../firebaseConfig";
import {removeUserBearerToken} from "@app/global/middlewareSlice";
import {removeUserDetails} from "@app/global/userSlice";
import {disconnectUser} from "@app/global/authSlice";
import {passwordConditions} from "@app/utilities/conditions";

type ChangePasswordBaseKeys = keyof ChangePasswordBaseProps;

export default function ChangePassword() {

  const [changePasswordElements, setPasswordElements] = useState<ChangePasswordBaseProps>({
      oldPassword: changePasswordElementDefaultValue("Votre mot de passe actuel"),
      newPassword: changePasswordElementDefaultValue("Votre nouveau mot de passe", NewPasswordHelpComponent),
      confirmNewPassword: changePasswordElementDefaultValue("Confirmer votre nouveau mot de passe")
    });
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  const { colors } = useTheme();

  const changePasswordElementsKeys: string[] = Object.keys(changePasswordElements);

  const isSubmitDisabled = changePasswordElementsKeys.map((k: string) => changePasswordElements[k as ChangePasswordBaseKeys].value).some((v: string) => !v.length);

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

  const isConditionsVerified = useCallback((): boolean => {
    const { newPassword: { value: newPasswordValue }, confirmNewPassword: { value: confirmPasswordValue } } = changePasswordElements;

    const conditions: ConditionCheckBaseProps[] = [{
      condition: passwordConditions(newPasswordValue),
      errorMessage: "Le nouveau mot de passe que vous avez saisi ne respecte pas les exigences demandées."
    }, {
      condition: newPasswordValue === confirmPasswordValue,
      errorMessage: "Veuillez resaisir votre mot de passe correctement."
    }];

    const unmetConditions: ConditionCheckBaseProps[] = conditions.filter((element: ConditionCheckBaseProps) => !element.condition);

    if (unmetConditions.length > 0) {
      setErrorMessage(unmetConditions[0].errorMessage);

      dispatch(hideLoading());

      return false;
    }

    return true;
  }, [changePasswordElements]);

  const onSubmit = () => {
    Keyboard.dismiss();

    setErrorMessage(undefined);

    dispatch(showLoading());

    if (!isConditionsVerified()) { return; }

    const currentUser: User | null = firebaseAuth.currentUser;

    if (currentUser && currentUser.email) {
      const { oldPassword, newPassword } = changePasswordElements;

      reauthenticateWithCredential(currentUser, EmailAuthProvider.credential(currentUser.email, oldPassword.value))
        .then(() => updatePassword(currentUser, newPassword.value))
        .then(() => signOut(firebaseAuth))
        .then(() => {
          dispatch(removeUserBearerToken());
          dispatch(removeUserDetails());
          dispatch(disconnectUser());
        })
        .catch(() => setErrorMessage("Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer."))
        .finally(() => dispatch(hideLoading()));
    }
  }

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {changePasswordElementsKeys.map(renderElement)}

        {errorMessage && (
          <Text
            variant="normal"
            value={errorMessage}
            margin={{ b: 30 }}
            color={colors.primary}
            align="center"
          />
        )}

        <Button
          disabled={isSubmitDisabled}
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