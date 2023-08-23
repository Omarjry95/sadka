import { ChangePasswordElementValueProp, ChangePasswordElementHiddenProp } from "@app/screens/changePassword/models";

type ChangePasswordElementStaticProps = {
  label: string,
  helpComponent?: () => JSX.Element
};

type ChangePasswordElementBaseProps = ChangePasswordElementValueProp & ChangePasswordElementHiddenProp & ChangePasswordElementStaticProps;

export default ChangePasswordElementBaseProps;