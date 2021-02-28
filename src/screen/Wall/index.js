import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {WALL_MENU} from '../../components/BottomTab';
import PointView from './PointView';
import DiaryView from './DiaryView';

import { exampleData } from "./exData"

export default class WallScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { diaryContents : exampleData }
    }

    render() {
        return (
            <ScreenTemplate 
                navigation={this.props.navigation} 
                headerText="담벼락" 
                buttonType="None"
                nowMenu={WALL_MENU}
                bottomShow={true}
            >
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    <PointView style={{height: 40, marginTop: 10, marginBottom: 10}} point={20931} nickname="노녹이"/>
                    <DiaryView style={{flex: 1}} diaryContents={this.state.diaryContents}/>
                </View>
            </ScreenTemplate>
        );
    }
}