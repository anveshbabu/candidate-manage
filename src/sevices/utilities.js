import axios from 'axios';


export const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      // 'content-type': `application/json`,
      // 'x-hasura-admin-secret'      : `kR#82Bg3Ux`
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
    }
  });