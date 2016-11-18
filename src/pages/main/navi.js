'use strict'

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import MessagePage from './messages';
import WorkPage from './work';
import ContactsPage from './contacts';
import MinePage from './mine';

const styles = StyleSheet.create({
    title: {color: '#000000'},
    selectedTitle: {color: '#999'},
    selectedIcon: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        borderWidth: 0,
        borderRadius: 0,
        overflow: 'hidden'
    },
    icon: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        borderWidth: 0,
        borderRadius: 0,
        overflow: 'hidden'
    },
    tabNav: {},
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
            tabPageProps: []
        },
        // {
        //     tabId: 'ding',
        //     title: 'DING',
        //     icon: require('../../../assets/img/ding_64x64.png'),
        //     selectedIcon: require('../../../assets/img/ding_blue_64x64.png'),
        //     tabPageClass: MessagePage,
        //     tabPageProps: []
        // },
        {
            tabId: 'work',
            title: '工作',
            icon: require('../../../assets/img/work_64x64.png'),
            selectedIcon: require('../../../assets/img/work_blue_64x64.png'),
            tabPageClass: WorkPage,
            tabPageProps: [{naviBarHeight: 50}]
        },
        {
            tabId: 'contacts',
            title: '联系人',
            icon: require('../../../assets/img/contacts_64x64.png'),
            selectedIcon: require('../../../assets/img/contacts_blue_64x64.png'),
            tabPageClass: ContactsPage,
            tabPageProps: []
        },
        {
            tabId: 'mine',
            title: '我的',
            icon: require('../../../assets/img/mine_64x64.png'),
            selectedIcon: require('../../../assets/img/mine_blue_64x64.png'),
            tabPageClass: MinePage,
            tabPageProps: []
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
            let renderIcon = () => <Image source={tabItem.icon} style={styles.icon}/>;
            let renderSelectedIcon = () => <Image source={tabItem.selectedIcon} style={styles.selectedIcon}/>;
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
