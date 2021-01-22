import React from 'react';
import { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';

class AppTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                <View style={{flex: 0.5}}/>
                <Image 
                    style={{flex: 1, resizeMode: "contain"}} 
                    source={require('../../../resource/AppLogo/AppLogo300-white_version.png')}
                />
                <View style={{flex: 0.5}}/>
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
            <View style={[this.props.style, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
                <View style={{flex: 0.2}} />
                <TouchableOpacity 
                    style={{flex: 1}}
                    onPress={() => {
                        this.props.login();
                    }}
                >
                    <Image 
                        style={{flex: 1.4, resizeMode: "contain"}} 
                        source={require('../../../resource/Kakao/kakao_login_medium_wide.png')}
                    />
                </TouchableOpacity>
                <View style={{flex: 0.2}} />
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
            <View style={[this.props.style, {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center', flexDirection: "row"}}>
                    <Text style={{fontSize: 12, color: "#444444", marginRight: 12, fontFamily: "NanumSquareL"}}>로그인 없이 진행하기</Text>
                    <TouchableOpacity style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', marginRight: 24}}>
                        <Image style={{flex: 1, resizeMode: "contain"}} source={require('../../../resource/Button/next48.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


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