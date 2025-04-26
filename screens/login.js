import React,{useEffect} from 'react';
import {View,Text,Pressable,SafeAreaView,StatusBar,Image,TextInput} from 'react-native';
import Utilstyle from '../styles/stylesheet';
const LoginScreen = ({route,navigation}) =>{
  return(
    <SafeAreaView style={Utilstyle.SafeArea}>
      <View style={Utilstyle.RootView}>
        <Image source={require('./temps/soco.png')} style={Utilstyle.RootImageTop}/>
        <Image source={require('./temps/soco-group.png')} style={Utilstyle.RootImageMid}/>
        <View style={Utilstyle.RootTextBar}>
          <Text style={Utilstyle.RootTextBold}>Start Connecting</Text>
          <Text style={Utilstyle.RootTextLight}>Meet, Coordinate and Hang with the people around you.</Text>
        </View>
        <View style={Utilstyle.RootTabShort}>
          <TextInput style={Utilstyle.RootTabInput} placeholder='First Name' selectionColor={'#000'} returnKeyType="next" spellCheck={false} placeholderTextColor="#E5E5E5" editable={true}/>
          <TextInput style={Utilstyle.RootTabInput} placeholder='Last Name' selectionColor={'#000'} returnKeyType="next" spellCheck={false} placeholderTextColor="#E5E5E5" editable={true}/>
        </View>  
        <View style={Utilstyle.RootTabShort}>
          <TextInput style={Utilstyle.RootTabInputLong} placeholder='Password' selectionColor={'#000'} returnKeyType="next" spellCheck={false} placeholderTextColor="#E5E5E5" editable={true}/>
        </View>
        <View style={Utilstyle.RootTabShort}>
          <Pressable style={Utilstyle.RootTabPress} onPress={() => navigation.navigate('Confirming')}>
            <Text style={Utilstyle.RootTabPressText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(LoginScreen);