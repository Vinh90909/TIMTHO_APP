import styles from "./Card_AppointmentSchedule.style";
import { Text, TouchableOpacity,View } from "react-native";

const ScreenCardAS = ({
                Job_Type
                ,Job_Name
                ,Job_Customer
                ,Job_Prize
                ,Job_State
                ,Job_Time
                ,Job_Location
                ,idCard
                ,handlePress}) => {
  return (
    <TouchableOpacity id={idCard} style={styles.CardContainer} onPress={handlePress}>
      
      <View style={styles.rightContainer}>
        <Text style={styles.CardText}>- Công việc: {Job_Name}</Text>
        <Text style={styles.CardText}>- Thời gian: {Job_Time}</Text>
        <Text style={styles.CardText}>- Địa điểm: {Job_Location}</Text>
      </View>
      <View style={styles.leftContainer}>
        <Text style={styles.CardTitle}>{Job_Type}</Text>
        <Text style={styles.CardText}>{Job_Customer}</Text>
        <Text style={styles.CardText}>Giá: {Job_Prize}</Text>
        <Text style={styles.CardText}>Trạng thái: {Job_State}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScreenCardAS;