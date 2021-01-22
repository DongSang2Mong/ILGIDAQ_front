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
            <View>

            </View>
        );
    }
}



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // For Kakao Login, kakao Login -> Get profile
        this.kakaoLogin()
        .then((result) => {
            // send 
        });
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
            <View>
                <View />
                <View>
                </View>
                <View />
                <View>
                </View>
                <View />
                <View>
                </View>
            </View>
        );
    }
}