import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import {BottomTab} from './BottomTab';


export default class ScreenTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={this.props.headerText} buttonType={this.props.buttonType}/>
                    {this.props.children}
                <BottomTab navigation={this.props.navigation} nowMenu={this.props.nowMenu}/>
            </View>
        );
    }
}