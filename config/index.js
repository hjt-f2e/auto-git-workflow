const projectMap = require('./projectMap');

module.exports = {
    // 要操作的项目
    projectArr: [
        projectMap.xuanwu,
        projectMap['url-admin-ui'],
    ],
    // 是否创建分支
    isCreateBranch: false,
    // 创建的分支名
    branchName: 'develop-v11.26.0',
    // 是否自动创建 develop -> release 的 pullrequest
    isBuildPRtoRelease: false,
    // 是否自动创建release -> master 的 pullrequest
    isBuildPRtoMaster: false,
    // 自动创建pullrequest的版本号，develop-v -> release-v，release-v -> master
    version: '11.26.0',
}