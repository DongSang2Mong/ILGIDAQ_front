import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {WALL_MENU} from '../../components/BottomTab';

export default class EditScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScreenTemplate 
                navigation={this.props.navigation} 
                headerText="일기쓰기" 
                buttonType="back"
                nowMenu={WALL_MENU}
                bottomShow={false}
            >
                <View style={[{flex: 1}, commonStyle.marginSide]}>
                    
                </View>
            </ScreenTemplate>
        );
    }
}