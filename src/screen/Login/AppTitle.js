import React from 'react';
import { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { commonStyle, textStyle }from '../commonStyle';


export default class AppTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, commonStyle.centerAlign, {flex: 1}]}>
                <View style={{flex: 0.5}}/>
                <Image 
                    style={commonStyle.flexImage} 
                    source={require('../../../resource/AppLogo/AppLogo300-white_version.png')}
                />
                <View style={{flex: 0.5}}/>
            </View>
        );
    }
}