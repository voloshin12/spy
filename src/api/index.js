import axios from 'axios';

const baseURL = 'http://157.230.11.211';

const service = axios.create({
    baseURL,
});

const post = async (endpoint, data = {}) => {
    try {
        const response = await service.request({
            method: 'post',
            data,
            url: endpoint,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
const update = async (endpoint, data) => {
    try {
        const response = await service.request({
            method: 'put',
            data,
            url: endpoint,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
const get = async (endpoint, params) => {
    try {
        const response = await service.request({
            method: 'get',
            url: endpoint,
            params,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { post, get, update };
