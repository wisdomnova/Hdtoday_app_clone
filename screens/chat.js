import React,{useRef} from "react";
import {Platform,View,Text,KeyboardAvoidingView,ScrollView,TextInput,Image,TouchableOpacity,Keyboard} from 'react-native';
import {ChatStyles} from "../styles/stylesheet";
import {IconOutline} from "@ant-design/icons-react-native";
import Statusbar from './statusbar';
const ChatScreen = ({route,navigation}) => {
    const scrollViewRef = useRef();
    Keyboard.addListener('keyboardDidShow', ()=>{
        scrollViewRef.current.scrollToEnd({animated: true});
    });
    return(
        <>
            <Statusbar backgroundColor='#008EFF'/>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={ChatStyles.ChSafeArea}>
                <View style={ChatStyles.ChTabView}>
                    <View style={ChatStyles.ChTopView}> 
                        <View style={ChatStyles.ChTopViewTab}>
                            <View style={ChatStyles.ChTopViewTabRow}>
                                <IconOutline name="arrow-left" size={20} style={ChatStyles.ChTopViewIconWhite} onPress={()=>navigation.goBack()}/>
                                <Image source={require('./temps/profile.png')} style={ChatStyles.ChTopViewTabImage}/>
                            </View>
                            <View style={ChatStyles.ChTopViewTabCol}>
                                <Text style={ChatStyles.ChTopViewTabColTextTop}>Liza</Text>
                                <Text style={ChatStyles.ChTopViewTabColTextBase}>active 12 mins ago</Text>
                            </View>
                        </View>
                        <View style={ChatStyles.ChTopViewTab}>
                            <IconOutline name="phone" size={30} style={ChatStyles.ChTopViewIconWhiteSide}/>
                            <IconOutline name="video-camera" size={30} style={ChatStyles.ChTopViewIconWhiteSide}/>
                        </View>
                    </View>
                    <ScrollView style={ChatStyles.ChScroll} contentContainerStyle={ChatStyles.ChScrollContent} ref={scrollViewRef} onContentSizeChange={()=>scrollViewRef.current.scrollToEnd({animated: true})}>
                        <View style={ChatStyles.ChChatViewTabTo}>
                            <View style={ChatStyles.ChChatViewTo}>
                                <Text style={ChatStyles.ChChatViewToText}>Im pretty free most of the week, but Tuesdays and Wednesdays are usually the best for me.</Text>
                            </View>
                            <View style={ChatStyles.ChChatPropViewTo}>
                                <Text style={ChatStyles.ChChatPropTextTo}>10:37</Text>
                                <View style={ChatStyles.ChChatPropIconViewTo}>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconTo}/>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconToLast}/>
                                </View>
                            </View>
                        </View>
                        <View style={ChatStyles.ChChatViewTabFrom}>
                            <View style={ChatStyles.ChChatViewTabFromTab}>
                                <Image source={require('./temps/profile.png')} style={ChatStyles.ChChatViewTabFromImage}/>
                                <View style={ChatStyles.ChChatViewFromAudio}>
                                    <TouchableOpacity style={ChatStyles.ChChatViewFromAudioPress}>
                                        <IconOutline name="pause" style={ChatStyles.ChChatViewFromAudioIcon} size={20}/>
                                    </TouchableOpacity>
                                    <Image source={require('./temps/voice.png')} style={ChatStyles.ChChatViewTabFromAudioVoice}/>
                                    <Text style={ChatStyles.ChChatViewFromAudioText}>02:10</Text>
                                </View>
                            </View>
                            <View style={ChatStyles.ChChatPropViewFrom}>
                                <Text style={ChatStyles.ChChatPropTextFrom}>10:40</Text>
                            </View>
                        </View>
                        <View style={ChatStyles.ChChatViewTabTo}>
                            <View style={ChatStyles.ChChatViewTo}>
                                <Image source={require('./temps/chatImage.png')} style={ChatStyles.ChChatViewImage}/>
                                <Text style={ChatStyles.ChChatViewToText}>Here is the cafe I mentioned!</Text>
                            </View>
                            <View style={ChatStyles.ChChatPropViewTo}>
                                <Text style={ChatStyles.ChChatPropTextTo}>10:45</Text>
                                <View style={ChatStyles.ChChatPropIconViewTo}>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconTo}/>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconToLast}/>
                                </View>
                            </View>
                        </View>
                        <View style={ChatStyles.ChChatViewTabFrom}>
                            <View style={ChatStyles.ChChatViewTabFromTab}>
                                <Image source={require('./temps/profile.png')} style={ChatStyles.ChChatViewTabFromImage}/>
                                <View style={ChatStyles.ChChatViewFrom}>
                                    <Text style={ChatStyles.ChChatViewFromText}>That's nice!</Text>
                                </View>
                            </View>
                            <View style={ChatStyles.ChChatPropViewFrom}>
                                <Text style={ChatStyles.ChChatPropTextFrom}>10:50</Text>
                            </View>
                        </View>
                        <View style={ChatStyles.ChChatViewTabTo}>
                            <View style={ChatStyles.ChChatViewTo}>
                                <Text style={ChatStyles.ChChatViewToText}>What time will you be available tomorrow?</Text>
                            </View>
                            <View style={ChatStyles.ChChatPropViewTo}>
                                <Text style={ChatStyles.ChChatPropTextTo}>10:55</Text>
                                <View style={ChatStyles.ChChatPropIconViewTo}>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconTo}/>
                                    <IconOutline name="check" size={15} style={ChatStyles.ChChatPropIconToLast}/>
                                </View>
                            </View>
                        </View>


                    </ScrollView>
                    <View style={ChatStyles.ChBaseView}>
                        {/* <View style={ChatStyles.ChBaseViewLeft}>
                            <TouchableOpacity style={ChatStyles.ChBaseViewLeftPress}>
                                <IconOutline name="calendar" size={25} style={ChatStyles.ChBaseViewIcon}/>
                                <IconOutline name="plus" size={12} style={ChatStyles.ChBaseViewIconAbs}/>
                            </TouchableOpacity>
                        </View> */}
                        <View style={ChatStyles.ChBaseViewMid}>
                            <TextInput style={ChatStyles.ChBaseViewMidInput} placeholder='Type here ...' selectionColor={'#000'} returnKeyType="go" spellCheck={false} placeholderTextColor="#737373" autoComplete="off" autoCorrect={false} autoCapitalize="none" keyboardType="default" editable={true}/>
                            {/* <TouchableOpacity>
                                <IconOutline name="gif" size={20} style={ChatStyles.ChBaseViewMidIcon}/>
                            </TouchableOpacity> */}
                        </View>
                        <View style={ChatStyles.ChBaseViewRight}>
                            <TouchableOpacity>
                                <IconOutline name="camera" size={25} style={ChatStyles.ChBaseViewIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconOutline name="gif" size={20} style={ChatStyles.ChBaseViewMidIcon}/>
                            </TouchableOpacity>
                            {/* <TouchableOpacity>
                                <IconOutline name="audio" size={25} style={ChatStyles.ChBaseViewIcon}/>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}; 
export default React.memo(ChatScreen);   