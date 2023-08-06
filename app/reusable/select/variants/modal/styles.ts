import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start"
    },
    modalBody: {
        width: "100%",
        maxHeight: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    listItemContainer: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    imageLeftContainer: {
        marginRight: 10
    }
})