import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';
import HashTagView from './HashTagView';
import LikeView from './LikeView'
import { showList } from "./exData"

export default class DiaryView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style]}>
                <DropDownList style={{marginBottom: 9}}/>
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

class DropDownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: "down",
            listText: "최신순"
        }
        this.changeListText = this.changeListText.bind(this);
    }

    changeListText(text) {
        this.setState({rotate:"down", listText: text});
    }

    render() {
        var dropbtn = <Image 
                style={{width: 16, resizeMode:"contain", marginRight: 8}} 
                source={require("../../../resource/Button/Small/dropdown24.png")} 
            />;
        if(this.state.rotate == "up") {
            dropbtn = <Image 
                style={{width: 16, resizeMode:"contain", marginRight: 8}} 
                source={require("../../../resource/Button/Small/dropup24.png")} 
            />
        }

        var dropSpace = 
            <View
                style={{position: "absolute", top: 21, left: 124, backgroundColor: "#FFFFFF", zIndex: 20, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}
            >
                <FlatList 
                    data={showList}
                    renderItem={({ item }) => {
                        return(<DropDownContents 
                            textContents={item}
                            onPress={this.changeListText}
                        />);
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    style={{zIndex: 21, margin: 5}}
                />
            </View>;
        if(this.state.rotate == "down") dropSpace = <View />;
        return (
            <View style={[this.props.style]}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity 
                        style={{flexDirection: "row"}}
                        onPress={() => {
                            var rotate = this.state.rotate == "up" ? "down" : "up";
                            this.setState({rotate: rotate});
                        }}
                    >
                        {dropbtn}
                    </TouchableOpacity>
                    <Text style={[textStyle.b20, {color: colorStyle.orange}]}>오늘</Text>
                    <Text style={[textStyle.b20]}>의 일기</Text>
                    <Text style={[textStyle.b18, { textAlignVertical: "bottom"}]}>({this.state.listText})</Text>
                </View>
                {dropSpace}
            </View>
        )
    }
}

class DropDownContents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity 
                style={[this.props.style, {marginTop: 5, marginBottom: 5}]}
                onPress={() => {
                    this.props.onPress(this.props.textContents);
                }}
            >
                <Text style={[textStyle.b12]}>{this.props.textContents}</Text>
            </TouchableOpacity>
        );
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