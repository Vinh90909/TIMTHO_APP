import styles from "./ScreenBtn.style";
import { Text, TouchableOpacity } from "react-native";

const ScreenBtn = ({textBtn,idBtn,handlePress}) => {
  return (
    <TouchableOpacity id={idBtn} style={styles.btnContainer} onPress={handlePress}>
      <Text style={styles.TextBtn()}>
        {textBtn}
      </Text>
    </TouchableOpacity>
  );
};

export default ScreenBtn;