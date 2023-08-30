import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 70,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center"
  },
  coverSection: {
    width: "100%",
    marginBottom: 30,
    flex: 1
  },
  mainSection: {
    width: "100%",
    backgroundColor: "black",
    position: "relative"
  },
  mainContent: {
    width: "100%",
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: "column",
    alignItems: "center"
  },
  actionsContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  actionButtonContentContainer: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  curvedLine: {
    width: "20%",
    height: 60,
    backgroundColor: "black",
    borderRadius: 35,
    position: "absolute",
    top: -30,
    left: "40%",
    transform: [{ scaleX: 5 }, { scaleY: 1 }]
  }
})