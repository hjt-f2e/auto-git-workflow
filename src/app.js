const puppeteer = require('puppeteer');
const doLogin = require('./components/doLogin');
const createBranch = require('./components/createBranch');
const createPullrequest = require('./components/createPullrequest');
const config = require('../config/index');

(async () => {
    const browser = await puppeteer.launch({
        headless: true, // 是否不显示浏览器
        defaultViewport: {
            width: 1366,
            height: 600,
        },
    });

    try {
        const page = await browser.newPage();
        await page.goto('https://gitee.com/login');

        // 输入账号密码
        await doLogin(page);

        const projectNameArr = config.projectArr;

        // const branchPageUrl = `https://gitee.com/huanjutang/projectName/branches`;

        // 开始创建分支
        if (config.isCreateBranch) {
            console.log('------- 开始创建分支 -------')
            for (let i = 0; i < projectNameArr.length; i++) {
                const projectName = projectNameArr[i]
                const url = `https://gitee.com/huanjutang/${projectName}/branches`
                await createBranch(page, url, projectName, i);
            }
        }

        // 开始pullrequest
        // https://gitee.com/huanjutang/xuanwu/pull/new/huanjutang:develop-v11.26.0...huanjutang:release-v11.26.0
        if (config.isBuildPRtoRelease) {
            console.log('------- pullrequest to release -------')
            for (let i = 0; i < projectNameArr.length; i++) {
                const projectName = projectNameArr[i]
                const url = `https://gitee.com/huanjutang/${projectName}/pull/new/huanjutang:develop-v${config.version}...huanjutang:release-v${config.version}`
                await createPullrequest(page, url, projectName, i, 'release');
            }
        }
        if (config.isBuildPRtoMaster) {
            console.log('------- pullrequest to master -------')
            for (let i = 0; i < projectNameArr.length; i++) {
                const projectName = projectNameArr[i]
                const url = `https://gitee.com/huanjutang/${projectName}/pull/new/huanjutang:release-v${config.version}...huanjutang:master`
                await createPullrequest(page, url, projectName, i, 'master');
            }
        }


        // 处理结束
        console.log('-----全部结束-----');

        browser.close();
    } catch (err) {
        console.log(err);
        browser.close();
    }
})();

process.on('uncaughtException', (err, origin) => {
    const errMsg = `uncaughtException 全局异常\n捕获的异常：${err}\n异常的来源：${origin}`;
    console.log(errMsg);
});

process.on('unhandledRejection', (err, origin) => {
    const errMsg = `unhandledRejection Promise未绑定异常\n捕获的异常：${err}\n异常的来源：${origin}`;
    console.log(errMsg)
});
