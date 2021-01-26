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
            <View style={[this.props.style]}>

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
            <View style={[this.props.style]}>

            </View>
        );
    }
}

class PointInfo extends Component {
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
                <View style={{flex: 1}}>
                    <View style={{flex: 0.5, backgroundColor: "#2a5637"}} />
                    <UserName stlye={{flex: 1, marginBottom : 20}} />
                    <UserInfo style={{flex: 3}} />
                    <View style={{flex: 0.5, backgroundColor: "#2a5637"}} />
                    <PointInfo style={{flex: 2.5}} />
                    <View style={{flex: 0.5, backgroundColor: "#2a5637"}} />
                    <DiaryInfo style={{flex: 5.5}} />
                </View>
                <BottomTab nowMenu={PROF_MENU}/>
            </View>
        );
    }
}