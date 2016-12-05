'use strict'

import React, {Component} from 'react';
import {View, Navigator} from 'react-native';
import SplashPage from './splash';
import MainPage from './main';

export default class RootPage extends Component {
    render() {
        let initialRoute = {
            name: 'SplashPage',
            index: 0,
            component: SplashPage,
            title: '',
            passProps: {nextRoute: MainPage.route}
        };
        return (
            <Navigator initialRoute={initialRoute}
                       configureScene={(route) => {
                           return Navigator.SceneConfigs.HorizontalSwipeJump;
                       }}
                       renderScene={(route, navigator) => {
                           let Component = route.component;
                           return (<Component {...this.props}
                                              {...route.passProps}
                                              navigator={navigator}
                                              onForward={() => {
                                                  var nextIndex = route.index + 1;
                                                  navigator.push({
                                                      name: 'Scene ' + nextIndex,
                                                      index: nextIndex,
                                                  });
                                              }}
                                              onBack={() => {
                                                  if (route.index > 0) {
                                                      navigator.pop();
                                                  }
                                              }}
                           />);
                       }}
                       navigationBar={
                           <Navigator.NavigationBar
                               style={{backgroundColor: '#e1e1e1', height: 0}}
                               routeMapper={{
                                   LeftButton(route, navigator, index, navState) {
                                       return <View/>;
                                   },
                                   RightButton(route, navigator, index, navState) {
                                       return <View/>;
                                   },
                                   Title(route, navigator, index, navState) {
                                       return <View/>;
                                   }
                               }}/>}
            />
        );
    }
}
