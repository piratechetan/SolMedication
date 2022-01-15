import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Medication from '../Screens/Medication';
import Chat from '../Screens/Chat';
import Today from '../assets/img/planet.png'
import Medicine from '../assets/img/medicine.png'
import Appointments from '../assets/img/deadline.png'
import profile from '../assets/img/profile.jpeg'
import Profile from '../Screens/Profile'
import Appointment from '../Screens/Appointment';
import { Icon } from 'react-native-elements';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor:'#14717c',
          tabBarInactiveTintColor:'rgba(117, 130, 131, 0.7)',
          tabBarLabelStyle:{
              fontSize:12,
              fontWeight:'500'
          }
        }}>
      <Tab.Screen name="Today" component={Home} options={{
          headerShown:false,
          tabBarIcon:({color})=>(
              <Image source={Today} style={{width:25,height:25,}} tintColor={color}/>
          )
      }}/>
      <Tab.Screen name="Medication" component={Medication} options={{
          headerShown:false,
          tabBarIcon:({color})=>(
              <Image source={Medicine} style={{width:25,height:25,}} tintColor={color}/>
          )
      }} />
      <Tab.Screen name="Appointments" component={Appointment} options={{
          headerShown:false,
          tabBarIcon:({color})=>(
            <Icon name="calendar-refresh-outline" type="material-community" size={25} color={color}/>
          )
      }} />
      <Tab.Screen name="Live Chat" component={Chat} options={{
          headerShown:false,
          tabBarIcon:({color})=>(
              <Icon name="chatbubble-ellipses-outline" type="ionicon" size={25} color={color}/>
          )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          headerShown:false,
          tabBarIcon:({color})=>(
            <Image source={profile} style={{width:25,height:25,borderRadius:15}} />
          )
      }} />
    </Tab.Navigator>
    )
}

export default BottomTab
