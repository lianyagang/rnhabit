import React, {Component} from 'react';
import {
    BackHandler
} from 'react-native';

import I18n from '../style/i18n'
import Toast from '../components/common/ToastProxy'

import {Router, Actions, Scene} from 'react-native-router-flux';
/**
 * Desc:返回工具类
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
export default function BackUtils() {
    let hasTip = false;
    let ts;
    return function () {
        if (Actions.state.routes[0].index > 0) {
            Actions.pop();
            return true;
        }
        ts = Date.now();
        if (!hasTip) {
            let handler = function () {
                let now = Date.now();
                if (now - ts < 1000) {
                    requestAnimationFrame(handler)
                } else {
                    hasTip = false
                }
            };
            handler();
            hasTip = true;
            Toast(I18n("doublePressExit"));
            return true
        } else {
            BackHandler.exitApp();
            //SplashScreen.exit();
            return true
        }
    }
}
