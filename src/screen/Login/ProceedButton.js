import React from 'react';
import { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { commonStyle, textStyle }from '../commonStyle';

export default class ProceedButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, commonStyle.centerAlign, {flex: 1, flexDirection: 'row'}]}>
                <View style={[{flex: 2}, commonStyle.endAlign]}>
                    <Text 
                        style={[textStyle.smallLight, {color: "#444444", marginRight: 12}]}
                    >
                        로그인 없이 진행하기
                    </Text>
                    <TouchableOpacity 
                        style={[{width: 24, height: 24, marginRight: 24}, commonStyle.centerAlign]}
                    >
                        <Image 
                            style={commonStyle.flexImage} 
                            source={require('../../../resource/Button/next48.png')} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}