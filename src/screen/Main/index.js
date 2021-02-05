import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
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
                <FlatList 
                    data={this.props.diaryContents}
                    renderItem={({ item }) => {
                        return(<DiaryContents diaryContents={item}/>);
                        
                    }}
                    keyExtractor={item => item.dairyID}
                />
            </View>
        )
    }
}

class DiaryContents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.diaryContents.imgSrc == null) {
            var radiusStyle = {borderTopRightRadius: 10, borderTopLeftRadius: 10};
            var imageView = <View />;
        }
        else {
            var radiusStyle = {};
            var imageView = 
            <View style={{width: "100%", height: 130, marginBottom: -1}}>
                <Image style={{width:"100%", height: "100%", resizeMode: "cover", borderTopRightRadius: 10, borderTopLeftRadius: 10}} source={require("../../../resource/Temp/orange.png")}/>
            </View>;
        }
        return(
            <View style={[this.props.style, {marginTop: 10, marginBottom: 10}]}>
                {imageView}
                <DiaryMetadata style={radiusStyle} diaryContents={this.props.diaryContents}/>
            </View>
        )
    }
}

class DiaryMetadata extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, {height: 95, backgroundColor: "#0E0E0E", borderBottomLeftRadius: 10, borderBottomRightRadius: 10}]}>
                <View style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
                    <Text style={[textStyle.b18, {color: colorStyle.white, marginBottom: 4}]}>{this.props.diaryContents.name}</Text>
                    <Text style={[textStyle.r12, {color: colorStyle.white, marginBottom: 6}]}>{this.props.diaryContents.date}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={[textStyle.r12, {color: colorStyle.white}]}>{this.props.diaryContents.writer}</Text>
                        <Text style={[textStyle.b14, {color: colorStyle.white}]}>{this.props.diaryContents.point} P</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <HashTagView hashTag={this.props.diaryContents.hashTag}/>
                        <LikeView like={this.props.diaryContents.like} dislike={this.props.diaryContents.dislike} />
                    </View>
                </View>
            </View>
        );
    }
}

class HashTagView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style]}>
            <FlatList 
                data={this.props.hashTag}
                horizontal={true}
                renderItem={({ item }) => {
                    return(<HashTagClass contents={item}/>);
                    
                }}
                keyExtractor={(item, index) => index.toString()}
            />
            </View>
        );
    }
}

class HashTagClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, {marginRight: 12}]}>
                <Text style={[textStyle.b12, {color: colorStyle.orange,}]}>#{this.props.contents}</Text>
            </View>
        );
    }
}

class LikeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style]}>
    
            </View>
        );
    }
}

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diaryContents : [
                {
                    name: "자전거타자전거타자전거타자전거타",
                    dairyID: "231",
                    date: "2020.12.29",
                    writer: "nonokee",
                    imgSrc: "../../../resource/Temp/orange.png",
                    hashTag: ["정보", "19", "한강"],
                    point: 10000,
                    like: 230,
                    dislike: 12
                },
                {
                    name: "빵터지는 최불암 깔깔 유모아",
                    dairyID: "232",
                    date: "2020.12.29",
                    writer: "콩수내비",
                    imgSrc: null,
                    hashTag: ["유머", "최불암"],
                    point: 1900,
                    like: 130,
                    dislike: 172
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
                    <PointView style={{height: 40}} point={20931} nickname="노녹이"/>
                    <DiaryView style={{flex: 1}} diaryContents={this.state.diaryContents}/>
                </View>
            </ScreenTemplate>
        );
    }
}