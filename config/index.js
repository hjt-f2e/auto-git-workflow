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
    branchName: 'release-v11.26.0',
    // 是否自动pullrequest到release
    isBuildPRtoRelease: true,
    // 是否自动pullrequest到master
    isBuildPRtoMaster: false,
    // 自动提pr的版本号，develop-v -> release-v，release-v -> master
    version: '11.26.0',
}