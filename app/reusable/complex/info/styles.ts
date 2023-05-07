import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    }
})