import React from 'react';
import { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyle, colorStyle } from '../screen/commonStyle';

const HOME_MENU = 1;
const DASH_MENU = 2;
const PROF_MENU = 3; 

class BottomTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[this.props.style, tabStyle.BottomTabContainer]}>
                <View style={[commonStyle.centerAlign, {flex: 1}]}>
                    <TouchableOpacity style={[commonStyle.centerAlign, {marginBottom: 4}]}>
                        <Image style={commonStyle.image28} source={require('../../resource/Button/Large/home_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == HOME_MENU}/>
                </View>
                <View style={[commonStyle.centerAlign, {flex: 1}]}>
                    <TouchableOpacity style={[commonStyle.centerAlign, {marginBottom: 4}]}>
                        <Image style={commonStyle.image28} source={require('../../resource/Button/Large/dashboard_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == DASH_MENU}/>
                </View>
                <View style={[commonStyle.centerAlign, {flex: 1}]}>
                    <TouchableOpacity style={[commonStyle.centerAlign, {marginBottom: 4}]}>
                        <Image style={commonStyle.image28} source={require('../../resource/Button/Large/person_icon58.png')} />
                    </TouchableOpacity>
                    <SelectCircle selectState={this.props.nowMenu == PROF_MENU}/>
                </View>
            </View>
        );
    }
}

class SelectCircle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.selectState) {
            return (
                <View style={{width: 7, height: 7, borderRadius: 7, backgroundColor: colorStyle.orange}}/>
            );
        }
        else {
            return (
                <View style={{width: 7, height: 7, borderRadius: 7, backgroundColor: colorStyle.black}}/>
            );
        }
    }
}

const tabStyle = StyleSheet.create({ 
    BottomTabContainer: {
        flexDirection: "row", 
        paddingTop: 6, 
        height: 60, 
        borderTopLeftRadius: 6, 
        borderTopRightRadius: 6, 
        backgroundColor: colorStyle.black
    }
});

export {HOME_MENU, DASH_MENU, PROF_MENU, BottomTab};