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

   const { data }: AxiosResponse = await axios(config);

   return data;
};

const post = async (
   url: string,
   headers: object = {
      'Content-Type': 'application/json'
   },
   body: object = {}
) => {
   const config: AxiosRequestConfig = {
      method: 'post',
      url: url,
      data: body,
      headers: headers
   };

   const { data }: AxiosResponse = await axios(config);

   return { data };
};

const put = async (
   url: string,
   headers: object = {
      'Content-Type': 'application/json'
   },
   body: object = {}
) => {
   const config: AxiosRequestConfig = {
      method: 'put',
      url: url,
      data: body,
      headers: headers
   };

   const { data }: AxiosResponse = await axios(config);

   return { data };
};

const patch = async (
   url: string,
   headers: object = {
      'Content-Type': 'application/json'
   },
   body: object = {}
) => {
   const config: AxiosRequestConfig = {
      method: 'patch',

      url: url,
      data: body,
      headers: headers
   };
   let responseData = null;
   let error = null;

   const { data }: AxiosResponse = await axios(config);

   return { data };
};

const del = async (
   url: string,
   headers: object = {
      'Content-Type': 'application/json'
   },
   body: object = {}
) => {
   const config: AxiosRequestConfig = {
      method: 'delete',
      url: url,
      headers: headers
   };

   const { data }: AxiosResponse = await axios(config);

   return { data };
};

export default { get, post, put, patch, del };
