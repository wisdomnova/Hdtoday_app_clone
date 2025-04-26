import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
const Statusbar = (prop) => {
    const styles = StyleSheet.create({
        StatusBar: {
            height: 50,
            backgroundColor: prop.backgroundColor
        }
    });
    return (
        <View style={styles.StatusBar}>
            <StatusBar translucent barStyle="dark-content" animated={true}/>
        </View>
    );
};
export default Statusbar;