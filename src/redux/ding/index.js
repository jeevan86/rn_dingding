'use strict'

//action
const DING_RETRIEVE_UNCONFIRMED = 'DING_RETRIEVE_UNCONFIRMED';
let newDingRetrieveUnconfirmedAction = function (count) {
    let action = {
        type: DING_RETRIEVE_UNCONFIRMED,
        payload: {
            ding_unconfirmed: count
        }
    };
    return action;
}

//reducer
let dingReducer = function (state, action) {
    switch (action.type) {
        case DING_RETRIEVE_UNCONFIRMED:
            return {ding_unconfirmed: action.payload.ding_unconfirmed} //TODO: must be new Object, immutable.
        default:
            return state;
    }
};

module.exports = {
    DingActions: {
        DING_RETRIEVE_UNCONFIRMED: DING_RETRIEVE_UNCONFIRMED,
        newDingRetrieveUnconfirmedAction: newDingRetrieveUnconfirmedAction
    },
    DingReducers: {
        dingReducer: dingReducer
    }
}