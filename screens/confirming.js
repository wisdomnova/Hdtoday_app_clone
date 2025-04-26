import React,{useEffect} from "react";
import {SafeAreaView,View,Text,Image,Animated,Easing} from 'react-native';
import {ConfirmStyles} from "../styles/stylesheet";
const ConfirmingScreen = ({route,navigation}) => {
    const spinValue = new Animated.Value(0);
    Animated.loop(
        Animated.timing(spinValue,{
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
          delay: 0,
        })).start();
      const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      });
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Confirmed');
        }, 5000);
    },[]);
    return(
        <SafeAreaView style={ConfirmStyles.ConfSafeArea}>
            <View style={ConfirmStyles.ConfArea}>
                <Text style={ConfirmStyles.ConfText}>Confirming, please hold on...</Text>
                <Animated.Image source={require('./temps/loader.png')} style={[ConfirmStyles.ConfImage,{transform:[{rotate:spin}]}]}/>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(ConfirmingScreen);