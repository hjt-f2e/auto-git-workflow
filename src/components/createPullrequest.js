const { sleep } = require('../utils/tools');
const config = require('../../config/index');

async function createBranch(page, url, projectName, index, tipType) {
    const tipMap = {
        release: '上预发',
        master: '上线',
    };
    console.log(`正在pullrequest 项目${index}：${projectName}`);
    // await sleep();
    await page.goto(url);
    // 输入标题
    await page.type(
        'input#pull_request_title',
        `${config.version}${tipMap[tipType]}`
    );
    // 点击创建按钮
    await page.click('button[name=normal_commit]');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    console.log(
        `${projectName}：develop-v${config.version} -> release-v${config.version} 创建成功!`
    );
}

module.exports = createBranch;
