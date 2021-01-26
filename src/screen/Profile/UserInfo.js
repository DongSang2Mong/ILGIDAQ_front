import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryNum: 120,
            follower: 24,
            following: 17
        }
    }

    render() {
        return(
            <View style={[this.props.style, {flexDirection: "row", justifyContent: "space-between"}]}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>{this.state.diaryNum}</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>일기장</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>{this.state.follower}</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>팔로워</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>{this.state.following}</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>팔로잉</Text>
                    </View>
                </View>
            </View>
        );
    }
}
