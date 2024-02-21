import styles from "./Card_Notification.style";
import { Text, TouchableOpacity,View } from "react-native";

const ScreenCardNC = ({
                Notification_Title
                ,Notification_Destription
                ,idCard
                ,handlePress}) => {
  return (
    <TouchableOpacity id={idCard} style={styles.CardContainer} onPress={handlePress}>
      
      <View style={styles.rightContainer}>
        <Text style={styles.CardText}>- Chi tiết: {Notification_Destription.slice(0,100)}...</Text>
        
      </View>
      <View style={styles.leftContainer}>
        <Text style={styles.CardTitle}>- Tiêu đề: {Notification_Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScreenCardNC;