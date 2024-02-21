import React, { useState } from 'react';
import { StyleSheet, View,Text,FlatList,TouchableOpacity,ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { SIZES,COLORS} from '../../constants';
import { Footer,ScreenHeaderBtn,CardNot } from '../../components';
import icon_Chat from '../../assets/icons/i_chat.png';
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
    const NotData = [
        {
            Notid:'1',
            Notification_Title: 'Thông báo bảo trì',
            Notification_Destription: `tiếp nối các hoạt động nâng cấp, bảo trì toàn diện hệ thống mà Prudential đã thực hiện giữa tháng 2 vừa rồi nhằm cải thiện chất lượng dịch vụ, từ 12h00 Thứ Bảy, ngày 12/03/2022 đến 17h00 Chủ Nhật,
            ngày 13/03/2022 Prudential sẽ tạm dừng các hệ thống để hoàn tất quá trình nâng cấp.

            Trong khoảng thời gian này, chúng tôi rất tiếc sẽ có một số gián đoạn trong các dịch vụ như:
           
           Tất cả các hệ thống phục vụ Khách hàng sẽ tạm ngừng hoạt động bao gồm:
           
           Cổng thông tin Khách Hàng trực tuyến 
           
           Chức năng xem và quản lý hợp đồng bảo hiểm trên các ứng dụng của Ngân hàng liên kết với Prudential và ứng dụng sức khỏe Pulse
           
           Trang Zalo Prudential Vietnam
           
           Các hệ thống xử lý giao dịch tại văn phòng tổng đại lý (trừ các yêu cầu truy vấn thông tin hợp đồng`,
            
        },
        {
          Notid:'2',
          Notification_Title: 'Thông báo bảo trì',
          Notification_Destription: `tiếp nối các hoạt động nâng cấp, bảo trì toàn diện hệ thống mà Prudential đã thực hiện giữa tháng 2 vừa rồi nhằm cải thiện chất lượng dịch vụ, từ 12h00 Thứ Bảy, ngày 12/03/2022 đến 17h00 Chủ Nhật,
          ngày 13/03/2022 Prudential sẽ tạm dừng các hệ thống để hoàn tất quá trình nâng cấp.

          Trong khoảng thời gian này, chúng tôi rất tiếc sẽ có một số gián đoạn trong các dịch vụ như:
         
         Tất cả các hệ thống phục vụ Khách hàng sẽ tạm ngừng hoạt động bao gồm:
         
         Cổng thông tin Khách Hàng trực tuyến 
         
         Chức năng xem và quản lý hợp đồng bảo hiểm trên các ứng dụng của Ngân hàng liên kết với Prudential và ứng dụng sức khỏe Pulse
         
         Trang Zalo Prudential Vietnam
         
         Các hệ thống xử lý giao dịch tại văn phòng tổng đại lý (trừ các yêu cầu truy vấn thông tin hợp đồng`,
          
      },
      {
            Notid:'3',
            Notification_Title: 'Thông báo bảo trì',
            Notification_Destription: `tiếp nối các hoạt động nâng cấp, bảo trì toàn diện hệ thống mà Prudential đã thực hiện giữa tháng 2 vừa rồi nhằm cải thiện chất lượng dịch vụ, từ 12h00 Thứ Bảy, ngày 12/03/2022 đến 17h00 Chủ Nhật,
            ngày 13/03/2022 Prudential sẽ tạm dừng các hệ thống để hoàn tất quá trình nâng cấp.

            Trong khoảng thời gian này, chúng tôi rất tiếc sẽ có một số gián đoạn trong các dịch vụ như:
           
           Tất cả các hệ thống phục vụ Khách hàng sẽ tạm ngừng hoạt động bao gồm:
           
           Cổng thông tin Khách Hàng trực tuyến 
           
           Chức năng xem và quản lý hợp đồng bảo hiểm trên các ứng dụng của Ngân hàng liên kết với Prudential và ứng dụng sức khỏe Pulse
           
           Trang Zalo Prudential Vietnam
           
           Các hệ thống xử lý giao dịch tại văn phòng tổng đại lý (trừ các yêu cầu truy vấn thông tin hợp đồng`,
            
        },
        {
          Notid:'4',
          Notification_Title: 'Thông báo bảo trì',
          Notification_Destription: `tiếp nối các hoạt động nâng cấp, bảo trì toàn diện hệ thống mà Prudential đã thực hiện giữa tháng 2 vừa rồi nhằm cải thiện chất lượng dịch vụ, từ 12h00 Thứ Bảy, ngày 12/03/2022 đến 17h00 Chủ Nhật,
          ngày 13/03/2022 Prudential sẽ tạm dừng các hệ thống để hoàn tất quá trình nâng cấp.

          Trong khoảng thời gian này, chúng tôi rất tiếc sẽ có một số gián đoạn trong các dịch vụ như:
         
         Tất cả các hệ thống phục vụ Khách hàng sẽ tạm ngừng hoạt động bao gồm:
         
         Cổng thông tin Khách Hàng trực tuyến 
         
         Chức năng xem và quản lý hợp đồng bảo hiểm trên các ứng dụng của Ngân hàng liên kết với Prudential và ứng dụng sức khỏe Pulse
         
         Trang Zalo Prudential Vietnam
         
         Các hệ thống xử lý giao dịch tại văn phòng tổng đại lý (trừ các yêu cầu truy vấn thông tin hợp đồng`,
          
       },
       {
        Notid:'5',
        Notification_Title: 'Thông báo bảo trì',
        Notification_Destription:`tiếp nối các hoạt động nâng cấp, bảo trì toàn diện hệ thống mà Prudential đã thực hiện giữa tháng 2 vừa rồi nhằm cải thiện chất lượng dịch vụ, từ 12h00 Thứ Bảy, ngày 12/03/2022 đến 17h00 Chủ Nhật,
        ngày 13/03/2022 Prudential sẽ tạm dừng các hệ thống để hoàn tất quá trình nâng cấp.

        Trong khoảng thời gian này, chúng tôi rất tiếc sẽ có một số gián đoạn trong các dịch vụ như:
       
       Tất cả các hệ thống phục vụ Khách hàng sẽ tạm ngừng hoạt động bao gồm:
       
       Cổng thông tin Khách Hàng trực tuyến 
       
       Chức năng xem và quản lý hợp đồng bảo hiểm trên các ứng dụng của Ngân hàng liên kết với Prudential và ứng dụng sức khỏe Pulse
       
       Trang Zalo Prudential Vietnam
       
       Các hệ thống xử lý giao dịch tại văn phòng tổng đại lý (trừ các yêu cầu truy vấn thông tin hợp đồng`,
        
     },
    
      
        
      ];
    return (
    <View style={styles.container}>
        <Stack.Screen
        options={{headerTitle:"Thông báo",
                  headerTitleStyle:{color:COLORS.blue},
                  headerRight:() =>(<ScreenHeaderBtn iconUrl={icon_Chat} idBtnMini='Btn_Chat' dimension="80%"/>),
                }}
        />
      
      <ScrollView style={styles.card_Container}>
        
          {NotData.map((item,index) => (
            <CardNot
              key={index}
              idCard={item.Notid}
              Notification_Title={item.Notification_Title}
              Notification_Destription={item.Notification_Destription}
              handlePress={() => navigation.navigate('cardNotDetail', { selectedCard: item })}
            />
          ))}
      </ScrollView>              
      <Footer name='bell'/>

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
