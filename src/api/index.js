import axios from 'axios';

const BASE_LINK = 'http://157.230.11.211';

const post = async (endpoint, data = {}) => {
    try {
        const response = await axios.post(`${BASE_LINK}${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
const update = async (endpoint, data) => {
    try {
    } catch (error) {}
};
const get = async (endpoint, params) => {
    try {
        const response = () => {};
    } catch (error) {
        console.log(error);
    }
};

export { post, get };
