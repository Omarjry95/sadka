import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    textInputWrapper: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    textInput: {
        width: "100%",
        fontFamily: "OpenSans"
    }
});