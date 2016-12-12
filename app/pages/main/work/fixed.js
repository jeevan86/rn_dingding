'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

let styles = StyleSheet.create({
    fixedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: .6
    },
    fixedItem: {
        flex: 1,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
});

class FixedIconItem extends Component {
    render() {
        return (
            <View style={styles.fixedItem}>
                <View style={{
                    width: 36,
                    height: 36,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: '#777'
                }}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            Alert.alert('test');
                        }}>
                        <Image source={this.props.icon} style={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    alignSelf: 'center',
                    fontWeight: 'bold'
                }}>{this.props.text}</Text>
            </View>
        );
    }
}

class FixedNumItem extends Component {
    render() {
        return (
            <View style={styles.fixedItem}>
                <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {
                        Alert.alert('test');
                    }}>
                    <View style={{
                        width: 36,
                        height: 36,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: '#777'
                    }}>
                        <Text style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: this.props.value > 0 ? 'red' : '#000'
                        }} adjustsFontSizeToFit={true}>{this.props.value}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    alignSelf: 'center',
                    fontWeight: 'bold'
                }}>{this.props.text}</Text>
            </View>
        );
    }
}

export default class Fixed extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.fixedContainer]}>
                <FixedNumItem text={'待我审批'} value={0}/>
                <FixedNumItem text={'出勤天数'} value={0}/>
                <FixedIconItem text={'请假'} icon={require('../../../assets/img/icon_work_qingjia.png')}/>
                <FixedIconItem text={'日报'} icon={require('../../../assets/img/icon_work_ribao.png')}/>
            </View>
        );
    }
}
