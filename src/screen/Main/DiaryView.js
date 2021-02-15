import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';
import HashTagView from './HashTagView';
import LikeView from './LikeView'

export default class DiaryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>
                <View style={{flexDirection: "row", marginBottom: 9}}>
                    <Text style={[textStyle.b20, {color: colorStyle.orange}]}>오늘</Text>
                    <Text style={[textStyle.b20]}>의 일기</Text>
                </View>
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
            <View style={[this.props.style, {marginTop: 5, marginBottom: 5}]}>
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
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 3}}>
                        <Text style={[textStyle.r12, {color: colorStyle.white}]}>{this.props.diaryContents.writer}</Text>
                        <Text style={[textStyle.b14, {color: colorStyle.white}]}>{this.props.diaryContents.point} P</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <HashTagView hashTag={this.props.diaryContents.hashTag}/>
                        <LikeView like={this.props.diaryContents.like} dislike={this.props.diaryContents.dislike} />
                    </View>
                </View>
            </View>
        );
    }
}