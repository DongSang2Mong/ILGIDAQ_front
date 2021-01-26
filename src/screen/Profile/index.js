import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { commonStyle, textStyle }from '../commonStyle';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

class BottomTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

class UserName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

class PointInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

class DiaryInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>

            </View>
        );
    }
}

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header />
                <View>
                    <UserName />
                    <UserInfo />
                    <PointInfo />
                    <DiaryInfo />
                </View>
                <BottomTab />
            </View>
        );
    }
}