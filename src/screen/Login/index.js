import React from 'react';
import { Component } from 'react';
import { View, Text, Image } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.kakaoLogin();
    }

    kakaoLogin(){
        KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
            if (err.code === 'E_CANCELLED_OPERATION') {
                console.log(`Login Cancelled:${err.message}`);
                setLoginLoading(false);
            } else {
                console.log(err.code);
            }
        });
    }

    render() {
        return (
            <View>
                <View />
                <View>
                </View>
            </View>
        );
    }
}