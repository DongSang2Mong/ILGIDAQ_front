import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

class AppTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>

            </View>
        );
    }
}

class KakaoLoginButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>

            </View>
        );
    }
}

class ProceedButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>
                
            </View>
        );
    }
}


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    kakaoLogin(){
        return new Promise((res, rej) => {
            KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
            .then(result => {
                KakaoLogins.getProfile()
                .then(result => { res(result); })
                .catch(err => { rej(err); });
            })
            .catch(err => { rej(err);  });
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flex: 2, backgroundColor: "#23AD3C"}}/>
                <AppTitle style={{flex: 1}}/>
                <View style={{flex: 4, backgroundColor: "#47A1F3"}}/>
                <KakaoLoginButton style={{flex: 1}}/>
                <View style={{flex: 1, backgroundColor: "#2GA54C"}}/>
                <ProceedButton style={{flex: 1}}/>
            </View>
        );
    }
}