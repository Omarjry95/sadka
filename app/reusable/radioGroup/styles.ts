import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioContainer: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    radio: {
        padding: 5,
        borderWidth: 2
    },
    radioEye: {
        width: '100%',
        height: '100%'
    },
    label: {
        marginLeft: 10,
        color: 'black',
        fontFamily: "OpenSans",
        flex: 1
    }
})