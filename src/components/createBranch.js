const { sleep } = require('../utils/tools');
const config = require('../../config/index');

async function createBranch(page, url, projectName, index) {
    console.log(`正在创建分支， 项目${index}：${projectName}`);
    // await sleep();
    await page.goto(url);
    // 点击新建分支
    await page.click('div.new-branch-btn');
    // 输入分支名
    await page.type('input#branch_name', config.branchName);
    // 点击创建分支
    await page.click('input.submit-create-branch');
    // 等待页面请求结束
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    console.log(`${projectName}：${config.branchName} 创建成功!`);
}

module.exports = createBranch;
