import React,{useEffect,useState} from 'react';
import {SafeAreaView,View,Text,Pressable,Image,Switch,ScrollView} from 'react-native';
import {IconFill,IconOutline} from '@ant-design/icons-react-native';
import {SettingsStyles} from '../styles/stylesheet';
import Statusbar from './statusbar';
const SettingsScreen = ({route, navigate}) =>{
    const [isPushEnabled, setIsPushEnabled] = useState(true);
    const [isBlueEnabled, setIsBlueEnabled] = useState(true);
    const togglePushSwitch = () => {
        setIsPushEnabled(previousState => !previousState);
    };
    const toggleBlueSwitch = () => {
        setIsBlueEnabled(previousState => !previousState);
    };
    return(
        <> 
        <Statusbar backgroundColor='#F6F6F6'/>
        <SafeAreaView style={SettingsStyles.SeSafeArea}>
            <ScrollView style={SettingsStyles.SeTabView}>
                <View style={SettingsStyles.SeTopView}>
                    <Text style={SettingsStyles.SeTopViewText}>Settings</Text>
                </View>
                <View style={SettingsStyles.SeProfileView}>
                    <Image source={require('./temps/profile.png')} style={SettingsStyles.SeProfileViewImg}/>
                    <Text style={SettingsStyles.SeProfileViewText}>Ben Glass</Text>
                </View>
                <View style={SettingsStyles.SeUtilView}>
                    <Text style={SettingsStyles.SeGreyText}>Account Settings</Text>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Change Password</Text>
                        <IconOutline name='right' size={15} style={SettingsStyles.SeUtilPressIcon}/>
                    </Pressable>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Push Notification</Text> 
                        <Switch 
                            trackColor={{false: "lightgrey", true: "#008EFF"}} 
                            thumbColor={isPushEnabled ? "#fff" : "white"} 
                            ios_backgroundColor="grey" 
                            onValueChange={togglePushSwitch} 
                            value={isPushEnabled} 
                            style={SettingsStyles.SeUtilPressSwitch}
                        />
                    </Pressable>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Bluetooth Enabled</Text>
                        <Switch 
                            trackColor={{false: "lightgrey", true: "#008EFF"}} 
                            thumbColor={isBlueEnabled ? "#fff" : "white"} 
                            ios_backgroundColor="grey" 
                            onValueChange={toggleBlueSwitch} 
                            value={isBlueEnabled} 
                            style={SettingsStyles.SeUtilPressSwitch}
                        />
                    </Pressable>
                </View>
                <View style={SettingsStyles.SeUtilViewLast}>
                    <Text style={SettingsStyles.SeGreyText}>More</Text>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Terms and Conditions</Text>
                        <IconOutline name='right' size={15} style={SettingsStyles.SeUtilPressIcon}/>
                    </Pressable>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Privacy policy</Text>
                        <IconOutline name='right' size={15} style={SettingsStyles.SeUtilPressIcon}/>
                    </Pressable>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Contact us</Text>
                        <IconOutline name='right' size={15} style={SettingsStyles.SeUtilPressIcon}/>
                    </Pressable>
                    <Pressable style={SettingsStyles.SeUtilPress}>
                        <Text style={SettingsStyles.SeUtilPressText}>Sign out</Text>
                        <IconOutline name='right' size={15} style={SettingsStyles.SeUtilPressIcon}/>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
};
export default React.memo(SettingsScreen);