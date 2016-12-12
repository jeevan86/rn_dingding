'use strict'

import React, {Component} from 'react';

import {View, ScrollView, Navigator, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';

import Header from './header'; //图片轮播
import Fixed from './fixed';   //固定内容
import Common from './common'; //常用应用
import Other from './other';   //其他应用
import More  from './more';    //查看更多

var styles = StyleSheet.create({
    container: {height: 1000},
    header: {height: 150},
    fixed: {height: 90},
    common: {height: 180},
    other: {height: 180},
    spreader: {height: 16, backgroundColor: '#ccc', opacity: .2},
    more: {height: 32},
    moreContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: .7,
        borderWidth: .5,
        borderColor: '#777'
    },
    naviBarItem: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

class WorkAppList extends Component {
    render() {
        return (
            <ScrollView contentInset={{top: 0}}
                        scrollsToTop={true}
                        showsVerticalScrollIndicator={true}
                        style={[styles.container, this.props.style]}>
                <Header style={styles.header}/>
                <Fixed style={styles.fixed}/>
                <View style={styles.spreader}/>
                <Common style={styles.common}/>
                <View style={styles.spreader}/>
                <Other style={styles.other}/>
                <View style={styles.spreader}/>
                <More style={styles.more}/>
                <View style={styles.spreader}/>
            </ScrollView>
        );
    }
}

export default class WorkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naviBarHeight: this.props.naviBarHeight || 50
        };
    }

    _initialRoute() {
        return {
            name: 'WorkAppList',
            index: 0,
            component: WorkAppList,
            title: WorkAppList.title
        };
    }

    _configureScene() {
        return () => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        };
    }

    _renderScene() {
        let style = {backgroundColor: '#FFF', marginTop: this.state.naviBarHeight};
        return (route, navigator) => {
            let Component = route.component;
            return <Component {...route.params}
                              style={style}
                              navigator={navigator}
                              onForward={() => {
                                  var nextIndex = route.index + 1;
                                  navigator.push({
                                      name: 'Scene ' + nextIndex,
                                      index: nextIndex
                                  })
                              }}
                              onBack={() => {
                                  if (route.index > 0) navigator.pop();
                              }}/>;
        };
    }

    _navigationBar() {
        let naviBar = {
            LeftButton(route, navigator, index, navState) {
                let btnStyle = [{width: 40}, styles.naviBarItem];
                let btnOnPress = () => Alert.alert("点击了铃铛");
                let icon = require('../../../assets/img/icon_work_lingdang.png');
                let iconStyle = {width: 16, height: 18};
                return (
                    <TouchableOpacity style={btnStyle} onPress={btnOnPress}>
                        <Image style={iconStyle} source={icon}/>
                    </TouchableOpacity>
                );
            },
            Title(route, navigator, index, navState) {
                let titleStyle = [{width: 200}, styles.naviBarItem];
                let titleTextStyle = {fontSize: 14, color: '#555555'};
                let title = route.title;
                return <View style={titleStyle}><Text style={titleTextStyle}>{title}</Text></View>;
            },
            RightButton(route, navigator, index, navState) {
                return <View />;
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
