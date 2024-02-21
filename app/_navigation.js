import SignIn from '../screens/SignInScreens/SignIn'
import Layout from './_layout';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpV1 from '../screens/SignUpScreens/SignUp_Verify1';
import SignUpV2 from '../screens/SignUpScreens/SignUp_Verify2';
import SignUpV3 from '../screens/SignUpScreens/SignUp_Verify3';
import ASchedule from '../screens/AppointmentScheduleScreen/AppointmentScheduleScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CardDetailsScreen from '../screens/AppointmentScheduleScreen/CardDetailsScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import CardNotDetailsScreen from '../screens/NotificationScreen/CardNotDetailsSceen';
const App = () => {
  const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Screen name="signIn" component={SignIn}/>
          <Stack.Screen name="signUpV1" component={SignUpV1}/>
          <Stack.Screen name="signUpV2" component={SignUpV2}/>
          <Stack.Screen name="signUpV3" component={SignUpV3}/>     
          <Stack.Screen name="home" component={HomeScreen}/>
          <Stack.Screen name="calendar" component={ASchedule} />
          <Stack.Screen name="cardDetail" component={CardDetailsScreen}/>
          <Stack.Screen name="bell" component={NotificationScreen}/>
          <Stack.Screen name="cardNotDetail" component={CardNotDetailsScreen}/>
        </Stack.Navigator>
    );
  };
  
  export default App;