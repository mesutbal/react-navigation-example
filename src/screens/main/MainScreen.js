import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class MainScreen extends React.Component {
    render() {
        return (
        <View style={styles.containerStyle} >
            <View style={styles.hamburgerIconStyle}>
                <Entypo.Button 
                    name="menu"
                    size={40}
                    backgroundColor="transparent"
                    color="gray"
                    onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()); }}
                />
            </View>
        </View>);
    }
}


const styles = StyleSheet.create({ 
    containerStyle: {
        flex: 1
    },
    hamburgerIconStyle: {
        position: 'absolute',
        left: 20,
        top: 10,
        elevation: 1
    }
});
