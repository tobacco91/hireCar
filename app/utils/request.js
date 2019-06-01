import axios from 'axios';
import _ from 'lodash';
import {
  Alert,
} from 'react-native';

axios.defaults.baseURL = 'http://9khgne.natappfree.cc/';

const handleReponse = (response) => {
  const res = response.data;
  // 二进制文件
  if (!_.get(res, 'code')) return res;
  if (parseInt(res.code) === 200 || parseInt(res.code) === 201) {
    return res;
  }
  const msg = res.msg || '';
  Alert.alert('提示', msg);
  return Promise.reject(new Error(msg));
};

const handleError = (error) => {
  const response = error.response || { status: 200 };
  if (response.status === 401) {
    Alert.alert('提示', '登录校验失败, 请刷新页面');
  } else if (response.status !== 200) {
    Alert.alert('提示', `网络错误HTTP code:${response.status}`);
  }
  return Promise.reject(error);
};

export const post = (url, data) => axios.post(url, data).then(handleReponse, handleError);
export const get = (url, params) => axios.get(url, { params }).then(handleReponse, handleError);
export const patch = (url, data) => axios.patch(url, data).then(handleReponse, handleError);
export const del = (url, params) => axios.delete(url, { params }).then(handleReponse, handleError);
export default axios;
