import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    wrapper: {
        width: "100%",
        padding: 15,
        position: "relative",
        zIndex: 2,
        flexDirection: "column",
        alignItems: "center"
    },
    pressableBackdrop: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    modalBody: {
        width: "100%",
        padding: 15,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: "relative",
        flexDirection: "column",
        alignItems: "center"
    },
    iconContainer: {
        width: 20,
        height: 20,
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
        position: "relative",
        bottom: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})