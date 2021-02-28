import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {PROF_MENU} from '../../components/BottomTab';
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
            <ScreenTemplate 
                navigation={this.props.navigation} 
                headerText="프로필" 
                buttonType="None"
                nowMenu={PROF_MENU}
                bottomShow={true}
            >
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    <View style={{flex: 0.8}} />
                    <UserName stlye={{flex: 1}} />
                    <UserInfo style={{flex: 3}} />
                    <PointInfo style={{flex: 2.5}} />
                    <View style={{flex: 0.5}} />
                    <DiaryInfo style={{flex: 5.5}} />
                </View>
            </ScreenTemplate>
        );
    }
}