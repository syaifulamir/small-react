import * as serviceUrl from '../baseService';

class service {

    /**
     * getList
     * 
     * @param {object} params 
     */
     getList = (params) => {
        return serviceUrl.service.get('/', { params: params })
            .then(response => response)
            .catch(error => error.response);
    };
}

const instance = new service();

export default instance;
