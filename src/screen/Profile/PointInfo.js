import React from 'react';
import { Component } from 'react';
import { View, Text, } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';

export default class PointInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var id = "Nonokee";
        return(
            <View style={[this.props.style, {justifyContent: "center"}]}>
                <View style={{flexDirection: "row", alignItems: 'center', marginBottom: 12}}>
                    <Text style={[textStyle.b28, {color: colorStyle.black, marginRight: 9}]}>{id}</Text>
                    <Text style={[textStyle.r20, {color: colorStyle.black}]}>님의 보유 포인트는?</Text>  
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={[textStyle.b60, {color: colorStyle.skyblue}]}>20,931 </Text>
                    <Text style={[textStyle.r60, {color: colorStyle.black}]}>P</Text>   
                </View>
            </View>
        );
    }
}
