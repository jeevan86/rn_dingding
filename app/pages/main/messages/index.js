'use strict'

import React, {Component} from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Alert
} from 'react-native';

import MessageList from './list';

var navigationBarHeight = 50;

var styles = StyleSheet.create({
    naviBarItem: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={[{width: 30}, styles.naviBarItem]}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text >
                            {"< 后退"}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <TouchableOpacity style={[{width: 40}, styles.naviBarItem]}
                                  onPress={() => Alert.alert("点击了密")}>
                    <Image style={{width: 20, height: 20}}
                           source={require('../../../assets/img/mi.png')}/>
                </TouchableOpacity>
            );
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (index > 0) {
            if (route.onPress)
                return (
                    <View style={[{width: 30}, styles.naviBarItem]}>
                        <TouchableOpacity
                            onPress={() => route.onPress()}>
                            <Text>
                                {route.rightText || '右键'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
        } else {
            return (
                <View style={[{flexDirection: 'row', width: 60}, styles.naviBarItem]}>
                    <TouchableOpacity onPress={() => Alert.alert("点击了电话")}
                                      style={{
                                          flex: 1,
                                          alignItems: 'flex-start'
                                      }}>
                        <Image style={{width: 20, height: 20}}
                               source={require('../../../assets/img/phone.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert("点击了+")}
                                      style={{
                                          flex: 1,
                                          alignItems: 'flex-end'
                                      }}>
                        <Image style={{marginRight: 10, width: 20, height: 20}}
                               source={require('../../../assets/img/plus.png')}/>
                    </TouchableOpacity>
                </View>);
        }
    },
    // 标题
    Title(route, navigator, index, navState) {
        let titleStyle = [{width: 200}, styles.naviBarItem];
        let titleTextStyle = {fontSize: 14, color: '#555555'};
        let title = route.title;
        return (
            <View style={titleStyle}>
                <TouchableOpacity onPress={() => Alert.alert("点击了钉钉")}>
                    <Text style={titleTextStyle}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default class MessagePage extends Component {
    /**
     * 构造器
     * @param props 属性
     */
    constructor(props) {
        super(props);
        this.state = {
            navigationBarHeight: navigationBarHeight
        }
    }

    static route = {
        name: 'MessageList',
        index: 0,
        component: MessageList,
        title: '钉钉'
    }

    render() {
        let initialRoute = MessagePage.route;
        return (
            <Navigator initialRoute={initialRoute}
                       configureScene={(route) => {
                           return Navigator.SceneConfigs.HorizontalSwipeJump;
                       }}
                       renderScene={(route, navigator) => {
                           if (route.title.length === 0) this.state.navigationBarHeight = 0;
                           let Component = route.component;
                           return (<Component {...route.params}
                                              style={{marginTop: this.state.navigationBarHeight}}
                                              navigator={navigator}
                                              onForward={() => {
                                                  var nextIndex = route.index + 1;
                                                  navigator.push({
                                                      name: 'Scene ' + nextIndex,
                                                      index: nextIndex,
                                                  });
                                              }}
                                              onBack={() => {
                                                  if (route.index > 0) {
                                                      navigator.pop();
                                                  }
                                              }}
                           />);
                       }}
                       navigationBar={
                           <Navigator.NavigationBar
                               style={{
                                   backgroundColor: '#e1e1e1',
                                   height: this.state.navigationBarHeight
                               }}
                               routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }
}
