module.exports = {
  // header===> feat: 添加新功能
  // body=====> 这是一个新功能的提交，它实现了...
  // footer===> 相关问题：#123
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"], // 要求提交消息的正文（body）以一个空行开头
    "footer-leading-blank": [1, "always"], // 要求提交消息的页脚（footer）以一个空行开头
    "header-max-length": [2, "always", 108], // 限制提交消息的标题（header）长度不超过 108 个字符
    "subject-empty": [2, "never"], // 不允许提交消息的主题（subject）为空
    "type-empty": [2, "never"], // 不允许提交消息的类型（type）为空
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修补bug
        "perf", // 优化相关，比如提升性能、体验
        "style", // 代码格式修改, 注意不是 css 修改
        "docs", // 文档修改
        "test", // 测试用例修改
        "refactor", // 重构
        "build", // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        "ci", // 持续集成修改
        "chore", // 其他改动
        "revert", // 代码回滚
        "wip", // 表示正在进行中的工作，通常用于标记尚未完成的任务或功能。
        "workflow", // 表示工作流程或流程，指项目中的某个特定步骤或顺序。
        "types", // 表示类型或数据结构，指项目中定义的一些自定义类型或类。
        "release", // 表示发布或版本控制，指将项目部署到生产环境或发布新版本的功能。
      ],
    ],
  },
};
