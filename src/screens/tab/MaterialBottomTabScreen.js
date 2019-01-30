import React from 'react';
import { Alert } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Page from '../component/Page';

const MaterialBottomTabScreen = createMaterialBottomTabNavigator(
    {
        Tab1: { 
            screen: () => (<Page>Material Tab 1</Page>),
            navigationOptions: {
                title: 'Ana Sayfa',
                tabBarIcon: () => (<Entypo 
                    name="home"
                    size={25}
                    color="white"
                />),
                //tabBarColor: 'navy',
                //tabBarLabel: 'Main Page',
                tabBarAccessibilityLabel: 'Erişebilirlik Durumu',
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    Alert.alert('React Native Eğitim', `Route ${navigation.state.routeName} Tıklandı !`);
                    defaultHandler();
                }
            }
        },
        Tab2: 
        { 
            screen: () => (<Page>Material Tab 2</Page>),
            navigationOptions: {
                title: 'Facebook',
                tabBarIcon: () => (<Entypo 
                    name="facebook"
                    size={25}
                    color="white"
                />)
            }
        },
        Tab3: 
        { 
            screen: () => (<Page>Material Tab 3</Page>),
            navigationOptions: {
                title: 'Twitter',
                tabBarIcon: () => (<Entypo 
                    name="twitter"
                    size={25}
                    color="white"
                />)
            }
        },
        Tab4: 
        { 
            screen: () => (<Page>Material Tab 4</Page>),
            navigationOptions: {
                title: 'Instagram',
                tabBarIcon: () => (<Entypo 
                    name="instagram"
                    color="white"
                    size={25}
                />)
            }
        },
        Tab5: 
        { 
            screen: () => (<Page>Material Tab 5</Page>),
            navigationOptions: {
                title: 'Youtube',
                tabBarIcon: () => (<Entypo 
                    name="youtube"
                    color="white"
                    size={25}
                />)
            }
        }
    }, 
    {
        //shifting: false,
        //labeled: false,
        initialRouteName: 'Tab1',
        activeColor: 'yellow',
        inactiveColor: 'blue',
        backBehavior: 'initialRoute',
        barStyle: { 
            backgroundColor: 'red', 
            //paddingBottom: 50 
        },
        //order: ['Tab5', 'Tab2', 'Tab3', 'Tab4', 'Tab1']
    });

export default MaterialBottomTabScreen;
