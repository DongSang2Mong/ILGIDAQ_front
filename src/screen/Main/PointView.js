import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';

export default class PointView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={[this.props.style, {flexDirection: "row", justifyContent: "space-between"}]}>
                <Text style={[textStyle.r16, {color: colorStyle.gray44, textAlignVertical: "center"}]}>{this.props.nickname} 님의 보유 포인트는?</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={[textStyle.b24, {color: colorStyle.skyblue, textAlignVertical: "center", marginRight: 12}]}>{this.props.point}</Text>
                    <Text style={[textStyle.b24, {textAlignVertical: "center"}]}>P</Text>
                </View>
            </View>
        )
    }
}