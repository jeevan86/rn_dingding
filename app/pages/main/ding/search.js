'use strict'

import React, {Component} from 'react';

import {
    Image,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Text,
    View,
    TouchableOpacity,
    RefreshControl,
    Alert,
    TextInput
} from 'react-native';

export default class DingSearchPage extends Component {

    title = {

    };

    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 50
        }
    }

    render() {
        let btnTouchArea = {
            width: 40,
            height: 24,
            alignSelf: 'center',
            backgroundColor: '#FFF',
            borderRadius: 8,
            justifyContent: 'center'
        };
        let btnText = {
            alignSelf: 'center',
            color: 'blue',
            fontSize: 14,
            fontWeight: 'bold'
        };
        return (
            <View>
                <View style={{
                    top: this.state.headerHeight,

                    backgroundColor: '#555',
                    width: 256,
                    height: 26,
                    borderRadius: 8,
                    opacity: .5,

                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: 4
                }}>
                    <Image source={require('../../../assets/img/search_50x50.png')}
                           style={{width: 10, height: 10}}/>
                    <View style={{width: 4}}/>
                    <TextInput style={{height: 24, width: 232, fontSize: 14}}
                               placeholderTextColor={'#555'} placeholder={'搜索ding消息'}/>
                    <View style={{width: 4}}/>
                    <TouchableOpacity style={btnTouchArea} onPress={() => {
                        if (this.props.onPress) {
                            this.props.onPress();
                        } else {
                            Alert.alert('点击了取消');
                        }
                    }}>
                        <Text style={btnText}>{'取消'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
