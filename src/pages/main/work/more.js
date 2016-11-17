import React, {Component} from 'react';

import {View, Navigator, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';

var styles = StyleSheet.create({
    moreContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    moreText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});

class More extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.moreContent]}>
                <TouchableOpacity
                    underlayColor='transparent'
                    onPress={() => {
                        Alert.alert('test')
                    }}>
                    <Text style={[styles.moreText, {paddingRight: 10}]}>{"  查看更多 ...  "}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = More