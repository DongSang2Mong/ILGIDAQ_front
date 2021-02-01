import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { commonStyle, textStyle, colorStyle } from '../commonStyle';
import ScreenTemplate from '../../components/ScreenTemplate';
import {HOME_MENU} from '../../components/BottomTab';

function getCommaNumber(number) {
    var retStr = "";
    var remainder = number % 1000;
    while(number >= 1000) {
        retStr = "," + remainder.toString() + retStr;
        number = parseInt(number / 1000)
    }
    retStr = remainder.toString() + retStr;
}

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
        this.state = {
            diaryContents : [
                {
                    name: "자전거타자전거타자전거타자전거타",
                    date: "2020.12.29",
                    writer: "nonokee",
                    hashTag: ["정보", "19", "한강"],
                    point: 10000,
                    like: 230,
                    dislike: 12
                }
            ]
        }
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
                    <PointView point={20931} nickname="노녹이"/>
                    <DiaryView diaryContents={}/>
                </View>
            </ScreenTemplate>
        );
    }
}