import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import Header from '../../components/Header';
import {PROF_MENU, BottomTab} from '../../components/BottomTab';

class UserName extends Component {
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

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style, {flexDirection: "row", justifyContent: "space-between"}]}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>120</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>일기장</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>24</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>팔로워</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[textStyle.b26, {color: colorStyle.black, marginBottom: 6}]}>17</Text>
                        <Text style={[textStyle.r16, {color: colorStyle.black}]}>팔로잉</Text>
                    </View>
                </View>
            </View>
        );
    }
}

class PointInfo extends Component {
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

class DiaryInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>

            </View>
        );
    }
}

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="프로필" />
                <View style={[{flex: 1}, commonStyle.margeinSide]}>
                    <View style={{flex: 0.8}} />
                    <UserName stlye={{flex: 1, marginBottom : 20}} />
                    <UserInfo style={{flex: 3}} />
                    <PointInfo style={{flex: 2.5}} />
                    <View style={{flex: 0.5}} />
                    <DiaryInfo style={{flex: 5.5}} />
                </View>
                <BottomTab nowMenu={PROF_MENU}/>
            </View>
        );
    }
}