import React from 'react';
import { ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { COLORS,SIZES } from '../../constants';
import { ScreenBtn } from '../../components';
import { Stack } from 'expo-router';

const CardDetailsScreen = () => {

  const route = useRoute();
  const { selectedCard } = route.params;

  console.log(selectedCard.Job_State)
  return (
    
    <View style ={{flex:1}}>
      <Stack.Screen options={{headerTitle:"Chi tiết công việc",
                  headerTitleStyle:{color:COLORS.blue},
                }}/>
        
    
      {/* Hiển thị thông tin chi tiết dựa trên selectedCard */}
      <View style={styles.container}>
        <Text style={styles.text_des}><Text style={styles.text_title}>Loại dịch vụ: </Text>{selectedCard.Job_Type}</Text>
        <Text style={styles.text_des}><Text style={styles.text_title}>Tên công việc: </Text> {selectedCard.Job_Name}</Text>
        <Text style={styles.text_des}><Text style={styles.text_title}>Khách hàng: </Text>{selectedCard.Job_Customer}</Text>
        <Text style={styles.text_des}><Text style={styles.text_title}>Thời gain: </Text>{selectedCard.Job_Time}</Text>
        <Text style={styles.text_des}><Text style={styles.text_title}>Giá: </Text>{selectedCard.Job_Prize}</Text>
        <Text style={styles.text_des}><Text style={styles.text_title}>Địa điểm: </Text>{selectedCard.Job_Location}</Text>
      </View>
      
      <View style={styles.container_Btn(selectedCard.Job_State)}>
        <Text style={{color:COLORS.blue,fontSize:SIZES.large,fontWeight:"bold"}}>Điền báo giá</Text>
        <TextInput style={{width:"80%",height:"15%",borderWidth: 1,borderRadius:30}} placeholder="0,00"/>
        <ScreenBtn textBtn={"Hủy"} width={"50%"}/>
        <ScreenBtn textBtn={"Xác nhận"}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "90%",
    height: "100%",
    backgroundColor: COLORS.lightBule,
    borderRadius: SIZES.medium,
    justifyContent: "space-around",
    alignItems:"baseline",
    padding:"10%",
    margin:"5%",
  },
  text_title:{
    fontSize:20,
    fontWeight:'900',
    color:COLORS.lightBule2,
  },
  text_des:{
    fontSize:16,
    color:COLORS.white,
  },
  container_Btn: (enable) => ({
    
    flex:1,
    alignItems:'center',
    alignContent:'center',
    opacity:enable==="Yêu cầu"?1:0,
  }),
});

export default CardDetailsScreen;