import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
// import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {getToken} from './token';
import {BaseQueryFn} from '@reduxjs/toolkit/query';

const BASE_URL = 'http://localhost:3000/';
const API_TIMEOUT = 5000;


const createAPI = (): BaseQueryFn => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: API_TIMEOUT,
    });

    api.interceptors.response.use(
        (response: AxiosResponse) => ({data: response.data}),
        (err: AxiosError) => ({error: {status: err.response?.status, data: err.response?.data}}),
    );

    // api.interceptors.request.use(
    //     (config: AxiosRequestConfig) => {
    //         const token = getToken();
    //         if (token && config.headers) {
    //             config.headers['x-token'] = token;
    //
    //         }
    //         // if (config.url && config.url.indexOf('undefined') !== -1) {
    //         //     return Promise.reject('Canceling nearby nearby offers fetching on manin page');
    //         // }
    //         return config;
    //     },
    // );

    return api;
};

export default createAPI;
