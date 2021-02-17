import React from 'react';
import { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { textStyle, colorStyle } from '../commonStyle';

export default class HashTagView extends Component {
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
                <Text style={[textStyle.b12, {color: colorStyle.orange}]}>#{this.props.contents}</Text>
            </View>
        );
    }
}

