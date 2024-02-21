import { View,Text } from "react-native";
import { COLORS} from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { ScreenBtn,CustomInput } from "../../components";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Home = () =>{
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
            
            <Text style={{fontSize:40,color:COLORS.lightBule,fontWeight:700,textAlign:"center"}}>ĐĂNG NHẬP</Text>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                <CustomInput widthCustom={50} editable={false} placeholder="+84"/>
                <CustomInput widthCustom={236} enabled="true" keyboardType="phone-pad" editable={true} placeholder="Nhập số điện thoại"/>

            </View>
            <ScreenBtn textBtn={"ĐĂNG NHẬP"} handlePress={()=>navigation.navigate("home")}/>
            <ScreenBtn textBtn={"ĐĂNG KÝ"} handlePress={()=>navigation.navigate("signUpV1")}/>
        </SafeAreaView>
    )
}

export default Home;