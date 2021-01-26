import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle } from '../commonStyle';
import Header from '../../components/Header';
import {PROF_MENU, BottomTab} from '../../components/BottomTab';

class UserName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style], {flexDirection: "row", alignItems: 'center'}}>
            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: "#1B49BE", marginRight: 10}}/>
                <Text style={{fontSize: 20, fontFamily: "NanumSquareR", color: "#0E0E0E", marginRight: 10}}>Nonokee</Text>
                <TouchableOpacity style={{width: 12, height: 12}}>
                    <Image style={{width: 12, height: 12, resizeMode: 'contain'}} source={require('../../../resource/Button/Large/edit36.png')} />
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
                        <Text style={{fontSize: 26, fontFamily: "NanumSquareB", color: "#0E0E0E", marginBottom: 6}}>120</Text>
                        <Text style={{fontSize: 16, fontFamily: "NanumSquareR", color: "#0E0E0E"}}>일기장</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 26, fontFamily: "NanumSquareB", color: "#0E0E0E", marginBottom: 6}}>24</Text>
                        <Text style={{fontSize: 16, fontFamily: "NanumSquareR", color: "#0E0E0E"}}>팔로워</Text>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 26, fontFamily: "NanumSquareB", color: "#0E0E0E", marginBottom: 6}}>17</Text>
                        <Text style={{fontSize: 16, fontFamily: "NanumSquareR", color: "#0E0E0E"}}>팔로잉</Text>
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
                    <Text style={{fontSize: 28, fontFamily: "NanumSquareB", color: "#0E0E0E", marginRight: 9}}>{id}</Text>
                    <Text style={{fontSize: 20, fontFamily: "NanumSquareR", color: "#0E0E0E"}}>님의 보유 포인트는?</Text>  
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 60, fontFamily: "NanumSquareB", color: "#2496FF"}}>20,931 </Text>
                    <Text style={{fontSize: 60, fontFamily: "NanumSquareR", color: "#0E0E0E"}}>P</Text>   
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