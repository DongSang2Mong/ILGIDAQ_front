import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle }from '../screen/commonStyle';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let backBtn = <View style={{flex: 1}}/>;
        if(this.props.buttonType != "None") {
            backBtn = <TouchableOpacity 
                style={{justifyContent: "center", marginLeft: 12, flex: 1}}
                onPress={() => {this.props.goBack()}}
            > 
                <Image style={commonStyle.image24} source={require('../../resource/Button/Large/left_72.png')} /> 
            </TouchableOpacity>;
        }
        return(
            <View style={[this.props.style, { flexDirection:"row", justifyContent:'space-between', height: 44, backgroundColor: colorStyle.gray }]}>
                {backBtn}
                <View style={[commonStyle.centerAlign, {flex: 1 }]}>
                    <Text style={[textStyle.b22,{ color: colorStyle.white }]}>{this.props.headerText}</Text>
                </View>
                <View style={{flex: 1}}/>
            </View>
        );
    }
}
