'use strict'

import React, {Component} from 'react';

import {
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

var styles = StyleSheet.create({
    searchRow: {
        backgroundColor: '#eeeeee',
        paddingTop: 75,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    searchTextInput: {
        backgroundColor: '#cccccc',
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        height: 28,
        paddingLeft: 8,
    },
});

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.searchRow}>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    placeholder="Please input your name..."
                    style={styles.searchTextInput}
                />

                <View style={{
                    backgroundColor: '#1DBAF1',
                    margin: 14,
                    borderRadius: 6,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 17,
                            color: '#FFFFFF',
                            marginTop: 10,
                            marginBottom: 10
                        }}>{"   登  录   "}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

module.exports = SearchBar;