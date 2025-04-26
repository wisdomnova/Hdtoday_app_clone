import React from 'react';
import {View} from 'react-native';
import {TabStyles} from './styles/stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import settings from './screens/settings';
import contacts from './screens/contacts';
import chat from './screens/chat';
const Tab =  createBottomTabNavigator();
const Def = () =>{
  return(<View></View>);
}
const TabScreen = ({route,navigation}) => {
    return(
      <NavigationContainer>
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
            <Tab.Screen name='Chat' component={chat} options={{
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
      </NavigationContainer>
    );
};
export default React.memo(TabScreen);