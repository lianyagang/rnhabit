import  {LOGIN} from '../type';
import {createReducer} from '../'
/**
 * Desc:登录
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
const initialState = {
    type: LOGIN.CLEAR,
};

const actionHandler = {
    [LOGIN.IN]: (state, action) => {
        return {}
    },
    [LOGIN.CLEAR]: (state, action) => {
        return {}
    }
};

export default createReducer(initialState, actionHandler)
