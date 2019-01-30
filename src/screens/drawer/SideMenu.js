import React from 'react';
import { 
    View, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity, 
    Text
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SideMenu extends React.Component {

    state = {
        menuDetay2: false
    }

    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
        <View style={{ flex: 1 }} >
            <ScrollView style={styles.scrollStyle}>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('Navigation'); }}>
                    <Text style={styles.textStyle}>Navigation Controller</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('BottomTab'); }}>
                    <Text style={styles.textStyle}>Bottom Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('MaterialBottomTab'); }}>
                    <Text style={styles.textStyle}>Material Bottom Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('MaterialTopTab'); }}>
                    <Text style={styles.textStyle}>Material Top Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => { this.navigateToScreen('Switch'); }}>
                    <Text style={styles.textStyle}>Switch Navigator</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1
    },
    subStyle: {
        marginLeft: 20
    },
    opacityStyle: {
         flex: 1,
         padding: 20
    },
    textStyle: {
        fontSize: 16,
        fontFamily: 'micnrwr'
    }
});
