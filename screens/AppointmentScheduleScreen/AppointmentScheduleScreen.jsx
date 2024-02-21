import React, { useState } from 'react';
import { StyleSheet, View,Text,Image,FlatList,TouchableOpacity,ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { SIZES,COLORS} from '../../constants';
import { Footer,ScreenHeaderBtn,CardAS } from '../../components';
import icon_Chat from '../../assets/icons/i_chat.png';
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
    const jobData = [
        {
            Jid:'1',
            Job_Type: 'Sửa đồ điện tử',
            Job_Name: 'Sửa lap top',
            Job_Customer: 'Nguyễn Văn An',
            Job_Prize: '1.000.000 VNĐ',
            Job_State: "Yêu cầu",
            Job_Time: '2023-08-25',
            Job_Location: '214a/5 khu phố 1, thị trấn đức hòa,huyện đức hòa,tỉnh long an',
        },
        {
          Jid:'2',
          Job_Type: 'program software',
          Job_Name: 'Project 4',
          Job_Customer: 'Customer C',
          Job_Prize: '$5500',
          Job_State: "Yêu cầu",
          Job_Time: '2023-08-25',
          Job_Location: 'City X',
        },
        {
          Jid:'3',
          Job_Type: 'program software',
          Job_Name: 'Project C',
          Job_Customer: 'Customer C',
          Job_Prize: '$5500',
          Job_State: "Yêu cầu",
          Job_Time: '2023-08-25',
          Job_Location: 'City X',
        },
        {
          Jid:'4',
          Job_Type: 'program software',
          Job_Name: 'Project A',
          Job_Customer: 'Customer A',
          Job_Prize: '$5000',
          Job_State: "Lịch hẹn",
          Job_Time: '2023-08-25',
          Job_Location: 'City X',
        },
        {
          Jid:'5',
          Job_Type: 'program software',
          Job_Name: 'Project B',
          Job_Customer: 'Customer B',
          Job_Prize: '$7500',
          Job_State: "Hoàn thành",
          Job_Time: '2023-07-15',
          Job_Location: 'City Y',
        },
        {
          Jid:'6',
            Job_Type: 'program software',
            Job_Name: 'Project D',
            Job_Customer: 'Customer D',
            Job_Prize: '$7500',
            Job_State: "Đã hủy",
            Job_Time: '2023-07-15',
            Job_Location: 'City Y',
          },
      ];
   
    const AS_State = ["Yêu cầu", "Lịch hẹn","Hoàn thành","Đã hủy"];

    const [activeAS_State, setActiveAS_State] = useState("Yêu cầu");
    const filteredJobs = jobData.filter(job => job.Job_State === activeAS_State);
    return (
    <View style={styles.container}>
        <Stack.Screen
        options={{headerTitle:"Lịch hẹn",
                  headerTitleStyle:{color:COLORS.blue},
                  headerRight:() =>(<ScreenHeaderBtn iconUrl={icon_Chat} idBtnMini='Btn_Chat' dimension="80%"/>),
                }}
        />
        <View style={styles.tabsContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data = {AS_State}
                dataCardAS = {jobData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.tab(activeAS_State, item)}
                    onPress={() => {
                        setActiveAS_State(item);
                        
                        
                    }}>
                    <Text style={styles.tabText(activeAS_State, item)}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
              />
            </View>
      
      <ScrollView style={styles.card_Container}>
        
          {filteredJobs.map((item,index) => (
            <CardAS
              key={index}
              idCard={item.Jid}
              Job_Type={item.Job_Type}
              Job_Name={item.Job_Name}
              Job_Customer={item.Job_Customer}
              Job_Location={item.Job_Location}
              Job_Prize={item.Job_Prize}
              Job_Time={item.Job_Time}
              Job_State={item.Job_State}
              handlePress={() => navigation.navigate('cardDetail', { selectedCard: item })}
            />
          ))}
      </ScrollView>              
      <Footer name='calendar'/>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white,
      },
    tabsContainer: {
      
      width: "100%",
      margin: SIZES.small,
      alignItems:"center",
      alignContent:"center"
    },
    tab: (activeJobType, item) => ({
      paddingVertical: SIZES.small / 2,
      paddingHorizontal: SIZES.xLarge,
      borderRadius: SIZES.large,
      borderWidth: 2,
      borderColor: activeJobType === item ? COLORS.blue : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
      fontSize:SIZES.large,
      color: activeJobType === item ? COLORS.blue : COLORS.gray2,
    }),
    card_Container:{
        flex:1,
        width: "100%",
        margin: SIZES.small,
        alignContent:"center",
    },
  });
