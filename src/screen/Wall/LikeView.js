import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';

export default class LikeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, {flexDirection: "row"}]}>
                <View style={{width:40, flexDirection: "row", marginRight: 15}}>
                    <Image style={[commonStyle.image12, {marginRight: 5}]} source={require("../../../resource/Button/Small/like.png")}/>
                    <Text style={[textStyle.r10, {color:colorStyle.white}]}>{this.props.like}</Text>
                </View>
                <View style={{width:40, flexDirection: "row"}}>
                    <Image style={[commonStyle.image12, {marginRight: 5}]} source={require("../../../resource/Button/Small/dislike.png")}/>
                    <Text style={[textStyle.r10, {color:colorStyle.white}]}>{this.props.dislike}</Text>
                </View>
            </View>
        );
    }
}