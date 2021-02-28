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
        let bottomTab = <View />;
        if(this.props.bottomShow) bottomTab = <BottomTab navigation={this.props.navigation} nowMenu={this.props.nowMenu}/>;
        return (
            <View style={{flex: 1, backgroundColor: "#FFFFFF"}}>
                <Header 
                    goBack={()=>{this.props.navigation.goBack();}} 
                    headerText={this.props.headerText} 
                buttonType={this.props.buttonType}/>
                {this.props.children}
                {bottomTab}
            </View>
        );
    }
}