import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { commonStyle, textStyle, colorStyle }from '../screen/commonStyle';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style, commonStyle.centerAlign, { height: 44, backgroundColor: colorStyle.gray }]}>
                <Text style={[textStyle.b22, { color: colorStyle.white }]}>{this.props.headerText}</Text>
            </View>
        );
    }
}
