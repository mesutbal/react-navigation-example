import React from 'react';
import { View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Page from '../component/Page';

const SwitchNavigatorScreen = createSwitchNavigator(
    {
        Tab1: { 
            screen: ({ navigation }) => (
            <View style={{ padding: 50 }} >
                <Button title="Tab 2 e Git" onPress={() => { navigation.navigate('Tab2'); }} />
            </View>),
        },
        Tab2: { 
            screen: ({ navigation }) => (
            <View style={{ padding: 100 }} >
                <Button title="Tab 1 e Git" onPress={() => { navigation.navigate('Tab1'); }} />
            </View>),
        },
    }, 
    {
        initialRouteName: 'Tab1'
    });

export default SwitchNavigatorScreen;
