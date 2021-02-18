import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';
import { showList } from "./exData"

const UP = "up";
const DOWN = "down"

export default class DropDownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: DOWN,
            listText: showList[0]
        }
        this.changeListText = this.changeListText.bind(this);
    }

    changeListText(text) {
        this.setState({rotate: DOWN, listText: text});
    }

    render() {
        var dropbtn = <Image 
                style={{width: 16, resizeMode:"contain", marginRight: 8}} 
                source={require("../../../resource/Button/Small/dropdown24.png")} 
            />;
        if(this.state.rotate == UP) {
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
        if(this.state.rotate == DOWN) dropSpace = <View />;
        return (
            <View style={[this.props.style]}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity 
                        style={{flexDirection: "row"}}
                        onPress={() => {
                            var rotate = this.state.rotate == UP ? DOWN : UP;
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

