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

class BottomTab extends Component {
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
                    <DiaryInfo style={{flex: 8}} />
                </View>
                <BottomTab />
            </View>
        );
    }
}