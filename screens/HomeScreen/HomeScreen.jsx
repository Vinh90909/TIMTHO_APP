import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View,Text,Image } from 'react-native';
import { COLORS,SIZES } from '../../constants';
import axios from 'axios';
import { Footer,ScreenHeaderBtn } from '../../components';
import { Stack } from 'expo-router';
import icon_Chat from '../../assets/icons/i_chat.png';
export default function App() {
  const [mapLat, setMapLat] = useState(10.807380098723373);
  const [mapLong, setMapLong] = useState(106.62875216611239);

  const Mentor_ = {name:"Nguyễn Văn An",mentor:"Hoàng Xuân Bách",follow:100,img:"people.jpg",address: "Your First Address"}
  const locationData = [
    { address: Mentor_.address },
  ];
 
//   useEffect(() => {
//     // Chuyển đổi địa chỉ sang tọa độ
//     locationData.forEach((data, index) => {
//       const apiKey = 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8';
//       axios
//         .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(data.address)}&key=${apiKey}`)
//         .then((response) => {
//           const results = response.data.results;
//           if (results.length > 0) {
//             const location = results[0].geometry.location;
//             setMapLat(location.lat);
//             setMapLong(location.lng);
//           } else {
//             console.error('Không tìm thấy tọa độ cho địa chỉ đã cho.');
//           }
//         })
//         .catch((error) => {
//           console.error('Lỗi khi gửi yêu cầu API Geocoding: ', error);
//         });
//     });
//   }, []);

  return (
    <View style={styles.container}>
        <Stack.Screen
        options={{headerTitle:"Trang chủ",
                  headerTitleStyle:{color:COLORS.blue},
                  headerRight:() =>(<ScreenHeaderBtn iconUrl={icon_Chat} idBtnMini='Btn_Chat' dimension="80%"/>),
                }}
        />
        <View style={styles.card_cs}>
            <Image style={styles.imgage_cs} source={require("../../assets/images/people.jpg")}/>
            <View>
                
                <Text style={styles.txt_data}><Text style={styles.txt_title}>Tên thợ: </Text> {Mentor_.name}</Text>
                <Text style={styles.txt_data}><Text style={styles.txt_title}>Thuộc thợ cả: </Text> {Mentor_.mentor}</Text>
                <Text style={styles.txt_data}><Text style={styles.txt_title}>Lượt theo dõi: </Text>{Mentor_.follow}</Text>
            </View>
        </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locationData.map((data, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: mapLat,
              longitude: mapLong,
            }}
            title={`Vị trí của ${Mentor_.name}`}
            description={`Address: ${data.address}`}
          />
        ))}
      </MapView>
      <Footer name='home'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
  },
  map: {
    borderColor:'blue',
    width: '100%',
    height: '75%',
  },
  txt_title:{
    color:COLORS.blue,
    fontSize:SIZES.large,
    fontWeight:'bold'
  },
  txt_data:{
    color:COLORS.white,
    fontSize:SIZES.medium,
    fontWeight:'bold'
  },
  imgage_cs:{
    height:80,
    width:80,
    borderColor:COLORS.blue,
    borderRadius:20,
    marginRight:10,
  },
  card_cs:{
    paddingTop:15,
    flex: 1, 
    flexDirection: 'row',
    backgroundColor:COLORS.lightBule,
    height:100
  }
});
