import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from "react-native-webview"

export default class IlgidaqEditor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                style={ this.props.style }
                source={{ uri: "https://ilgidaq.owlsogul.com/app/editor.wrapper.html"}}
                //source={{ uri: "http://192.168.0.110:30080/editor.wrapper.html" }}
            />
        );
    }
}