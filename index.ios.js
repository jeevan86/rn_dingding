/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {AppRegistry} from 'react-native';
import BottomNaviPage from './src/pages/main/navi';

export default class index extends Component {
    render() {
        return (
            <BottomNaviPage />
        );
    }
}

AppRegistry.registerComponent('rn_dingding', () => index);
