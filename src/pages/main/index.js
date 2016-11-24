'use strict'

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

const naviBarHeight = 50;
const itemWidth = 48, iconWidth = 24;
const styles = StyleSheet.create({
    title: {color: '#000000', fontWeight: 'bold'},
    selectedTitle: {color: '#1E90FF', fontWeight: 'bold'},
    tabNav: {height: naviBarHeight},
    tabNavHide: {opacity: 0, zIndex: 0, width: 0, height: 0},
    item: {width: itemWidth, height: 32},
    icon: {width: iconWidth, height: 24, overflow: 'hidden'},
    iconPos: {
        zIndex: 0, position: 'absolute', left: (itemWidth - iconWidth) / 2, bottom: 0
    },
    eventPos: {zIndex: 1, position: 'absolute', right: 0, top: 5},
    event: {
        backgroundColor: 'red',
        height: 14,
        borderRadius: 7,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventText: {color: '#FFF', fontSize: 10, fontWeight: 'bold'}
});

import MessagePage from './messages';
import DingPage from './ding';
import WorkPage from './work';
import ContactsPage from './contacts';
import MinePage from './mine';

const barTabItems = {
    initItem: {tabId: 'msg'},
    items: {
        msg: {
            tabId: 'msg',
            title: '消息',
            icon: require('../../../assets/img/msg_64x64.png'),
            selectedIcon: require('../../../assets/img/msg_blue_64x64.png'),
            tabPageClass: MessagePage
        },
        ding: {
            tabId: 'ding',
            title: 'DING',
            icon: require('../../../assets/img/ding_64x64.png'),
            selectedIcon: require('../../../assets/img/ding_blue_64x64.png'),
            tabPageClass: DingPage
        },
        work: {
            tabId: 'work',
            title: '工作',
            icon: require('../../../assets/img/work_64x64.png'),
            selectedIcon: require('../../../assets/img/work_blue_64x64.png'),
            tabPageClass: WorkPage
        },
        contacts: {
            tabId: 'contacts',
            title: '联系人',
            icon: require('../../../assets/img/contacts_64x64.png'),
            selectedIcon: require('../../../assets/img/contacts_blue_64x64.png'),
            tabPageClass: ContactsPage
        },
        mine: {
            tabId: 'mine',
            title: '我的',
            icon: require('../../../assets/img/mine_64x64.png'),
            selectedIcon: require('../../../assets/img/mine_blue_64x64.png'),
            tabPageClass: MinePage
        }
    }
};

export default class BottomNaviPage extends Component {

    static route = {
        name: 'BottomNaviPage',
        index: 0,
        component: BottomNaviPage,
        title: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: barTabItems.initItem.tabId,
            tabBarShow: true
        }
    }

    componentDidMount() {
        this._init();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // TODO: return whether or not current chat thread is different to former one.
        // 根据实际情况判断当前帖子的状态是否和之前不同
        return true;
    }

    _hide() {
        this.setState({tabBarShow: true});
    }

    /**
     * 初始化一些可变的配置
     * @private
     */
    _init() {
        let items = barTabItems.items;
        for (let tabItemKey in items) {
            items[tabItemKey]['tabPageProps'] = {naviBarHeight: naviBarHeight};
            items[tabItemKey]['eventCount'] = 0;
        }
        barTabItems.items.ding['tabPageProps'] = {onRefresh: this.props.onDingRefresh, naviBarHeight: naviBarHeight};
    }

    _getIcon(tabItem) {
        let iconSource;
        if (this.state.selectedTab === tabItem.tabId) {
            iconSource = tabItem.selectedIcon;
        } else {
            iconSource = tabItem.icon;
        }
        let eventText, eventOpacity = 0, eventWidth = 14, eventCount = tabItem.eventCount;
        if (eventCount > 0) {
            eventText = tabItem.eventCount > 99 ? '99' : eventCount + '';
            eventOpacity = 1;
            eventWidth = eventCount > 9 ? 16 : 14;
        }
        let eventStyleAdditional = {width: eventWidth, opacity: eventOpacity};
        return (
            <View style={styles.item}>
                <View style={[styles.event, styles.eventPos, eventStyleAdditional]}>
                    <Text style={styles.eventText}>{eventText}</Text>
                </View>
                <Image source={iconSource} style={[styles.icon, styles.iconPos]}/>
            </View>
        );
    }

    _getItems() {
        barTabItems.items.ding['eventCount'] = this.props.dingUnconfirmed;
        let items = [];
        for (let tabItemKey in barTabItems.items) {
            items.push(tabItemKey);
        }
        return items.map((tabItemKey)=> {
            let tabItem = barTabItems.items[tabItemKey];
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
