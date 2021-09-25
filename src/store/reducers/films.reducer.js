import * as Actions from '../actions';

const initialState = {
    datas: [],
    selected: {}
};

const filmReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_FILMS:
        {
            return {
                ...state,
                datas: [...state.datas, ...action.payload]
            };
        }
        case Actions.GET_FILM_SELECTED:
        {
            return {
                ...state,
                selected: action.payload
            };
        }
        case Actions.CLEAR_FILMS:
        {
            return {
                ...state,
                datas: []
            };
        }
        default:
        {
            return state;
        }
    }
};

export default filmReducer;
