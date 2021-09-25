import service from '../../services/service';
export const GET_FILMS = '[TEST APP] GET FILMS';
export const GET_FILM_SELECTED = '[TEST APP] GET FILM SELECTED';
export const CLEAR_FILMS = '[TEST APP] CLEAR FILMS';
export const SET_PARAMS = '[TEST APP] SET PARAMS';

export function getList(params)
{
    const request = service.getList(params);
    return (dispatch) => {
        dispatch({
            type   : SET_PARAMS,
            payload: params
        });
        request.then((response) => {
            if (response.data.Response == 'True') {
                dispatch({
                    type   : GET_FILMS,
                    payload: response.data.Search,
                    set_first: (params.page === 1) ? true : false
                });
            } else {
                dispatch({
                    type   : CLEAR_FILMS
                });
            }
        }); 
    }
}

export function getSelected(item) {
    return (dispatch) => 
        dispatch({
            type   : GET_FILM_SELECTED,
            payload: item
        });
}
