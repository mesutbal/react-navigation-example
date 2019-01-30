import React from 'react';
import { Alert } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Page from '../component/Page';

const MaterialTopTabScreen = createMaterialTopTabNavigator(
    {
        Tab1: { 
            screen: () => (<Page>Page 1</Page>),
            navigationOptions: {
                title: 'Ana Sayfa',
                tabBarIcon: () => (<Entypo 
                    name="home"
                    size={25}
                    color="blue"
                />)
            }
        },
        Tab2: 
        { 
            screen: () => (<Page>Page 2</Page>),
            navigationOptions: {
                title: 'Facebook',
                tabBarIcon: () => (<Entypo 
                    name="facebook"
                    size={25}
                    color="blue"
                />),
                //tabBarVisible: false,
                //tabBarLabel: 'Feysbuk',
                //tabBarButtonComponent: () => (<TouchableOpacity><Text>Facebook</Text></TouchableOpacity>),
                //tabBarAccessibilityLabel: 'facebook',
                tabBarOnPress: ({ navigation, defaultHandler }) => {
                    Alert.alert('React Native Eğitim', `Route ${navigation.state.routeName} Tıklandı !`);
                    defaultHandler();
                }
            }
        },
        Tab3: 
        { 
            screen: () => (<Page>Page 3</Page>),
            navigationOptions: {
                title: 'Twitter',
                tabBarIcon: () => (<Entypo 
                    name="twitter"
                    size={25}
                    color="blue"
                />)
            }
        },
        Tab4: 
        { 
            screen: () => (<Page>Page 4</Page>),
            navigationOptions: {
                title: 'Instagram',
                tabBarIcon: () => (<Entypo 
                    name="instagram"
                    color="blue"
                    size={25}
                />)
            }
        },
        Tab5: 
        { 
            screen: () => (<Page>Page 5</Page>),
            navigationOptions: {
                title: 'Youtube',
                tabBarIcon: () => (<Entypo 
                    name="youtube"
                    color="blue"
                    size={25}
                />)
            }
        }
    }, 
    {
        initialRouteName: 'Tab1',
        order: ['Tab5', 'Tab2', 'Tab3', 'Tab4', 'Tab1'],
        backBehavior: 'initialRoute',
        //tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        optimizationsEnabled: true,
        lazy: true,
        tabBarOptions: 
        {
            //activeTintColor: 'blue',
            //activeBackgroundColor: 'yellow',
            //inactiveTintColor: 'white',
            //inactiveBackgroundColor: 'purple',
            showLabel: true,
            showIcon: true,
            style: {
                //padding: 50
            },
            labelStyle: {
                color: 'blue',
                //fontSize: 30
            },
            tabStyle: {
                //padding: 50
            },
            upperCaseLabel: false,
            allowFontScaling: false,
            safeAreaInset: { bottom: 'always', top: 'never' }
        }
    });

export default MaterialTopTabScreen;
