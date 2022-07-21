const { sleep } = require('../utils/tools');
const user = require('../../config/user');

async function doLogin(page) {
    console.log('正在输入账号密码...');
    await page.type('input#user_login', user.username);
    await page.type('input#user_password', user.password);
    await sleep();
    console.log('正在登陆...');
    const [_, waitInfo] = await Promise.all([
        // 点击提交
        page.click('input[type="submit"]'),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // 验证码情况处理
    console.log('登录成功!');
}

module.exports = doLogin;