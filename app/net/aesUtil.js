import aes from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import md5 from 'crypto-js/md5';
import isEmpty from 'lodash/isEmpty';

/**
 * Desc:加解密工具
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

const apiKey = 'VVuucskey201906';
const secret = 'VVuucs_sec201906';
const getDecrypt = (params) =>
    JSON.parse(
        aes
            .decrypt(params, CryptoJS.enc.Utf8.parse(secret), {
                iv: CryptoJS.enc.Utf8.parse(secret),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            })
            .toString(CryptoJS.enc.Utf8)
    );

export const utils = {
    getSign: (timeStamp, params) =>
        md5(`${timeStamp}${apiKey}${params}`).toString().toUpperCase(),
    encrypt: (data) =>
        aes
            .encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(secret), {
                iv: CryptoJS.enc.Utf8.parse(secret),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            })
            .toString(),
    decrypt: (params, secrets, encryption = true) => {
        // encryption === false 不去解密响应报文
        if (typeof params !== 'string' || encryption === false) {
            return params;
        }
        try {
            return params && !isEmpty(params) ? getDecrypt(params, secrets) : params;
        } catch (e) {
            console.error(e);
            return params;
        }
    },
};

