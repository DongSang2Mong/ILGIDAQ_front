import React, { Component } from 'react';
import { View } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import AppTitle from './AppTitle';
import KakaoLoginButton from './KakaoLoginButton';
import ProceedButton from './ProceedButton';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.kakaoLogin = this.kakaoLogin.bind(this);
    }
    
    kakaoLogin(){
        return new Promise((res, rej) => {
            KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
            .then(result => {
                KakaoLogins.getProfile()
                .then(result => { 
                    console.log(result);
                    res(result); 
                })
                .catch(err => { rej(err); });
            })
            .catch(err => { rej(err);  });
        });
    }
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#FFFFFF"}}>
                <View style={{flex: 2}}/>
                <AppTitle style={{flex: 1}}/>
                <View style={{flex: 4.5}}/>
                <KakaoLoginButton style={{flex: 0.8}} login={this.kakaoLogin}/>
                <View style={{flex: 0.8}}/>
                <ProceedButton style={{flex: 0.8}}/>
            </View>
        );
    }
}