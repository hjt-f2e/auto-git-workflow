# git自动化工作流

## 功能

1. 批量创建分支
2. 批量创建pullrequest

解决多项目批量创建分支的痛点

解决多项目批量创建pullrequest的痛点
## 使用

```
npm i pnpm -g
```

```
pnpm install
```

```
npm run start
```

## 配置

- 创建user文件，用于记录用户名密码

config/user.js

```js
module.exports = {
    username: '***',
    password: '***'
};
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
```

## 注意

- 暂未处理各种异常情况，如：登录出现验证码，各种操作失败等等情况。