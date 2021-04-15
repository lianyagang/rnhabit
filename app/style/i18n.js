
import {NativeModules} from 'react-native';
import I18n from 'react-native-i18n'
/**
 * Desc:多语言配置
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
const {RNI18n} = NativeModules;

I18n.fallbacks = true;

I18n.defaultLocale = "zh-CN";


I18n.translations = {
    'en': {
        appName: 'GSYGitHubApp',
        netError: 'network error',
        netTimeout: 'network timeout',
        ok: 'ok',
        cancel: 'cancel',
        tabRecommended: 'Recommend',
        tabDynamic: 'Dynamic',
        tabMy: 'My',
        setting: 'setting',
        daysAgo: 'days ago',
        hoursAgo: 'hours ago',
        minutesAgo: 'minutes ago',
        justNow: 'justNow',
        UserName: 'UserName',
        Password: 'Password',
        Login: 'Login',
        LoginOut: 'LoginOut',
        LoginNameTip: 'username can\'t not be empty',
        LoginPWTip: 'password can\'t not be empty',
        LoginFailTip: 'login fail',
        refreshing: 'refreshing...',
        loading: 'loading...',
        loadMoreing: 'loading...',
        loadMoreEnd: 'no more',
        doublePressExit: 'Press again to Exit',
        userInfoNoting: 'nothing',
        staredText: 'stared',
        beStaredText: 'honour',
        FollowersText: 'follower',
        FollowedText: 'followed',
        repositoryText: 'repository',
        personDynamic: 'Activity',
        Member: 'Member',
        trendDay: 'Day',
        trendWeek: 'Week',
        trendMonth: 'Month',
        trendAll: 'All',
        search: 'search',
        best_match: 'Best match',
        stars: 'stars',
        forks: 'forks',
        updated: 'updated',
        filerType: 'Type',
        filterSort: 'Sort',
        filterLanguage: 'Language',
        desc: 'Desc',
        asc: 'Asc',
        Java: 'Java',
        Kotlin: 'Kotlin',
        Objective_C: 'Objective-C',
        Swift: 'Swift',
        JavaScript: 'JavaScript',
        PHP: 'PHP',
        Go: 'Go',
        C__: 'C++',
        C: 'C',
        HTML: 'HTML',
        CSS: 'CSS',
        unknown: 'unknown',
        created_at: "Created at",
        forked_at: "Forked from",
        latest_update: "Latest update",
        latest_commit: "Latest commit",
        reposActivity: "Info",
        reposPush: "Push",
        reposReadme: "Readme",
        reposFile: "Files",
        reposIssue: "Issues",
        issueInfo: "Info",
        issueComment: "Reply",
        issueCommentDelete: "Delete",
        issueCommentEdit: "Edit",
        issueEdit: "Edit",
        createIssue: "Create",
        issueClose: "Close",
        issueOpen: "Open",
        issueLocked: "Locked",
        issueUnlock: "Unlock",
        issueInputTitleTip: "enjoy yourself",
        issueInputTip: "enjoy yourself",
        closeIssue: "Close？",
        openIssue: "Open？",
        closeIssueTip: "Close？",
        openIssueTip: "Open？",
        lockIssueTip: "Locked？",
        unLockIssueTip: "UnLock？",
        commentsIssue: "Comment",
        editIssue: "Edit Issue",
        copyComment: "Copy",
        reposStar: "Star",
        reposUnStar: "UnStar",
        reposWatcher: "Watcher",
        reposUnWatcher: "UnWatcher",
        reposRelease: "Release",
        reposFork: "Fork",
        reposForked: "you had Forked",
        reposForkedTip: "Fxxx Sure?",
        reposTag: "Tag",
        notifyUnread: "UnRead",
        notifyParticipating: "Part",
        notifyAll: 'All',
        notifyType: 'Type:%{option1}，State:%{option2}',
        unread: 'unread',
        readed: 'readed',
        notify: 'notify',
        fileNotSupport: 'Not Support',
        searchRepos: "Repository",
        searchUser: "User",
        issueAllText: "All",
        issueOpenText: "Open",
        issueCloseText: "Close",
        issueYoursText: "Yours",
        hadCopy: "Copy Link",
        copyClone: "Copy Clone Link",
        filterCreated: "created",
        filterUpdated: "updated",
        filterPushed: "pushed",
        filterFullName: "name",
        forkSuccess: "Fxxx Success",
        forkFail: "Fxxx Fail",
        listEmpty: 'Empty(oﾟ▽ﾟ)o ',
        browserOpen: 'Browser Open',
        copy: 'Copy Link',
        download: 'DownLoad',
        iosNotSupportDown: 'IOS Not Support Down',
        downloadDescription: 'Downloading：',
        userCreate: 'Created At：',
        history: 'history',
        about: 'about',
        version: 'Version',
        author: 'Author',
        projectUrl: 'Project',
        feedback: 'Feedback',
        person: 'User Info',
        infoName: 'Name',
        infoEmail: 'Email',
        infoBlog: 'Blog',
        infoCompany: 'Company',
        infoLocation: 'Location',
        infoBio: 'Bio',
        unFollowed: 'unFollow',
        doFollowed: 'Follow',
        register: 'Register',
        notFound: 'Request Not Found',
        errorUnKnow: 'UnKnow',
        noPower: 'No authority',
        share: 'Share',
        newestVersion: 'newest',
        beStared100Title: ' Top 100 repository',
        update: 'Update',
        weekClosed: 'Week Closed: ',
        weekOpened: 'Week Opened： ',
        thisWeek: 'This Week ',
        userOrg: 'Org',
        reloadClick: 'Reload',
        language: 'Language',
        systemLanguage: 'System',
        zhLanguage: 'Chinese',
        enLanguage: 'English',
        gone410: '410 Gone',
        clearCache: 'clearCache',
    },
    'zh-CN': {
        appName: 'GSYGitHubApp',
        netError: '网络错误',
        netTimeout: '网络超时',
        ok: '确定',
        cancel: '取消',
        tabRecommended: '推荐',
        tabDynamic: '动态',
        tabMy: '我的',
        setting: '设置',
        daysAgo: '天前',
        hoursAgo: '小时前',
        minutesAgo: '分钟前',
        justNow: '刚刚',
        UserName: '用户名',
        Password: '密码',
        Login: '登陆',
        LoginOut: '退出登陆',
        LoginNameTip: '用户名不能为空',
        LoginPWTip: '密码不能为空',
        LoginFailTip: '登陆失败',
        refreshing: '刷新中...',
        loadMoreing: '正在加载更多···',
        loadMoreEnd: '加载完了哟',
        loading: '加载中...',
        doublePressExit: '双击退出',
        userInfoNoting: 'Ta什么都没留下',
        staredText: '星标',
        beStaredText: '荣耀',
        FollowersText: '粉丝',
        FollowedText: '关注',
        repositoryText: '仓库',
        personDynamic: '个人动态',
        Member: '组织成员',
        trendDay: '今日',
        trendWeek: '本周',
        trendMonth: '本月',
        trendAll: '全部',
        search: '搜索',
        best_match: '最匹配',
        stars: 'star',
        forks: 'forks',
        updated: '更新',
        desc: '倒叙',
        asc: '正序',
        filerType: '类型',
        filterSort: '排序',
        filterLanguage: '语言',
        Java: 'Java',
        Kotlin: 'Kotlin',
        Objective_C: 'Objective-C',
        Swift: 'Swift',
        JavaScript: 'JavaScript',
        PHP: 'PHP',
        Go: 'Go',
        C__: 'C++',
        C: 'C',
        HTML: 'HTML',
        CSS: 'CSS',
        unknown: 'unknown',
        created_at: "创建于",
        forked_at: "Forked from",
        latest_update: "最后更新",
        latest_commit: "最后提交",
        reposActivity: "动态",
        reposPush: "提交",
        reposReadme: "详情信息",
        reposFile: "文件",
        reposIssue: "Issues",
        issueInfo: "说明",
        issueComment: "回复",
        issueCommentDelete: "刪除",
        issueCommentEdit: "编辑",
        issueEdit: "编辑",
        issueClose: "关闭",
        issueOpen: "打开",
        issueLocked: "锁定",
        issueUnlock: "解锁",
        issueInputTip: "请输入答复哟",
        issueInputTipTitle: "请输入标题",
        closeIssue: "关闭？",
        openIssue: "打开？",
        closeIssueTip: "你确定要关闭这个Issue吗？",
        openIssueTip: "你确定要打开这个Issue吗？",
        lockIssueTip: "你确定要锁定这个Issue吗？",
        unLockIssueTip: "你确定要解锁这个Issue吗？",
        commentsIssue: "提交回复",
        editIssue: "编辑",
        copyComment: "复制",
        createIssue: "创建",
        reposStar: "Star",
        reposUnStar: "UnStar",
        reposWatcher: "Watcher",
        reposUnWatcher: "UnWatcher",
        reposRelease: "版本",
        reposFork: "Fork",
        reposForked: "你已经Fxxx过了(⊙o⊙)",
        reposForkedTip: "你确定要Fxxx Ta吗?",
        reposTag: "标记",
        notifyUnread: "未读",
        notifyParticipating: "参与",
        notifyAll: '所有',
        notifyType: '类型：%{option1}，状态：%{option2}',
        unread: '未读',
        readed: '已读',
        notify: '通知',
        fileNotSupport: '预览文件失败，可能文件类型不支持预览。',
        searchRepos: "仓库",
        searchUser: "用户",
        issueAllText: "全部",
        issueOpenText: "打开",
        issueCloseText: "关闭",
        issueYoursText: "我的",
        hadCopy: "已经复制到粘贴板",
        copyClone: "复制克隆链接",
        filterCreated: "创建",
        filterUpdated: "更新",
        filterPushed: "提交",
        filterFullName: "名称",
        forkSuccess: "Fxxx 成功了喔",
        forkFail: "Fxxx 没能成功呢",
        listEmpty: '暂时还没找到什么(oﾟ▽ﾟ)o ',
        browserOpen: '浏览器打开',
        copy: '复制链接',
        download: '下载',
        iosNotSupportDown: 'IOS不支持下载',
        downloadDescription: '正在下载：',
        userCreate: '创建于：',
        history: '历史',
        about: '关于',
        version: '版本',
        author: '作者',
        projectUrl: '项目地址',
        feedback: '反馈',
        person: '个人信息',
        infoName: '名字',
        infoEmail: '邮箱',
        infoBlog: '链接',
        infoCompany: '公司',
        infoLocation: '位置',
        infoBio: '简介',
        unFollowed: '取消关注',
        doFollowed: '关注',
        register: 'Github注册',
        notFound: '请求找不到地址啦·~',
        errorUnKnow: '就是不知道是什么错误···',
        noPower: '为啥你没有权限呢？',
        share: '分享',
        newestVersion: '当前是最新版本',
        beStared100Title: ' 最受欢迎前100仓库',
        update: '更新',
        weekClosed: '本周关闭: ',
        weekOpened: '本周打开: ',
        thisWeek: ' 本周动态 ',
        userOrg: '组织',
        reloadClick: '点击重新加载',
        language: '语言',
        systemLanguage: '系统',
        zhLanguage: '中文',
        enLanguage: '英文',
        gone410: '410 Gone，不存在吧？',
        clearCache: '清除缓存',
    }
};

export const changeLocale = function (multilingual) {
    if (multilingual === 'local' || !multilingual) {
        if (__DEV__) {
            if (RNI18n !== undefined && typeof RNI18n !== 'undefined') {
                console.log("language system", RNI18n.languages[0])
            }
        }
        I18n.locale = (RNI18n !== undefined && typeof RNI18n !== 'undefined') ? RNI18n.languages[0].replace(/_/, '-') : ''
    } else {
        I18n.locale = multilingual
    }
    // for ios
    if (I18n.locale.indexOf('zh-Hans') !== -1) {
        I18n.locale = 'zh-CN'
    } else if (I18n.locale.indexOf('zh-Hant') !== -1 || I18n.locale === 'zh-HK' || I18n.locale === 'zh-MO') {
        I18n.locale = 'zh-CN'
    }


};

export default function (name, option1, option2) {
    return I18n.t(name, option1, option2)
}
