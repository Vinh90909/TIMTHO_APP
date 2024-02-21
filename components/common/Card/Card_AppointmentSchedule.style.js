import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    
    CardContainer:{
    flex:1,
    width: "95%",
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    padding:"5%",
    marginBottom:"5%"
  },
  CardTitle:{
    fontSize:16,
    fontWeight:'900',
    color:COLORS.lightBule2,
  },
  CardText:{
    fontSize:14,
    color:COLORS.white,
  },
  leftContainer: {
    width:"100%",
    height:"100%",
    flex: 1, // Chiếm 1 phần (để nội dung có thể wrap xuống dòng)
  },
  rightContainer: {
    width:"100%",
    height:"100%",
    flex: 1, // Chiếm 1 phần (để nội dung có thể wrap xuống dòng)
    // Không cần khoảng cách
  },
});

export default styles;