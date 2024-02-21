import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  btnContainer: {
    marginVertical:10,
    width: 300,
    height: 70,
    backgroundColor: COLORS.blue,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  TextBtn: () => ({
    color:COLORS.white,
    fontSize:SIZES.large,
  }),
});

export default styles;