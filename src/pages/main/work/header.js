'use strict'

import React, {Component} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

import Carousel from 'react-native-carousel'; //图片轮播

let styles = StyleSheet.create({
    headerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

class HeaderItem extends Component {
    render() {
        let style = this.props.style;
        let pictWidth = 400;
        let pictHeight = style.height || 150;
        return (
            <View style={[styles.headerItem, this.props.style]}>
                <Image source={this.props.image} style={{width: pictWidth, height: pictHeight}}/>
            </View>
        );
    }
}

class Header extends Component {
    render() {
        let style = this.props.style;
        let headerHeight = style.height;
        return (
            <View style={this.props.style}>
                <Carousel hideIndicators={false}
                          delay={1500}
                          indicatorSize={20}
                          indicatorSpace={20}
                          indicatorAtBottom={false}
                          width={400}
                          height={headerHeight}
                          indicatorOffset={120}>
                    <HeaderItem image={require('../../../../assets/img/pict_work_01.jpg')} style={{height: headerHeight}}/>
                    <HeaderItem image={require('../../../../assets/img/pict_work_01.jpg')} style={{height: headerHeight}}/>
                </Carousel>
            </View>
        );
    }
}

module.exports = Header;