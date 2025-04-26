import React from "react";
import {SafeAreaView,View,Text,Pressable,Image,Alert} from 'react-native';
import {ConnectionStyles} from "../styles/stylesheet";
const ConnectionScreen = ({route,navigation}) =>{
    const CreateAlert = () =>
        Alert.alert(
            "Allow \"Soco\" to use Bluetooth?",
            "We need access to Bluetooth to help you connect with the friends around you.",
                [
                    {
                        text: "Allow",
                        onPress: () => navigation.navigate('Selfie')
                    },
                    {
                        text: "Don't Allow",
                        style: "cancel"
                    }
                ]
            );
    return(
        <SafeAreaView style={ConnectionStyles.ConnSafeArea}>
            <View style={ConnectionStyles.ConnView}>
                <View style={ConnectionStyles.ConnTopView}>
                    <Text style={ConnectionStyles.ConnTopText}>Two things and we’re done!</Text>
                    <Text style={ConnectionStyles.ConnMidText}>First, we need access to Bluetooth</Text>
                    <Text style={ConnectionStyles.ConnBottomText}>By using Bluetooth, you are able to connect with friends that you have confirmed </Text>
                </View>
                <Image source={require('./temps/bluetooth.png')} style={ConnectionStyles.ConnImage}/>
                <View style={ConnectionStyles.ConnTabShort}>
                    <Pressable style={ConnectionStyles.ConnTabPress} onPress={CreateAlert}>
                        <Text style={ConnectionStyles.ConnTabPressText}>Grant Access to Bluetooth</Text>
                    </Pressable>
                    <Pressable style={ConnectionStyles.ConnTabPressWhite} onPress={() => navigation.navigate('Selfie')}>
                        <Text style={ConnectionStyles.ConnTabPressTextWhite}>Skip</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(ConnectionScreen); 