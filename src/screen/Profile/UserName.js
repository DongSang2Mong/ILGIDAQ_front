import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';

export default class UserName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style], {flexDirection: "row", alignItems: 'center'}}>
            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: colorStyle.blue, marginRight: 10}}/>
                <Text style={[textStyle.r20, {color: colorStyle.black, marginRight: 10}]}>Nonokee</Text>
                <TouchableOpacity style={{width: 16, height: 16}}>
                    <Image style={commonStyle.image16} source={require('../../../resource/Button/Large/edit36.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}