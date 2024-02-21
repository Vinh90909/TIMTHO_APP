import {StyleSheet} from "react-native";
import { COLORS,SIZES } from "../../../constants";
const styles = StyleSheet.create({
    input: {
      
      marginHorizontal:5,  
      color:COLORS.gray,
      height:40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:20,
      paddingHorizontal: 10,
      marginBottom: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)', // Màu bóng đổ (RGB + độ trong suốt)
      shadowOffset: { width: 0, height: 2 }, // Độ dài và chiều cao của bóng đổ (độ phân giải)
      shadowOpacity: 1, // Độ đậm của bóng đổ (0 - 1)
      shadowRadius: 2, // Bán kính bóng đổ
      elevation: 2, // Tương đương với shadowOpacity, chỉ có hiệu lực trên Android
    },
  });
  
  export default styles;