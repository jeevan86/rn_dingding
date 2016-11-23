'use strict'

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native'

import SearchBar from '../../../common/searchbar';

let styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    },
    btnTouchArea: {
        width: 88,
        height: 32,
        alignSelf: 'center',
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        justifyContent: 'center'
    },
    btnText: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    dingMessageItem: {
        flexDirection: 'column',
        backgroundColor : '#FFEFD5',
        borderColor: '#ccc',
        borderWidth: 1,
        width: 360,
        borderRadius: 4,
        alignSelf: 'center'
    },
    dingMessageHeader: {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 30},
    dingMessageContent: {borderBottomWidth: 1, opacity: .6, borderColor: '#ccc'},
    dingMessageBottom: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
        height: 24
    }
});

export class SearchBarItem extends Component {
    render() {
        return <SearchBar style={styles.itemRow} text="搜索DING消息"/>;
    }
}

export class ConfirmButtonItem extends Component {
    render() {
        let opacity, width, height, count = this.props.count;
        if (count && count > 0) {
            width = 120, height = 40, opacity = 1;
        } else {
            width = 0, height = 0, opacity = 0, count = 0;
        }
        let style = [styles.itemRow, {alignSelf: 'center', width: width, height: height, opacity: opacity}];
        return (
            <View style={style}>
                <TouchableOpacity style={styles.btnTouchArea} onPress={() => {
                    Alert.alert('点击了' + count + '个未确认');
                }}>
                    <Text style={styles.btnText}>{count + '个未确认'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export class DingMessageItem extends Component {
    render() {
        let rowData = this.props.rowData;
        let rowID = this.props.rowID;
        let onPress = this.props.onPress;
        return (
            <View>
                <View style={[styles.itemRow, styles.dingMessageItem]}>
                    <View style={styles.dingMessageHeader}>
                        <View style={{flex: 2}}>
                            <Image source={rowData.icon}
                                   style={{width: 22, height: 22, borderRadius: 11}}/>
                        </View>
                        <Text style={{flex: 20, fontSize: 10}}>{rowData.created}</Text>
                        <View style={{flex: 1, alignSelf: 'flex-start'}}>
                            <Image source={require('../../../../assets/img/icon_ding_ding.png')}
                                   style={{width: 10, height: 10, borderRadius: 0, opacity: 1}}/>
                        </View>
                    </View>

                    <View style={[styles.dingMessageContent]}>
                        <Text style={{fontSize: 12}}>{'  ' + rowData.content + '\n'}</Text>
                    </View>

                    <View style={styles.dingMessageBottom}>
                        <TouchableOpacity onPress={() => {
                            onPress(rowID);
                        }}>
                            <Text style={{color: 'blue', fontSize: 12}}>{'点击确认收到'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 10}}/>
            </View>
        );
    }
}
