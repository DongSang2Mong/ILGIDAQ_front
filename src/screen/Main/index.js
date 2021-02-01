import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {HOME_MENU} from '../../components/BottomTab';

class PointView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>

            </View>
        )
    }
}

class DiaryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>
                
            </View>
        )
    }
}

class DiaryContents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>
                
            </View>
        )
    }
}

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
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
                    <PointView />
                    <DiaryView />
                </View>
            </ScreenTemplate>
        );
    }
}