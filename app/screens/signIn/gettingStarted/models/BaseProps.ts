import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {UnrestrictedStackParamList} from "@app/navigation/models";

type BaseProps = {
    navigation: NativeStackNavigationProp<UnrestrictedStackParamList, 'SignIn'>
}

export default BaseProps;