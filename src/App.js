import React, { Component } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import BoardScreen from 'src/Board';
import EditScreen from 'src/Edit';
import LoginScreen from 'src/Login';
import MainScreen from 'src/Main';
import PostScreen from 'src/Post';
import ProfileScreen from 'src/Profile';

const StackNaigation = createStackNavigator();

class App extends Component {

    render() {
        return(  
            <SafeAreaView>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Board" component={BoardScreen} />
                    <Stack.Screen name="Edit" component={EditScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="Post" component={PostScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </SafeAreaView>
        );
    }
}

export default App;
