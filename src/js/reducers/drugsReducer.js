import { combineReducers } from 'redux';
import { RECEIVE_DRUGS, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/ActionTypes';

export const fetchDrugs = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_DRUGS:
        return action.drugs;
      default:
        return state;
    }
}

export default combineReducers({
    fetchDrugs,
});
