import service from '../../services/service';
export const GET_FILMS = '[TEST APP] GET FILMS';
export const GET_FILM_SELECTED = '[TEST APP] GET FILM SELECTED';
export const CLEAR_FILMS = '[TEST APP] CLEAR FILMS';

export function getList(params)
{
    const request = service.getList(params);
    return (dispatch) => {
        request.then((response) => {
            if (response.data.Response == 'True') {
                dispatch({
                    type   : GET_FILMS,
                    payload: response.data.Search
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
