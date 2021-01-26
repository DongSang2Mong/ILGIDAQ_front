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
            <View>
                <Header />
                <View>
                    <UserName headerText="프로필"/>
                    <UserInfo />
                    <PointInfo />
                    <DiaryInfo />
                </View>
                <BottomTab />
            </View>
        );
    }
}