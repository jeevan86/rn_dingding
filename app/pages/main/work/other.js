'use strict';

import React, {Component} from 'react';

import {StyleSheet, Image, Text, View, TouchableOpacity, Alert} from 'react-native';

let styles = StyleSheet.create({
    otherContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherTitleText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    otherRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    otherItem: {
        flex: 1,
        height: 40,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    otherItemIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'transparent'
    },
    borderTop: {borderTopWidth: 0, borderTopColor: '#777'},
    borderBottom: {borderBottomWidth: 0, borderBottomColor: '#777'}
});

class OtherItem extends Component {
    render() {
        return (
            <View style={styles.otherItem}>
                <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {
                        Alert.alert('test');
                    }}>
                    <Image source={this.props.icon} style={{width: 36, height: 36}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 10}}>{this.props.text}</Text>
            </View>
        );
    }
}

export default class Other extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.otherContainer]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: 24
                }}><Text style={[styles.otherTitleText, {paddingLeft: 10}]}>{'其他应用'}</Text>
                </View>
                <View style={[styles.otherRow, styles.borderTop]}>
                    <OtherItem text={'Tower任务'} icon={require('../../../assets/img/icon_work_towerrenwu.png')}/>
                    <OtherItem text={'易快报销'} icon={require('../../../assets/img/icon_work_yikuaibaoxiao.png')}/>
                    <OtherItem text={'微社区'} icon={require('../../../assets/img/icon_work_weishequ.png')}/>
                    <OtherItem text={'轻松小秘'} icon={require('../../../assets/img/icon_work_qingsongxiaomi.png')}/>
                </View>
                <View style={[styles.otherRow, styles.borderBottom]}>
                    <OtherItem text={'考勤打卡'} icon={require('../../../assets/img/icon_work_kaoqindaka.png')}/>
                    <OtherItem text={'全部'} icon={require('../../../assets/img/icon_work_quanbu.png')}/>
                    <OtherItem text={'...'} icon={require('../../../assets/img/icon_work_towerrenwu.png')}/>
                    <OtherItem text={'...'} icon={require('../../../assets/img/icon_work_towerrenwu.png')}/>
                </View>
            </View>
        );
    }
}