'use strict';

import React, {Component} from 'react';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

import RootPage from './pages';

import {DingActions, DingReducers} from './redux/ding';

//store
let store = createStore(DingReducers.dingReducer);

//connecting
let mapStateToProps = function (state) {
    return state ? {dingUnconfirmed: state.dingUnconfirmed} : {dingUnconfirmed: 0};
};
let mapDispatchToProps = function (dispatch) {
    return {
        onDingRefresh: function (newData) {
            dispatch(DingActions.newDingRetrieveUnconfirmedAction(newData.length));
        }
    };
};
let AppRoot = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootPage);

//using
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRoot />
            </Provider>
        );
    }
}
