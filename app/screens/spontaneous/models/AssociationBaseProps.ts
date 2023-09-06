import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import {Dispatch, SetStateAction} from "react";

type AssociationBaseProps = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'>,
  association: string | null,
  setAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;