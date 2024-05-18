# zero-code

## 记录用 Vue3 从 0 开始实现一个零代码轻应用平台

## 同时对 vite4 构建进行二次理解

```
pnpm install
pnpm run dev
pnpm build

```

1.  依赖库
    - 零代码 组件库支持 Vant
    - 拖拽动作支持 sortable.js
    - 页面平台 UI 库 Element Plus
    - 脚本工具 "husky": "^8.0.3",
    - 提交规范 commitlint
      - 需要配置 commitlint.config 文件,可自定义规则
      - "@commitlint/cli": "^18.4.3",
      - "@commitlint/config-conventional": "^18.4.3",
