'use strict'

//action
const DING_RETRIEVE_UNCONFIRMED = 'DING_RETRIEVE_UNCONFIRMED';
let newDingRetrieveUnconfirmedAction = function (count) {
    let action = {
        type: DING_RETRIEVE_UNCONFIRMED,
        payload: {
            dingUnconfirmed: count
        }
    };
    return action;
}

//reducer
let dingReducer = function (state, action) {
    switch (action.type) {
        case DING_RETRIEVE_UNCONFIRMED:
            return {dingUnconfirmed: action.payload.dingUnconfirmed} //TODO: must be new Object, immutable.
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