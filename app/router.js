/**
 * Created by guoshuyu on 2017/11/7.
 */
import React from 'react';
import {Lightbox, Router, Scene} from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import PhotoPage from './components/PhotoPage';
import TextInputModal from './components/common/CommonTextInputModal';
import CommentConfirmModal from './components/common/CommonConfirmModal';
import LoadingModal from './components/common/LoadingModal';
import CommonOptionModal from './components/common/CommonOptionModal';
import styles from './style';
import BackUtils from './utils/backUtils';

/**
 * Desc:全局路由
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
const getRouter = () => {
    return (
        <Router
            getSceneStyle={() => {
                return styles.routerStyle
            }}
            backAndroidHandler={
                BackUtils()}>
            <Lightbox>
                <Scene key="main">
                    <Scene key="LoginPage" component={LoginPage} hideNavBar hideTabBar hide/>
                </Scene>

                <Scene key="LoadingModal" component={LoadingModal}/>
                <Scene key="TextInputModal" component={TextInputModal}/>
                <Scene key="ConfirmModal" component={CommentConfirmModal}/>
                <Scene key="OptionModal" component={CommonOptionModal}/>
                <Scene key="PhotoPage" component={PhotoPage}/>
            </Lightbox>
        </Router>
    )
};


export default getRouter;
