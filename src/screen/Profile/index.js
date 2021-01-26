import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle }from '../commonStyle';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style, {height: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: "#424242"}]}>
                <Text style={{ fontSize: 22, fontFamily: "NanumSquareB", color: "#FFFFFF" }}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const HOME_MENU = 1;
const DASH_MENU = 2;
const PROF_MENU = 3; 
class BottomTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style, {flexDirection: "row", paddingTop: 6, height: 60, borderTopLeftRadius: 6, borderTopRightRadius: 6, backgroundColor: "#0E0E0E"}]}>
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                    <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
                        <Image style={{width: 28, height: 28, resizeMode: 'contain', marginBottom: 4}} source={require('../../../resource/Button/Large/home_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == HOME_MENU}/>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                    <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
                        <Image style={{width: 28, height: 28, resizeMode: 'contain', marginBottom: 4}} source={require('../../../resource/Button/Large/dashboard_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == DASH_MENU}/>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                    <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
                        <Image style={{width: 28, height: 28, resizeMode: 'contain', marginBottom: 4}} source={require('../../../resource/Button/Large/person_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == PROF_MENU}/>
                </View>
            </View>
        );
    }
}

class SelectCircle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.selectState) {
            return (
                <Image style={{width: 7, height: 7, resizeMode: 'contain'}} source={require('../../../resource/Button/Small/selected.png')} />
            );
        }
        else {
            return (
                <Image style={{width: 7, height: 7, resizeMode: 'contain'}} source={require('../../../resource/Button/Small/notSelected.png')} />
            );
        }
    }

}

class UserName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style], {flexDirection: "row", alignItems: 'center'}}>
                <Image style={{width: 20, height: 20, resizeMode: 'contain', marginRight: 10}} source={require('../../../resource/Button/Large/selected14.png')} />
                <Text style={{fontSize: 20, fontFamily: "NanumSquareR", color: "#0E0E0E", marginRight: 10}}>Nonokee</Text>
                <Image style={{width: 12, height: 12, resizeMode: 'contain'}} source={require('../../../resource/Button/Large/edit36.png')} />
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
                <View style={{flex: 1, marginLeft: 33, marginRight: 33}}>
                    <View style={{flex: 0.5}} />
                    <UserName stlye={{flex: 1, marginBottom : 20}} />
                    <UserInfo style={{flex: 3}} />
                    <View style={{flex: 0.5}} />
                    <PointInfo style={{flex: 2.5}} />
                    <View style={{flex: 0.5}} />
                    <DiaryInfo style={{flex: 5.5}} />
                </View>
                <BottomTab nowMenu={PROF_MENU}/>
            </View>
        );
    }
}