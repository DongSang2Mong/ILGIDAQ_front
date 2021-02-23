import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';
import { showList } from "./exData"

const UP = "up";
const DOWN = "down"

// TODO : Dropdown Btn Size를 props로 입력받아 top / left 를 변형해야한다.
// TODO : Width size에 맞춰서 dropdown width를 변형해야한다.

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
            <View style={{position: "absolute", width: "60%", top: 21, backgroundColor: "#FFFFFF", zIndex: 20, borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                <View
                    style={{flex: 2}}
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
                        style={{zIndex: 21, margin: 8}}
                    />
                </View>
                <View style={{flex: 1}} />
            </View>;
        if(this.state.rotate == DOWN) dropSpace = <View />;
        return (
            <View style={[this.props.style]}>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        onPress={() => {
                            var rotate = this.state.rotate == UP ? DOWN : UP;
                            this.setState({rotate: rotate});
                        }}
                    >
                        {dropbtn}
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={[textStyle.b18, { textAlignVertical: "bottom" }]}>{this.state.listText}</Text>
                    </View>
                    <View style={{flex: 1}}></View>
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
                style={[this.props.style, {marginTop: 5, marginBottom: 5}, {alignItems: 'center'}]}
                onPress={() => {
                    this.props.onPress(this.props.textContents);
                }}
            >
                <Text style={[textStyle.b16]}>{this.props.textContents}</Text>
            </TouchableOpacity>
        );
    }
}

