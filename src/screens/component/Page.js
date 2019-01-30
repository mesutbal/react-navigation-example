import React from 'react';
import { View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class Page extends React.Component {
    

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                />
            <Text>{this.props.children}</Text>
        </View>
        );
    }
}
