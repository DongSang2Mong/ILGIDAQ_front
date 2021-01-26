import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import Header from '../../components/Header';
import {HOME_MENU, BottomTab} from '../../components/BottomTab';


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="메인" buttonType="None"/>
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    
                </View>
                <BottomTab navigation={this.props.navigation} nowMenu={HOME_MENU}/>
            </View>
        );
    }
}