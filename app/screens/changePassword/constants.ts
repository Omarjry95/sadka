import {ChangePasswordElementBaseProps} from "@app/screens/changePassword/models";

export const changePasswordElementDefaultValue = (label: string, helpComponent?: () => JSX.Element): ChangePasswordElementBaseProps => ({
  value: '',
  hidden: true,
  label,
  helpComponent
});