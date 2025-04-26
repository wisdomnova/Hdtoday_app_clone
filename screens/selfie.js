import React from "react";
import {SafeAreaView,View,Pressable,Text,Image,Alert} from 'react-native';
import {SelfieStyles} from "../styles/stylesheet";
const SelfieScreen = ({route,navigation}) =>{
    const CreateAlert = () =>
    Alert.alert(
        "Allow \"Soco\" to access your camera?",
        "Granting access to the camera will help to make sure you have the best connection with your friends.",
            [
                {
                    text: "Always Allow",
                    onPress: () => navigation.navigate('ConfirmingThanks')
                },
                {
                    text: "Allow Only While Using The App",
                    onPress: () => navigation.navigate('ConfirmingThanks')
                },
                {
                    text: "Don't Allow",
                    style: "cancel"
                }
            ]
        );
    return(
        <SafeAreaView style={SelfieStyles.SelfSafeArea}>
            <View style={SelfieStyles.SelfView}>
                <View style={SelfieStyles.SelfTopView}>
                    <Text style={SelfieStyles.SelfTopText}>One more thing!</Text>
                    <Text style={SelfieStyles.SelfMidText}>Second, we need a selfie.</Text>
                </View>
                <View style={SelfieStyles.SelfTopView}>
                    <Text style={SelfieStyles.SelfMidText}>This will be shown when you meet people to help your friends know who they are connecting</Text>
                </View>
                <Image source={require('./temps/face.png')} style={SelfieStyles.SelfImage}/>
                <View style={SelfieStyles.SelfTopView}>
                    <Text style={SelfieStyles.SelfMidText}>Granting access to the camera while using the app will help to make sure you have the best connection with your friends. </Text>
                </View>
                <View style={SelfieStyles.SelfTabShort}>
                    <Pressable style={SelfieStyles.SelfTabPress} onPress={CreateAlert}>
                        <Text style={SelfieStyles.SelfTabPressText}>Take your selfie</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(SelfieScreen);