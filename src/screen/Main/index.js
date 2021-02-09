import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {HOME_MENU} from '../../components/BottomTab';
import PointView from './PointView';
import DiaryView from './DiaryView';

import { exampleData } from "./exData"

function getCommaNumber(number) {
    var retStr = "";
    var remainder = number % 1000;
    while(number >= 1000) {
        retStr = "," + remainder.toString() + retStr;
        number = parseInt(number / 1000)
    }
    retStr = remainder.toString() + retStr;
}

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { diaryContents : exampleData }
    }

    render() {
        return (
            <ScreenTemplate 
                navigation={this.props.navigation} 
                headerText="메인" 
                buttonType="None"
                nowMenu={HOME_MENU}
            >
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    <PointView style={{height: 40, marginTop: 10, marginBottom: 10}} point={20931} nickname="노녹이"/>
                    <DiaryView style={{flex: 1}} diaryContents={this.state.diaryContents}/>
                </View>
            </ScreenTemplate>
        );
    }
}