'use strict'

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import MessagePage from './messages';
import DingPage from './ding';
import WorkPage from './work';
import ContactsPage from './contacts';
import MinePage from './mine';

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

var barTabItems = {
    initItem: {tabId: 'msg'},
    items: [
        {
            tabId: 'msg',
            title: '消息',
            icon: require('../../../assets/img/msg_64x64.png'),
            selectedIcon: require('../../../assets/img/msg_blue_64x64.png'),
            tabPageClass: MessagePage,
            tabPageProps: [],
            eventCount: 0
        },
        {
            tabId: 'ding',
            title: 'DING',
            icon: require('../../../assets/img/ding_64x64.png'),
            selectedIcon: require('../../../assets/img/ding_blue_64x64.png'),
            tabPageClass: DingPage,
            tabPageProps: [],
            eventCount: 1
        },
        {
            tabId: 'work',
            title: '工作',
            icon: require('../../../assets/img/work_64x64.png'),
            selectedIcon: require('../../../assets/img/work_blue_64x64.png'),
            tabPageClass: WorkPage,
            tabPageProps: [{naviBarHeight: 50}],
            eventCount: 0
        },
        {
            tabId: 'contacts',
            title: '联系人',
            icon: require('../../../assets/img/contacts_64x64.png'),
            selectedIcon: require('../../../assets/img/contacts_blue_64x64.png'),
            tabPageClass: ContactsPage,
            tabPageProps: [],
            eventCount: 0
        },
        {
            tabId: 'mine',
            title: '我的',
            icon: require('../../../assets/img/mine_64x64.png'),
            selectedIcon: require('../../../assets/img/mine_blue_64x64.png'),
            tabPageClass: MinePage,
            tabPageProps: [],
            eventCount: 0
        }
    ]
};

class BottomNaviPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: barTabItems.initItem.tabId,
            tabBarShow: true
        }
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
            justifyContent: 'flex-start'
        }}>
            <View style={{
                alignSelf: 'flex-end',
                backgroundColor: 'red',
                width: eventWidth,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
                opacity: eventOpacity
            }}>
                <Text style={{color: '#FFF', fontSize: 7, fontWeight: 'bold'}}>
                    {eventText}
                </Text>
            </View>
            <Image source={source} style={style}/>
        </View>;
    }

    _getItems() {
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

module.exports = BottomNaviPage;
