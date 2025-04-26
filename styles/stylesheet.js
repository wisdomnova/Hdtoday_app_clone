import {StyleSheet,Dimensions,Platform} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TabStyles = StyleSheet.create({
    TabBottomBlank: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#686868',
        shadowOffset: { 
            width: 1, 
            height: 1 
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 6,
    },
    TabPressImage: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },
    TabPressFocused: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -15,
        height: 50,
        backgroundColor: '#FDED39',
        paddingHorizontal: 13,
        zIndex: 100,
        borderRadius: 24
    },
    TabPressUnFocused: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -15,
        height: 50,
        backgroundColor: 'transparent',
        paddingHorizontal: 13,
        zIndex: 100,
        borderRadius: 24
    }
});
const Utilstyle = StyleSheet.create({
    SafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    RootView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
    },
    RootImageTop: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 10
    },
    RootImageMid: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: -15
    },
    RootTextBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    RootTextBold: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 35,
        color: '#212121',
        marginBottom: 15
    },
    RootTextLight: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 20,
        color: '#7E7E7E',
        textAlign: 'center'
    },
    RootTabShort: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    RootTabInput: {
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        color: '#E5E5E5',
        textAlign: 'center',
        width: '45%',
        height: 40,
        marginHorizontal: 5,
    },
    RootTabInputLong: {
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        color: '#E5E5E5',
        textAlign: 'center',
        width: '60%',
        height: 40,
        marginHorizontal: 5,
        marginBottom: 10
    },
    RootTabPress: {
        width: '80%',
        height: 45,
        borderRadius: 100,
        backgroundColor: '#0496FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RootTabPressText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 15,
        color: '#fff',
    },
});
const ConfirmStyles = StyleSheet.create({
    ConfSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    ConfArea: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    ConfText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 15,
        color: '#212121'
    },
    ConfImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginVertical: 50
    },
});
const ConnectionStyles = StyleSheet.create({
    ConnSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    ConnView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 50,
    },
    ConnTopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 25,
        marginBottom: 50,
    },
    ConnTopText: {
        color: 'grey',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500',
        fontSize: 24,
        marginBottom: 15
    },
    ConnMidText: {
        color: '#101010',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500',
        fontSize: 20,
        marginBottom: 15
    },
    ConnBottomText: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500',
        marginTop: 15
    },
    ConnImage: {
        width: 290,
        height: 290,
        resizeMode: 'contain',
        marginBottom: 120,
        marginTop: -20
    },
    ConnTabShort: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 10
    },
    ConnTabPress: {
        width: '80%',
        height: 45,
        borderRadius: 100,
        backgroundColor: '#0496FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    ConnTabPressText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 15,
        color: '#fff',
    },
    ConnTabPressWhite: {
        width: '80%',
        height: 45,
        borderRadius: 100,
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ConnTabPressTextWhite: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 15,
        color: '#000000',
    },
});
const SelfieStyles = StyleSheet.create({
    SelfSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    SelfView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 8
    },
    SelfTopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingHorizontal: 25,
        marginTop: 20,
        marginBottom: 0
    },
    SelfTopText: {
        color: 'grey',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500',
        fontSize: 24,
        marginVertical: 5
    },
    SelfMidText: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '500',
        marginVertical: 5
    },
    SelfImage: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 110,
    },
    SelfTabShort: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 30
    },
    SelfTabPress: {
        width: '80%',
        height: 45,
        borderRadius: 100,
        backgroundColor: '#0496FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    SelfTabPressText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 15,
        color: '#fff',
    },
});
const SettingsStyles = StyleSheet.create({
    SeSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    SeTabView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 110,
    },
    SeTopView: {
        width: '100%',
        height: 115,
        backgroundColor: '#F6F6F6',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    SeTopViewText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 30,
        color: '#000000',
    },
    SeProfileView: {
        width: '100%',
        height: 75,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal: 20,
        marginTop: 10
    },
    SeProfileViewImg: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 15,
    },
    SeProfileViewText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 18,
        color: '#000000',
    },
    SeGreyText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 18,
        color: '#ADADAD',
        marginLeft: 20,
        marginBottom: 15,
    },
    SeUtilView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#CACACA',
    },
    SeUtilViewLast: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: 50,
        borderTopColor: '#CACACA', 
        borderTopWidth: 1,
        paddingTop: 10
    },
    SeUtilPress: {
        width: '100%',
        height: 45,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    SeUtilPressText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 18,
        color: '#4B4B4B',
    },
    SeUtilPressIcon: {
        position: 'absolute',
        right: 0,
        marginRight: 20
    },
    SeUtilPressSwitch: {
        position: 'absolute',
        right: 0,
        marginRight: 20
    },
});
const ContactStyles = StyleSheet.create({
    CoSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    CoTabView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 110,
        alignItems: 'center',
    },
    CoTopView: {
        width: '100%',
        height: 115,
        backgroundColor: '#F6F6F6',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 20,
        paddingBottom: 20, 
    },
    CoTopViewText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 30,
        color: '#000000',
    },
    CoTopSearchView: {
        width: '90%',
        height: 50,
        backgroundColor: '#F9F9F9',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 30,
        borderRadius: 16,
        paddingHorizontal: 10,
    },
    CoTopSearchViewIcon: {
        color: '#000',
        marginHorizontal: 10
    },
    CoTopSearchViewInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    CoTopNavBar: {
        height: 37,
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 25,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#eaeaea'
    },
    CoTopNavBarPressActive: {
        width: "45%",
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008EFF',
        borderRadius: 16
    },
    CoTopNavBarTextActive: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: '#fff',
    },
    CoTopNavBarPressInactive: {
        width: "45%",
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 16
    },
    CoTopNavBarTextInactive: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: '#929AB2',
    },
    CoScroll: {
        width: '100%',
    },
    CoScrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    CoItemView: {
        width: '90%',
        height: 75,
        borderRadius: 16,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    CoItemViewBase: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CoItemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 15,
    },
    CoItemText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: '#000', 
    },
    CoItemIcon: {
        color: '#929AB2',
        marginHorizontal: 10
    },
    CoItemIconPress: {
        backgroundColor: '#F6F6F6',
        borderRadius: 100/2,
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    CoItemIconClose: {
        color: '#000'
    },
    CoItemIconCheck: {
        color: '#42DA51'
    },
});
const ChatsStyles = StyleSheet.create({
    ChsSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    ChsTabView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 110,
        alignItems: 'center',
    },
    ChsTopView: {
        width: '100%',
        height: 200,
        backgroundColor: '#F6F6F6',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        position: 'relative',
        paddingHorizontal: 20,
        paddingBottom: 18,
        marginBottom: 20
    },
    ChsTopViewTab: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 5
    },
    ChsTopViewTabText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 30,
        color: '#000000',
    },
    ChsTopViewTabPress: {
        width: 58,
        height: 58,
        borderRadius: 100/2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDED39' 
    },
    ChsTopSearchView: {
        width: '98%',
        height: 50,
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        borderRadius: 16,
        paddingHorizontal: 10,
    },
    ChsTopSearchViewIcon: {
        color: '#000',
        marginHorizontal: 10
    },
    ChsTopSearchViewInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },
    ChsScroll: {
        width: '100%',
    },
    ChsScrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',  
    },
    ChsItemView: {
        width: '90%',
        height: 75,
        borderRadius: 16,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 15,
        position: 'relative'
    },
    ChsItemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 15,
    },
    ChsItemMidView: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    ChsItemMidViewTextBig: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
        marginBottom: 5
    },
    ChsItemMidViewTextSmall: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#737373'
    },
    ChsPropView: {
        position: 'absolute',
        right: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    ChsPropViewTextLight: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#737373',
        marginBottom: 5
    },
    ChsPropViewPress: {
        width: 25,
        height: 25,
        backgroundColor: '#FF7A00',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2
    },
    ChsPropViewPressText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
const ChatStyles = StyleSheet.create({
    ChSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flex: 1
    },
    ChTabView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        position: 'relative',
    },
    ChTopView: {
        width: '100%',
        height: 100,
        backgroundColor: '#008EFF',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: 20,
    },
    ChTopViewTab: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ChTopViewTabImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    ChTopViewTabRow: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row' 
    },
    ChScroll: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        marginBottom: 100
    },
    ChScrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', 
    },
    ChChatViewTabTo: {
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingRight: 15
    },
    ChChatViewTo: {
        maxWidth: '80%',
        backgroundColor: '#F8F8F8',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ChChatViewImage: {
        width: 200,
        height: 100,
        resizeMode: 'cover',
        marginBottom: 10
    },
    ChChatViewToText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    ChChatPropViewTo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5
    },
    ChChatPropTextTo: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#737373',
    },
    ChChatPropIconViewTo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -5,
        marginHorizontal: 5
    },
    ChChatPropIconTo: {
        color: '#008EFF'
    },
    ChChatPropIconToLast: {
        color: '#008EFF',
        marginLeft: -15,
        marginTop: 10
    },
    ChChatViewTabFrom: {
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingLeft: 15
    },
    ChChatViewTabFromTab: {
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ChChatViewTabFromImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10
    },
    ChChatViewFrom: {
        maxWidth: '80%',
        backgroundColor: '#F8F8F8',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ChChatViewFromAudio: {
        minWidth: '70%',
        maxWidth: '80%',
        backgroundColor: '#F8F8F8',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ChChatViewFromAudioPress: {
        width: 25,
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        backgroundColor: '#008EFF'
    },
    ChChatViewFromAudioIcon: {
        color: '#fff'
    },
    ChChatViewTabFromAudioVoice: {
        flex: 1,
        marginHorizontal: 2
    },
    ChChatViewFromAudioText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    ChChatViewFromText: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    ChChatPropViewFrom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 40,
        paddingVertical: 5
    },
    ChChatPropTextFrom: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#737373',
    },


    ChTopViewIconWhiteSide: {
        color: '#fff',
        marginHorizontal: 10
    },
    ChTopViewIconWhite: {
        color: '#fff',
    },
    ChTopViewTabCol: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column' 
    },
    ChTopViewTabColTextTop: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 18,
        color: '#fff',
    },
    ChTopViewTabColTextBase: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '600',
        fontSize: 14,
        color: '#fff',
    },
    ChBaseView: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    ChBaseViewLeft: {
        zIndex: 10,
        position: 'relative',
        width: 50,
        height: 50,
        borderColor: '#EAEEF1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 5,
        position: 'relative',
        backgroundColor: '#FFF',
        shadowColor: '#686868',
        shadowOffset: { 
            width: 0, 
            height: 10 
        },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 6,
    },
    ChBaseViewLeftPress: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ChBaseViewMid: {
        flex: 1,
        height: 50,
        borderColor: '#EAEEF1',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        shadowColor: '#686868',
        shadowOffset: { 
            width: 0, 
            height: 10 
        },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 6,
    },
    ChBaseViewMidInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#000',
    },
    ChBaseViewRight: {
        width: 100,
        height: 50,
        borderColor: '#EAEEF1',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        shadowColor: '#686868',
        shadowOffset: { 
            width: 0, 
            height: 10 
        },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 6,
    },
    ChBaseViewIcon: {
        color: '#8490A3'
    },
    ChBaseViewIconAbs: {
        color: '#8490A3',
        position: 'absolute',
        paddingTop: 5,
    },
    ChBaseViewMidIcon: {
        borderColor: '#8490A3',
        borderWidth: 1,
        color: '#8490A3',
        borderRadius: 5,
        paddingHorizontal: 2
    },
});
export default Utilstyle;
export {TabStyles,ConfirmStyles,ConnectionStyles,SelfieStyles,SettingsStyles,ContactStyles,ChatsStyles,ChatStyles};