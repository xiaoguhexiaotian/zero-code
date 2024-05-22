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
    - 脚本工具 "husky": "^8.0.3"
    - 提交规范 commitlint
      - 需要配置 commitlint.config 文件,可自定义规则
      - "@commitlint/cli": "^18.4.3"
      - "@commitlint/config-conventional": "^18.4.3"
    - 组件自动引入
      - "unplugin-auto-import": "^0.17.6"
      - "unplugin-vue-components": "^0.25.1"
2.  设计台 各个区域的功能尽量拆分
    - 拖拽区域
      - 利用 sortable.js 设计一个拖拽组件 内部去维护 拖拽相关的配置以及事件
      - 拖拽组件 可以理解为一个容器 用于放置各类组件的 tag 只需要把这些 tag 拖动到预览区域即可
      - tag 组件信息 icon name id compName(用于在预览区域动态渲染组件)
    - 预览区域
      - 整个预览区域单独维护一个 对象数据 用于管理已经在预览区域的组件信息
        - 预览区域的组件信息 需要完善 可以根据 组件类型去获取 组件的可配置信息 handleFn 等等
      - 预览区域 也可以理解为一个容器 用于放置各类组件真实的展示
      - 支持上下移动、删除、复制等功能
    - 设置区域
      - 预览区域组件的配置信息
      - 进一步抽象出配置组件，根据组件类型去获取组件的可配置信息
