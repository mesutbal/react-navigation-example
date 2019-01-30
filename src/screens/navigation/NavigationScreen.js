import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

const RightBarButton = (title, onPress) => (
        <Button
          title={title}
          color="purple"
          backgroundColor='white'
          borderRadius={12}
          fontSize={11}
          buttonStyle={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}
          onPress={onPress} 
        />
    );
  
  const ShopButton = (navigation) => {
    const { navigate } = navigation;
    const onPress = () => { navigate('Shop'); };
    return RightBarButton('Shop', onPress);
  };

const NavigationScreen = createStackNavigator(
    {
        Page1: { 
            screen: ({ navigation }) => (
                <View style={{ padding: 50 }} >
                    <Button title="Tab 2 e Git" onPress={() => { navigation.navigate('Page2', { name: 'Ağa' }); }} />
                </View>),
            navigationOptions: ({ navigation }) => ({
                title: 'Page 1',
                headerTitle: 'Sayfa 1',
                headerTitleAllowFontScaling: true,
                headerBackTitle: 'Geri',
                headerTruncatedBackTitle: 'Geri 2',
                headerTransparent: false,
                headerBackground: (<View style={{ backgroundColor: 'yellow', height: '100%', width: '100%' }} />),
                //header: () => (<View style={{ backgroundColor: 'yellow', height: 50 }} />)
                headerLeft: () => (<Entypo.Button 
                    name="add-user"
                    size={40}
                    backgroundColor="transparent"
                    color="gray"
                    onPress={(onPress, title, titleStyle) => { navigation.dispatch(DrawerActions.openDrawer()); }}
                />),
                headerRight: (<View style={{ paddingRight: 20 }}><Button
                    title='Shop'
                    color="purple"
                    backgroundColor='white'
                    borderRadius={12}
                    fontSize={11}
                    buttonStyle={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}
                /></View>)
            })
        },
        Page2: { 
            screen: ({ navigation }) => (
            <View style={{ padding: 100 }} >
                <Button title="Tab 1 e Git" onPress={() => { navigation.navigate('Page1'); }} />
                <Button
                    onPress={() => navigation.goBack()}
                    title="Geri Git"
                />
            </View>),
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.name}'nın Mekanı`,
                headerBackTitle: null,
                headerTruncatedBackTitle: 'Geri 2'
            })
        },
    }, 
    {
        initialRouteName: 'Page1',
        //mode: 'modal', //Only IOS
        //headerMode: 'screen', Only IOS,
        //headerTransitionPreset: 'fade-in-place',
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    });

export default NavigationScreen;
