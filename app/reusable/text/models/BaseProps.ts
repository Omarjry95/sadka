import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseProps = {
    value: string,
    color?: ColorValue,
    size?: number,
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export default BaseProps;