'use strict'

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

const styles = StyleSheet.create({
    title: {color: '#000000'},
    selectedTitle: {color: '#999'},
    selectedIcon: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        borderWidth: 0,
        borderRadius: 0,
        overflow: 'hidden'
    },
    icon: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        borderWidth: 0,
        borderRadius: 0,
        overflow: 'hidden'
    },
    tabNav: {
        height: 48
    },
    tabNavHide: {
        opacity: 0,
        zIndex: 0,
        width: 0,
        height: 0
    }
});

import MessagePage from './messages';
import DingPage from './ding';
import WorkPage from './work';
import ContactsPage from './contacts';
import MinePage from './mine';

export default class BottomNaviPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'msg',
            tabBarShow: true
        }
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        // TODO: return whether or not current chat thread is different to former one.
        // 根据实际情况判断当前帖子的状态是否和之前不同
        return true;
    }

    hide() {
        this.setState({tabBarShow: true});
    }

    _getIcon(tabItem) {
        let source, style;
        if (this.state.selectedTab === tabItem.tabId) {
            source = tabItem.selectedIcon;
            style = styles.selectedIcon;
        } else {
            source = tabItem.icon;
            style = styles.icon;
        }
        let eventText, eventOpacity = 0, eventWidth = 12, eventCount = tabItem.eventCount;
        if (eventCount > 0) {
            eventText = tabItem.eventCount > 99 ? '99' : eventCount + '';
            eventOpacity = 1;
            if (eventCount > 9)
                eventWidth = 14;
        }
        return <View style={{
            width: 40,
            height: 32,
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center'
        }}>
            <View style={{zIndex: 1}}>
                <View style={[
                    {
                        backgroundColor: 'red',
                        height: 12,
                        borderRadius: 6,
                        left: -3,
                        top: 4,
                        alignSelf: 'flex-end',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }, {width: eventWidth, opacity: eventOpacity}]}>
                    <Text style={{color: '#FFF', fontSize: 7, fontWeight: 'bold'}}>
                        {eventText}
                    </Text>
                </View>
            </View>
            <Image source={source} style={[style, {zIndex: 0}]}/>
        </View>;
    }

    _getItems() {
        var barTabItems = {
            initItem: {tabId: 'msg'},
            items: [
                {
                    tabId: 'msg',
                    title: '消息',
                    icon: require('../../../assets/img/msg_64x64.png'),
                    selectedIcon: require('../../../assets/img/msg_blue_64x64.png'),
                    tabPageClass: MessagePage,
                    tabPageProps: {},
                    eventCount: 0
                },
                {
                    tabId: 'ding',
                    title: 'DING',
                    icon: require('../../../assets/img/ding_64x64.png'),
                    selectedIcon: require('../../../assets/img/ding_blue_64x64.png'),
                    tabPageClass: DingPage,
                    tabPageProps: {
                        ding_unconfirmed: this.props.ding_unconfirmed,
                        naviBarHeight: 50,
                        onRefresh: this.props.onRefresh
                    },
                    eventCount: this.props.ding_unconfirmed
                },
                {
                    tabId: 'work',
                    title: '工作',
                    icon: require('../../../assets/img/work_64x64.png'),
                    selectedIcon: require('../../../assets/img/work_blue_64x64.png'),
                    tabPageClass: WorkPage,
                    tabPageProps: {naviBarHeight: 50},
                    eventCount: 0
                },
                {
                    tabId: 'contacts',
                    title: '联系人',
                    icon: require('../../../assets/img/contacts_64x64.png'),
                    selectedIcon: require('../../../assets/img/contacts_blue_64x64.png'),
                    tabPageClass: ContactsPage,
                    tabPageProps: {},
                    eventCount: 0
                },
                {
                    tabId: 'mine',
                    title: '我的',
                    icon: require('../../../assets/img/mine_64x64.png'),
                    selectedIcon: require('../../../assets/img/mine_blue_64x64.png'),
                    tabPageClass: MinePage,
                    tabPageProps: {},
                    eventCount: 0
                }
            ]
        };

        return barTabItems.items.map((tabItem)=> {
            let key = tabItem.tabId;
            if (this.props.key) {
                key = this.props.key + '-' + key;
            } else {
                'BottomNaviPageTabItem-' + key;
            }
            let title = tabItem.title;
            let selected = this.state.selectedTab === tabItem.tabId;
            let onPress = () => this.setState({selectedTab: tabItem.tabId});
            let renderIcon = () => this._getIcon(tabItem);
            let renderSelectedIcon = () => this._getIcon(tabItem);
            let TabPageClass = tabItem.tabPageClass;
            return (
                <TabNavigatorItem
                    key={key} title={title} selected={selected}
                    titleStyle={styles.title} selectedTitleStyle={styles.selectedTitle}
                    onPress={onPress} renderIcon={renderIcon} renderSelectedIcon={renderSelectedIcon}
                >
                    <TabPageClass {...tabItem.tabPageProps} />
                </TabNavigatorItem>
            );
        });
    }

    render() {
        let tabBarStyle = this.state.tabBarShow ? styles.tabNav : styles.tabNavHide;
        return (
            <TabNavigator hidesTabTouch={false} tabBarStyle={tabBarStyle}>
                {this._getItems()}
            </TabNavigator>
        );
    }
}
