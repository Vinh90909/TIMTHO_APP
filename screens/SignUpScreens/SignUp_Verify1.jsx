import { View,Text,FlatList } from "react-native";
import { COLORS,images,icons,theme,SIZES,FONT } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { ScreenBtn,CustomInput } from "../../components";
import React, { useState } from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const jobTypes = ["Thợ", "Thợ cả"];
const SignUp = () =>{
    const [isAgreed, setIsAgreed] = useState(false);
    const [activeJobType, setActiveJobType] = useState("Thợ");
    const [IsMenTor,setMentor]=useState(1)
    const handleAgreePress = () => {
        setIsAgreed(!isAgreed);
    };
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{backgroundColor:COLORS.white,alignItems:"center"}}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.white},
                    headerShadowVisible:false,
                    headerTitle:""
                    
                }}
            />
            
            <Text style={{fontSize:40,color:COLORS.lightBule,fontWeight:700,textAlign:"center"}}>ĐĂNG KÝ</Text>
            
            <View style={stylesAgreement.tabsContainer}>
              <FlatList
                data={jobTypes}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={stylesAgreement.tab(activeJobType, item)}
                    onPress={() => {
                      setActiveJobType(item);
                      
                      item==="Thợ cả"? setMentor(0):setMentor(1);
                    }}
                  >
                    <Text style={stylesAgreement.tabText(activeJobType, item)}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
              />
            </View>

            <CustomInput widthCustom={236} enabled="true" keyboardType="phone-pad" editable={true} placeholder="Nhập số điện thoại"/>

            <CustomInput widthCustom={236} enabled="true" editable={true} placeholder="Nhập số CCCD"/>

            <CustomInput widthCustom={236} enabled="true" editable={true} placeholder="Nhập họ tên"/>

            <CustomInput widthCustom={236} enabled="true" editable={true} placeholder="Nhập địa chỉ thường trú"/>

            <CustomInput widthCustom={236} opacityCustom={IsMenTor} enabled="true" editable={true} placeholder="Nhập mã người phụ trách"/>

            <View style={stylesAgreement.agreementContainer}>
                <TouchableOpacity
                    style={[stylesAgreement.checkBox, isAgreed ? stylesAgreement.checkedBox : null]}
                    onPress={handleAgreePress}
                />

                <Text style={stylesAgreement.agreementText}>
                    Đồng ý với các điều khoản dịch vụ
                </Text>
            </View>
            <ScreenBtn textBtn={"TIẾP THEO"} handlePress={()=>navigation.navigate("signUpV2")}/>
        </SafeAreaView>
    )
}
const stylesAgreement = StyleSheet.create({
    agreementContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    checkBox: {
      width: 20,
      height: 20,
      borderWidth: 3,
      borderRadius:50,
      borderColor: 'lightgreen',
      marginRight: 10,
    },
    checkedBox: {
      backgroundColor: 'lightgreen',
    },
    agreementText: {
      fontSize: 16,
      color:COLORS.gray,
      fontStyle:"italic",  
    },
    tabsContainer: {
      width: "100%",
      margin: SIZES.medium,
      alignItems:"center",
      alignContent:"center"
    },
    tab: (activeJobType, item) => ({
      paddingVertical: SIZES.small / 2,
      paddingHorizontal: SIZES.xLarge,
      borderRadius: SIZES.large,
      borderWidth: 1,
      borderColor: activeJobType === item ? COLORS.lightBule : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
      fontSize:SIZES.xLarge,
      color: activeJobType === item ? COLORS.lightBule : COLORS.gray2,
    }),
  });
export default SignUp;