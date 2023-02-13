import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const get = async (
  url: string,
  headers: object = {
    'Content-Type': 'application/json'
  }
) => {
  const config: AxiosRequestConfig = {
    url: url,
    headers: headers
  };
  let data = null;
  let error = null;

  const response: AxiosResponse = await axios(config);

  return { data, error };
};

const post = async (
  url: string,
  data: object = {},
  headers: object = {
    'Content-Type': 'application/json'
  }
) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: url,
    data: data,
    headers: headers
  };
  let responseData = null;
  let error = null;

  const response: AxiosResponse = await axios(config);

  return { data: responseData, error };
};

const put = async (
  url: string,
  data: object = {},
  headers: object = {
    'Content-Type': 'application/json'
  }
) => {
  const config: AxiosRequestConfig = {
    method: 'put',

    url: url,
    data: data,
    headers: headers
  };
  let responseData = null;
  let error = null;

  const response: AxiosResponse = await axios(config);

  return { data: responseData, error };
};

const patch = async (
  url: string,
  data: object = {},
  headers: object = {
    'Content-Type': 'application/json'
  }
) => {
  const config: AxiosRequestConfig = {
    method: 'patch',

    url: url,
    data: data,
    headers: headers
  };
  let responseData = null;
  let error = null;

  const response: AxiosResponse = await axios(config);

  return { data: responseData, error };
};

const del = async (
  url: string,
  headers: object = {
    'Content-Type': 'application/json'
  }
) => {
  const config: AxiosRequestConfig = {
    method: 'delete',
    url: url,
    headers: headers
  };
  let responseData = null;
  let error = null;

  const response: AxiosResponse = await axios(config);

  return { data: responseData, error };
};

export default { get, post, put, patch, del };
