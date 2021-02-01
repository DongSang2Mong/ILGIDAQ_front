import React, { Component } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoardScreen from './screen/Board';
import EditScreen from './screen/Edit';
import LoginScreen from './screen/Login';
import MainScreen from './screen/Main';
import PostScreen from './screen/Post';
import ProfileScreen from './screen/Profile';

const StackNaigation = createStackNavigator();

class App extends Component {

    render() {
        return(  
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <StackNaigation.Navigator 
                        initialRouteName="Main"
                        headerMode="none"
                    >
                        <StackNaigation.Screen name="Board" component={BoardScreen} />
                        <StackNaigation.Screen name="Edit" component={EditScreen} />
                        <StackNaigation.Screen name="Login" component={LoginScreen} />
                        <StackNaigation.Screen name="Main" component={MainScreen} />
                        <StackNaigation.Screen name="Post" component={PostScreen} />
                        <StackNaigation.Screen name="Profile" component={ProfileScreen} />
                    </StackNaigation.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

export default App;
