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
    height: '40%',
    marginBottom: 30
  },
  mainSection: {
    width: "100%",
    backgroundColor: "black",
    position: "relative",
    flex: 1
  },
  mainContent: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    flex: 1
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