'use strict'

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {navigator, nextRoute} = this.props;
        setTimeout(() => {
            navigator.replace(nextRoute);
        }, 1500);
    }

    render() {
        return <Image source={require('../../../assets/img/splash.png') }
                      style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: null,
                          height: null,
                          resizeMode: 'cover'
                      }}/>;
    }
}
