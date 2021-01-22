import React from 'react';
import { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { commonStyle, textStyle }from '../commonStyle';

export default class KakaoLoginButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, commonStyle.centerAlign, {flex: 1}]}>
                <View style={{flex: 0.2}} />
                <TouchableOpacity 
                    style={{flex: 1}}
                    onPress={() => {
                        this.props.login();
                    }}
                >
                    <Image 
                        style={commonStyle.flexImage} 
                        source={require('../../../resource/Kakao/kakao_login_medium_wide.png')}
                    />
                </TouchableOpacity>
                <View style={{flex: 0.2}} />
            </View>
        );
    }
}
