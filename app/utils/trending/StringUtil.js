
/**
 * Desc:
 * 字符串工具类
 * 项目地址:https://github.com/crazycodeboy/GitHubTrending
 * 博客地址:http://www.devio.org
 * Date: 2020/7/5 0005
 * Copyright: Copyright (c) 2010-2020
 * Company: @微微科技有限公司
 * Updater:
 * Update Time:
 * Update Comments:
 *
 * @Author: lianyagang
 */
export default class StringUtil {
    /*
    * 去掉字符串左右空格、换行
    */
    static trim(text) {
        if (typeof(text) == "string") {
            return text.replace(/^\s*|\s*$/g, "");
        }
        else {
            return text;
        }
    }
}
