'use strict'

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native'

let styles = StyleSheet.create({
    sectionSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#FFF'
    },
    contentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#ccc',
        width: 360,
        height: 24,
        borderRadius: 12,
        opacity: .5
    },
    imageStyle: {width: 12, height: 12},
    textStyle: {fontSize: 12}
});

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.sectionSearch}>
                <TouchableOpacity onPress={() => {
                    if (this.props.onPress) {
                        this.props.onPress();
                    } else {
                        Alert.alert('点击了搜索栏');
                    }
                }}>
                    <View style={styles.contentStyle}>
                        <Image style={styles.imageStyle}
                               source={require('../../assets/img/search_50x50.png')}/>
                        <Text style={styles.textStyle}>{"  " + this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
