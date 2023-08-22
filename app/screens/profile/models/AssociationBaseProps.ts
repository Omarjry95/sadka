import { Dispatch, SetStateAction } from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RestrictedStackParamList} from "@app/navigation/models";

type AssociationBaseProps = {
    defaultAssociation: string | null,
    setNewDefaultAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;