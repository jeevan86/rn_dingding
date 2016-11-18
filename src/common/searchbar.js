'use strict'

import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            }
        }
    }

    render() {
        return (
            <View style={this.state.sectionSearch}>
                <TouchableOpacity onPress={() => {
                    Alert.alert('点击了搜索栏');
                }}>
                    <View style={this.state.contentStyle}>
                        <Image style={{width: 12, height: 12}}
                               source={require('../../assets/img/search_50x50.png')}/>
                        <Text style={{fontSize: 12}}>{"  " + this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
