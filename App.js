import React,{useEffect} from 'react';
import {StatusBar,View,LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens,enableFreeze} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import login from './screens/login';
import confirming from './screens/confirming';
import confirmed from './screens/confirmed';
import connection from './screens/connection';
import selfie from './screens/selfie';
import confirmingthanks from './screens/confirmingthanks';
import confirmedset from './screens/confirmedset';
import settings from './screens/settings';
import contacts from './screens/contacts';
import chats from './screens/chats';
import chat from './screens/chat';
import {TabStyles} from './styles/stylesheet';
const EnableScreen = enableScreens();
const EnableFreeze = enableFreeze(true);
const Tab =  createBottomTabNavigator();
const Stack = createStackNavigator();
const TabScreen = ({route,navigation}) => {
  return(
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel : false,
        headerShown: false,
        tabBarStyle: {
          ...TabStyles.TabBottomBlank
        }
      }}>
          <Tab.Screen name='Settings' component={settings} options={{
            tabBarIcon : ({focused}) => {
              if(focused){
                return (
                  <>
                    <View style={TabStyles.TabPressFocused}>
                      <MaterialIcons name='settings' size={30}/>
                    </View>
                  </>
                );
              }else{
                return (
                  <>
                    <View style={TabStyles.TabPressUnFocused}>
                      <MaterialIcons name='settings' size={30}/>
                    </View>
                  </>
                );
              }
            }
          }}/>
          <Tab.Screen name='Contacts' component={contacts} options={{
            tabBarIcon : ({focused}) => {
              if(focused){
                return (
                  <>
                    <View style={TabStyles.TabPressFocused}>
                      <MaterialIcons name='people-outline' size={30}/>
                    </View>
                  </>
                );
              }else{
                return (
                  <>
                    <View style={TabStyles.TabPressUnFocused}>
                      <MaterialIcons name='people-outline' size={30}/>
                    </View>
                  </>
                );
              }
            }
          }}/>
          <Tab.Screen name='Chats' component={chats} options={{
            tabBarIcon : ({focused}) => {
              if(focused){
                return (
                  <>
                    <View style={TabStyles.TabPressFocused}>
                      <Ionicons name='chatbubble-ellipses-outline' size={30}/> 
                    </View>
                  </>
                );
              }else{
                return (
                  <>
                    <View style={TabStyles.TabPressUnFocused}>
                      <Ionicons name='chatbubble-ellipses-outline' size={30}/>
                    </View>
                  </>
                );
              }
            }
          }}/>
      </Tab.Navigator>

  );
};
const App = () =>{
  useEffect(()=>{
    LogBox.ignoreAllLogs();
    setTimeout(()=>{
      SplashScreen.hide();
    },200);
  }, []);
  return(
    <>
    <StatusBar animated={true} backgroundColor="#fff" showHideTransition='slide' barStyle='dark-content'/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' 
      screenOptions={{
        animation: 'slide_from_left',
        presentation: 'card',
        headerShown: false,
      }}>
        <Stack.Screen name='Tab' component={TabScreen}></Stack.Screen>
        <Stack.Screen name='Login' component={login}></Stack.Screen>
        <Stack.Screen name='Confirming' component={confirming}></Stack.Screen>
        <Stack.Screen name='Confirmed' component={confirmed}></Stack.Screen>
        <Stack.Screen name='Connection' component={connection}></Stack.Screen>
        <Stack.Screen name='Selfie' component={selfie}></Stack.Screen>
        <Stack.Screen name='ConfirmingThanks' component={confirmingthanks}></Stack.Screen>
        <Stack.Screen name='ConfirmedSet' component={confirmedset}></Stack.Screen>
        <Stack.Screen name='Chat' component={chat}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> 
    </>
  );
};
export default React.memo(App);