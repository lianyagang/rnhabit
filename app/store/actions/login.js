/**
 * Desc:登录Action
 *
 *
 * Date: 2020/7/5 0005
 * Copyright: Copyright (c) 2010-2020
 * Company: @微微科技有限公司
 * Updater:
 * Update Time:
 * Update Comments:
 *
 * @Author: lianyagang
 */
import Api from '../../net';
import Address from '../../net/address';
import {LOGIN} from '../type';
import userAction from './user';
import * as Constant from '../../style/constant';
import {Buffer} from 'buffer';
import {clear} from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';

const toLogin = () => async (dispatch, getState) => {

};

/**
 * 登陆请求
 */
const doLogin = (userName, password, callback) => async (dispatch, getState) => {
    let base64Str = Buffer(userName + ':' + password).toString('base64');
    AsyncStorage.setItem(Constant.USER_NAME_KEY, userName);
    AsyncStorage.setItem(Constant.USER_BASIC_CODE, base64Str);
    let requestParams = {
        scopes: ['user', 'repo', 'gist', 'notifications'],
        note: 'admin_script',
        client_id: 'CLIENT_ID',
        client_secret: 'CLIENT_SECRET',
    };
    Api.clearAuthorization();
    let res = await Api.netFetch(Address.getAuthorization(), 'POST', requestParams, true);
    if (res && res.result) {
        AsyncStorage.setItem(Constant.PW_KEY, password);
        let current = await userAction.getUserInfo();
        dispatch({
            type: LOGIN.IN,
            res,
        });
    }
    setTimeout(() => {
        callback && callback(res.result);
    }, 1000);
};

/**
 * 退出登录
 */
const loginOut = () => async (dispatch, getState) => {
    Api.clearAuthorization();
    AsyncStorage.removeItem(Constant.USER_BASIC_CODE);
    userAction.clearUserInfo();
    clear(getState);
    dispatch({
        type: LOGIN.CLEAR,
    });
};

/**
 * 获取当前登录用户的参数
 */
const getLoginParams = async () => {
    let userName = await AsyncStorage.getItem(Constant.USER_NAME_KEY);
    let password = await AsyncStorage.getItem(Constant.PW_KEY);
    return {
        userName: (userName) ? userName : '',
        password: (password) ? password : '',
    };
};

export default {
    toLogin,
    doLogin,
    getLoginParams,
    loginOut,

};
