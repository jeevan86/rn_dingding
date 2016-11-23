'use strict'

import React, {Component} from 'react';

import {View, ScrollView, Navigator, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';

import DingList from './list';

var styles = StyleSheet.create({
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    flexColumnStart: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    container: {height: 1000},
    section: {
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    sectionLine: {
        flex: 1,
        justifyContent: 'center'
    },
    sectionLineRight: {
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    spreader: {height: 14, backgroundColor: '#ccc', opacity: .2},
    naviBarItem: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default class DingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naviBarHeight: this.props.naviBarHeight || 50,
            dingUnconfirmed: this.props.dingUnconfirmed
        };
    }

    _initialRoute() {
        return {
            name: 'DingList',
            index: 0,
            component: DingList,
            title: DingList.title,
            passProps: {dingUnconfirmed: this.props.dingUnconfirmed, onRefresh : this.props.onRefresh}
        };
    }

    _configureScene() {
        return () => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        };
    }

    _onForward(navigator, route) {
        var nextIndex = route.index + 1;
        navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex
        })
    }

    _onBack(navigator, route) {
        if (route.index > 0) navigator.pop();
    }

    _renderScene() {
        let style = {backgroundColor: '#FFF', marginTop: this.state.naviBarHeight};
        return (route, navigator) => {
            let Component = route.component;
            return <Component {...route.passProps}
                              style={style}
                              navigator={navigator}
                              onForward={() => {
                                  this._onForward(navigator, route);
                              }}
                              onBack={() => {
                                  this._onBack(navigator, route);
                              }}
            />;
        };
    }

    _navigationBar() {
        let naviBar = {
            LeftButton(route, navigator, index, navState) {
                let titleStyle = [styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: 'blue'};
                return <View style={titleStyle}><Text style={titleTextStyle}>{'   编辑   '}</Text></View>;
            },
            Title(route, navigator, index, navState) {
                let titleStyle = [{width: 200}, styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: '#444444'};
                let title = route.title;
                return <View style={titleStyle}><Text style={titleTextStyle}>{title}</Text></View>;
            },
            RightButton(route, navigator, index, navState) {
                let titleStyle = [styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: 'blue'};
                return <View style={titleStyle}><Text style={titleTextStyle}>{'   添加   '}</Text></View>;
            }
        };
        let style = {backgroundColor: '#e1e1e1', height: this.state.naviBarHeight};
        return <Navigator.NavigationBar style={style} routeMapper={naviBar}/>
    }

    render() {
        return <Navigator initialRoute={this._initialRoute()} configureScene={this._configureScene()}
                          renderScene={this._renderScene()} navigationBar={this._navigationBar()}/>;
    }
}
