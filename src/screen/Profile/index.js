import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import Header from '../../components/Header';
import {PROF_MENU, BottomTab} from '../../components/BottomTab';
import DiaryInfo from './DiaryInfo';
import UserName from './UserName';
import UserInfo from './UserInfo';
import PointInfo from './PointInfo';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="프로필" buttonType="None"/>
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    <View style={{flex: 0.8}} />
                    <UserName stlye={{flex: 1}} />
                    <UserInfo style={{flex: 3}} />
                    <PointInfo style={{flex: 2.5}} />
                    <View style={{flex: 0.5}} />
                    <DiaryInfo style={{flex: 5.5}} />
                </View>
                <BottomTab navigation={this.props.navigation} nowMenu={PROF_MENU}/>
            </View>
        );
    }
}