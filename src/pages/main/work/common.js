'use strict'

import React, {Component} from 'react';

import {StyleSheet, Image, Text, View, TouchableOpacity, Alert} from 'react-native';

let styles = StyleSheet.create({
    commonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    commonTitleText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    commonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    commonItem: {
        flex: 1,
        height: 40,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    commonItemIcon: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: 'transparent'
    },
    borderTop: {borderTopWidth: 0, borderTopColor: '#777'},
    borderBottom: {borderBottomWidth: 0, borderBottomColor: '#777'}
});

class CommonItem extends Component {
    render() {
        return (
            <View style={styles.commonItem}>
                <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {
                        Alert.alert('test')
                    }}>
                    <Image source={this.props.icon} style={{width: 36, height: 36}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 10}}>{this.props.text}</Text>
            </View>
        );
    }
}

class Common extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.commonContainer]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: 24
                }}><Text style={[styles.commonTitleText, {paddingLeft: 10}]}>{"常用应用"}</Text>
                </View>
                <View style={[styles.commonRow, styles.borderTop]}>
                    <CommonItem text={"钉盘"} icon={require('../../../../assets/img/icon_work_dingpan.png')}/>
                    <CommonItem text={"钉邮"} icon={require('../../../../assets/img/icon_work_dingyou.png')}/>
                    <CommonItem text={"管理日历"} icon={require('../../../../assets/img/icon_work_guanlirili.png')}/>
                    <CommonItem text={"签到"} icon={require('../../../../assets/img/icon_work_qiandao.png')}/>
                </View>
                <View style={[styles.commonRow, styles.borderBottom]}>
                    <CommonItem text={"审批"} icon={require('../../../../assets/img/icon_work_shenpi.png')}/>
                    <CommonItem text={"公告"} icon={require('../../../../assets/img/icon_work_gonggao.png')}/>
                    <CommonItem text={"钉钉体验站"} icon={require('../../../../assets/img/icon_work_dingdingtiyanzhan.png')}/>
                    <CommonItem text={"日志"} icon={require('../../../../assets/img/icon_work_rizhi.png')}/>
                </View>
            </View>
        );
    }
}

module.exports = Common;