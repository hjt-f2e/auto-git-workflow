# gitee自动化工作流

## 功能

1. 多项目批量创建分支
2. 多项目批量创建pullrequest

解决多项目批量创建分支的痛点

解决多项目批量创建pullrequest的繁琐操作问题
## 使用

### npm

```
npm install
```

```
npm run start
```

### pnpm

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
// gitee的登录账号密码
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
    branchName: 'develop-v11.26.0',
    // 是否自动创建 develop -> release 的 pullrequest
    isBuildPRtoRelease: false,
    // 是否自动创建release -> master 的 pullrequest
    isBuildPRtoMaster: false,
    // 自动创建pullrequest的版本号，develop-v -> release-v，release-v -> master
    version: '11.26.0',
}
```

## 注意

- 暂未处理各种异常情况，如：登录出现验证码，各种操作失败等等情况。