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
        alignItems: "center",
        justifyContent: "center"
    },
    listItemWrapper: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    listItemHorizontalContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    imageLeftContainer: {
        marginRight: 10
    }
})