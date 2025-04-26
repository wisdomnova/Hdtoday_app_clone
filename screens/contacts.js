import React,{useState} from "react";
import {SafeAreaView,View,Text,Pressable,ScrollView,TextInput,Image} from 'react-native';
import {ContactStyles} from '../styles/stylesheet';
import {IconOutline} from "@ant-design/icons-react-native";
import Statusbar from './statusbar';
const ContactsScreen = ({route,navigation}) => {
    const [firstScroll, SetFirstScroll] = useState("flex");
    const [secondScroll, SetSecondScroll] = useState("none");
    const [firstStyle, SetFirstStyle] = useState(ContactStyles.CoTopNavBarPressActive);
    const [secondStyle, SetSecondStyle] = useState(ContactStyles.CoTopNavBarPressInactive);
    const [firstStyleText, SetFirstStyleText] = useState(ContactStyles.CoTopNavBarTextActive);
    const [secondStyleText, SetSecondStyleText] = useState(ContactStyles.CoTopNavBarTextInactive);
    const ExistingFunction = () => {
        SetFirstScroll("flex");
        SetSecondScroll("none");
        SetFirstStyle(ContactStyles.CoTopNavBarPressActive);
        SetSecondStyle(ContactStyles.CoTopNavBarPressInactive);
        SetFirstStyleText(ContactStyles.CoTopNavBarTextActive);
        SetSecondStyleText(ContactStyles.CoTopNavBarTextInactive);
    };
    const NewFunction = () => {
        SetFirstScroll("none");
        SetSecondScroll("flex");
        SetFirstStyle(ContactStyles.CoTopNavBarPressInactive);
        SetSecondStyle(ContactStyles.CoTopNavBarPressActive);
        SetFirstStyleText(ContactStyles.CoTopNavBarTextInactive);
        SetSecondStyleText(ContactStyles.CoTopNavBarTextActive);
    };
    return(
        <>
            <Statusbar backgroundColor='#F6F6F6'/>
            <SafeAreaView style={ContactStyles.CoSafeArea}> 
                <View style={ContactStyles.CoTabView}>
                    <View style={ContactStyles.CoTopView}>
                        <Text style={ContactStyles.CoTopViewText}>Contacts</Text>
                    </View>
                    <View style={ContactStyles.CoTopSearchView}>
                        <IconOutline name="search" size={20} style={ContactStyles.CoTopSearchViewIcon}/>
                        <TextInput style={ContactStyles.CoTopSearchViewInput} placeholder='Search' selectionColor={'#000'} returnKeyType="next" spellCheck={false} placeholderTextColor="#737373" editable={true}/>
                    </View>
                    <View style={ContactStyles.CoTopNavBar}>
                        <Pressable style={firstStyle} onPress={ExistingFunction}>
                            <Text style={firstStyleText}>Existing</Text>
                        </Pressable>
                        <Pressable style={secondStyle} onPress={NewFunction}>
                            <Text style={secondStyleText}>New</Text>
                        </Pressable>
                    </View>
                    <ScrollView style={[ContactStyles.CoScroll,{display: firstScroll}]} contentContainerStyle={ContactStyles.CoScrollContent}>
                        <View style={ContactStyles.CoItemView}>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Image source={require('./temps/profile.png')} style={ContactStyles.CoItemImage}/>
                                <Text style={ContactStyles.CoItemText}>Anna</Text>
                            </View>
                            <View style={ContactStyles.CoItemViewBase}>
                                <IconOutline name="message" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="phone" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="video-camera" size={26} style={ContactStyles.CoItemIcon}/>
                            </View>
                        </View>
                        <View style={ContactStyles.CoItemView}>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Image source={require('./temps/profile.png')} style={ContactStyles.CoItemImage}/>
                                <Text style={ContactStyles.CoItemText}>Anna</Text>
                            </View>
                            <View style={ContactStyles.CoItemViewBase}>
                                <IconOutline name="message" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="phone" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="video-camera" size={26} style={ContactStyles.CoItemIcon}/>
                            </View>
                        </View>
                        <View style={ContactStyles.CoItemView}>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Image source={require('./temps/profile.png')} style={ContactStyles.CoItemImage}/>
                                <Text style={ContactStyles.CoItemText}>Anna</Text>
                            </View>
                            <View style={ContactStyles.CoItemViewBase}>
                                <IconOutline name="message" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="phone" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="video-camera" size={26} style={ContactStyles.CoItemIcon}/>
                            </View>
                        </View>
                        <View style={ContactStyles.CoItemView}>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Image source={require('./temps/profile.png')} style={ContactStyles.CoItemImage}/>
                                <Text style={ContactStyles.CoItemText}>Anna</Text>
                            </View>
                            <View style={ContactStyles.CoItemViewBase}>
                                <IconOutline name="message" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="phone" size={26} style={ContactStyles.CoItemIcon}/>
                                <IconOutline name="video-camera" size={26} style={ContactStyles.CoItemIcon}/>
                            </View>
                        </View>
                    </ScrollView>


                    <ScrollView style={[ContactStyles.CoScroll,{display: secondScroll}]} contentContainerStyle={ContactStyles.CoScrollContent}>
                        <View style={ContactStyles.CoItemView}>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Image source={require('./temps/profile.png')} style={ContactStyles.CoItemImage}/>
                                <Text style={ContactStyles.CoItemText}>Beth</Text>
                            </View>
                            <View style={ContactStyles.CoItemViewBase}>
                                <Pressable style={ContactStyles.CoItemIconPress}>
                                    <IconOutline name="close" size={18} style={ContactStyles.CoItemIcon}/>
                                </Pressable>
                                <Pressable style={ContactStyles.CoItemIconPress}>
                                    <IconOutline name="check" size={18} style={ContactStyles.CoItemIconCheck}/>
                                </Pressable>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};
export default React.memo(ContactsScreen); 