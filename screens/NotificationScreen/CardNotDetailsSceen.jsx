import React from 'react';
import { ScrollView,View,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { COLORS,SIZES } from '../../constants';
import { Stack } from 'expo-router';

const CardDetailsScreen = () => {
  const route = useRoute();
  const { selectedCard } = route.params;
  return (
    
    <ScrollView style ={{flex:1}}>
      <Stack.Screen options={{headerTitle:"Chi tiết thông báo",
                  headerTitleStyle:{color:COLORS.blue},
                }}/>
        
    
      {/* Hiển thị thông tin chi tiết dựa trên selectedCard */}
      <ScrollView style={styles.container}>
        <Text style={styles.text_title}>{selectedCard.Notification_Title}</Text>
        <Text style={styles.text_des}>{selectedCard.Notification_Destription}</Text>
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "90%",
    height: "100%",
    backgroundColor: COLORS.lightBule,
    borderRadius: SIZES.medium,
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
});

export default CardDetailsScreen;