import React,{useEffect} from "react";
import {SafeAreaView,View,Text,Image} from 'react-native';
import {ConfirmStyles} from "../styles/stylesheet";
const ConfirmedScreen = ({route,navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Connection');
        }, 1000);
    },[]);
    return(
        <SafeAreaView style={ConfirmStyles.ConfSafeArea}>
            <View style={ConfirmStyles.ConfArea}>
                <Text style={ConfirmStyles.ConfText}>Confirmed!</Text>
                <Image source={require('./temps/check.png')} style={ConfirmStyles.ConfImage}/>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(ConfirmedScreen);