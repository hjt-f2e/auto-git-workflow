# 自用git自动化工作流

## 功能

1. 批量创建分支
2. 批量创建pr

## 配置

- 创建user文件，用于记录用户名密码

config/user.js

```js
const config = {
    username: '',
    password: ''
};

module.exports = config;
```

- 修改配置

config/index.js

```js
{
    // 要操作的项目
    projectArr: [
        projectMap.xuanwu,
        projectMap['url-admin-ui'],
    ],
    // 是否创建分支
    isCreateBranch: true,
    // 创建的分支名
    branchName: 'release-v11.26.0',
    // 是否自动提pr的参数
    isBuildPR: false,
    // 自动提pr的版本号，develop-v* -> release-v*
    version: '11.26.0',
}
```