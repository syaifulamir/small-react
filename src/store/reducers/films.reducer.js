import * as Actions from '../actions';

const initialState = {
    params: {
        apikey: 'faf7e5bb',
        s: '',
        page: 1
    },
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
        case Actions.SET_PARAMS:
        {
            return {
                ...state,
                params: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default filmReducer;
