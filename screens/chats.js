import React from "react";
import {SafeAreaView,View,Text,Pressable,ScrollView,TextInput,Image,TouchableOpacity} from 'react-native';
import {IconOutline} from "@ant-design/icons-react-native";
import {ChatsStyles} from "../styles/stylesheet";
import Statusbar from './statusbar';
const ChatsScreen = ({route,navigation}) => {
    return(
        <>
            <Statusbar backgroundColor='#F6F6F6'/>
            <SafeAreaView style={ChatsStyles.ChsSafeArea}> 
                <View style={ChatsStyles.ChsTabView}>
                    <View style={ChatsStyles.ChsTopView}>
                        <View style={ChatsStyles.ChsTopViewTab}>
                            <Text style={ChatsStyles.ChsTopViewTabText}>Chats (1)</Text>
                            <Pressable style={ChatsStyles.ChsTopViewTabPress}>
                                <IconOutline name="plus" size={25}/>
                            </Pressable>
                        </View> 
                        <View style={ChatsStyles.ChsTopSearchView}>
                            <IconOutline style={ChatsStyles.ChsTopSearchViewIcon} name="search" size={20}/>
                            <TextInput style={ChatsStyles.ChsTopSearchViewInput} placeholder='Search' selectionColor={'#000'} returnKeyType="next" spellCheck={false} placeholderTextColor="#737373" editable={true}/>
                            <IconOutline style={ChatsStyles.ChsTopSearchViewIcon} name="audio" size={20}/>
                        </View>
                    </View>
                    <ScrollView style={ChatsStyles.ChsScroll} contentContainerStyle={ChatsStyles.ChsScrollContent}>
                        <TouchableOpacity style={ChatsStyles.ChsItemView} onPress={()=>navigation.navigate('Chat')}>
                            <Image source={require('./temps/profile.png')} style={ChatsStyles.ChsItemImage}/>
                            <View style={ChatsStyles.ChsItemMidView}>
                                <Text style={ChatsStyles.ChsItemMidViewTextBig}>Island Fresh Cafe</Text>
                                <Text style={ChatsStyles.ChsItemMidViewTextSmall}>last message ...</Text>
                            </View>
                            <View style={ChatsStyles.ChsPropView}>
                                <Text style={ChatsStyles.ChsPropViewTextLight}>12 min ago</Text>
                                <Pressable style={ChatsStyles.ChsPropViewPress}>
                                    <Text style={ChatsStyles.ChsPropViewPressText}>12</Text>
                                </Pressable>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};
export default React.memo(ChatsScreen);  