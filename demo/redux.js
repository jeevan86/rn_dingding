import React, {Component} from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

var styles = {
    center: {
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    }
};

// React component
class InsideCounter extends Component {
    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <TouchableOpacity onPress={onIncreaseClick} style={[styles.center, {flex: 1}]}>
                <View style={{width: 20, height: 20}}>
                    <Text style={{fontSize: 20}}>{value}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class Counter extends Component {
    render() {
        const {
            value,
            onIncreaseClick
        } = this.props;
        return (
            <View style={[styles.center, {flex: 1}]}>
                <InsideCounter value={value} onIncreaseClick={onIncreaseClick}/>
            </View>
        );
    }
}

// Action
const increaseAction = {type: 'increase'};

// Reducer
var counter = function (state = {count: 0}, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return {count: count + 1}
        default:
            return state
    }
}

// Store
const store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

module.exports = ReduxDemo;
