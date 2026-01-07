# Claude Code Skills 学习测验

> 来源：https://code.claude.com/docs/zh-CN/skills
> 生成时间：2026-01-06
> 题目数量：12 题

## 课程概览

本课程涵盖 Claude Code Skills（技能）的核心概念，包括：
- Skills 的定义与特性
- 三层 Skills 架构（个人/项目/插件）
- SKILL.md 配置格式
- Skills 发现与激活机制
- 最佳实践与团队共享

---

## 题目列表

### 1. Knowledge - Skills 概念介绍

```json
{
    "type": "knowledge",
    "title": "什么是 Skills？",
    "content": "Skills（技能）是 Claude Code 中用于扩展 Claude 功能的模块化单元。\n\n<strong>核心特性：</strong>\n• 由 Claude 自主决定何时使用\n• 基于请求与 Skill 描述的匹配度自动激活\n• 与斜杠命令不同，无需用户显式调用",
    "tip": "Skills 就像给 Claude 装备的技能包，Claude 会自动判断何时使用！"
}
```

### 2. Multiple Choice - Skills 与斜杠命令的区别

```json
{
    "type": "multiple-choice",
    "question": "Skills 和斜杠命令（Slash Commands）的主要区别是什么？",
    "options": [
        "Skills 由 Claude 自动激活，斜杠命令需要用户显式调用",
        "Skills 只能在项目中使用，斜杠命令可以全局使用",
        "Skills 不支持工具限制，斜杠命令支持",
        "Skills 必须用 Python 编写，斜杠命令用 Markdown"
    ],
    "correctIndex": 0,
    "explanation": "Skills 是模型驱动的，Claude 根据用户请求与 Skill description 的匹配度自动决定是否激活。斜杠命令（如 /command）则需要用户显式输入触发。"
}
```

### 3. Knowledge - 三层 Skills 架构

```json
{
    "type": "knowledge",
    "title": "Skills 的三层架构",
    "content": "Skills 可以存放在三个位置：\n\n<strong>1. 个人 Skills：</strong>\n<div class=\"code-block\"><code>~/.claude/skills/</code></div>\n用于个人工作流和实验\n\n<strong>2. 项目 Skills：</strong>\n<div class=\"code-block\"><code>.claude/skills/</code></div>\n通过 git 版本控制，团队共享\n\n<strong>3. 插件 Skills：</strong>\n通过 Claude Code 插件捆绑分发",
    "tip": "项目 Skills 会自动对所有团队成员可用！"
}
```

### 4. Fill Blank - Skills 目录位置

```json
{
    "type": "fill-blank",
    "question": "个人 Skills 应该存放在哪个目录？",
    "template": ["个人 Skills 存放在 ", "___"],
    "blanks": [
        { "id": 0, "answer": "~/.claude/skills/" }
    ],
    "wordBank": ["~/.claude/skills/", ".claude/skills/", "~/.claude/agents/", ".claude/commands/"]
}
```

### 5. Multiple Choice - SKILL.md 必需字段

```json
{
    "type": "multiple-choice",
    "question": "SKILL.md 配置文件中哪些字段是必需的？",
    "options": [
        "name 和 description",
        "name 和 allowed-tools",
        "description 和 model",
        "allowed-tools 和 model"
    ],
    "correctIndex": 0,
    "explanation": "name（小写字母、数字、连字符，最多64字符）和 description（功能说明+使用时机，最多1024字符）是必需字段。allowed-tools 是可选的。"
}
```

### 6. Fill Blank - 工具限制配置

```json
{
    "type": "fill-blank",
    "question": "如何在 SKILL.md 中限制 Skill 只能使用 Read、Grep、Glob 工具？",
    "template": ["", "___", ": Read, Grep, Glob"],
    "blanks": [
        { "id": 0, "answer": "allowed-tools" }
    ],
    "wordBank": ["allowed-tools", "tools", "permissions", "access-tools"]
}
```

### 7. Multiple Choice - description 最佳实践

```json
{
    "type": "multiple-choice",
    "question": "以下哪个是好的 Skill description 写法？",
    "options": [
        "Extract text from PDF files, fill forms. Use when working with PDF files or document extraction.",
        "Helps with documents",
        "For files",
        "A useful tool"
    ],
    "correctIndex": 0,
    "explanation": "好的 description 应该具体说明功能（Extract text, fill forms）并指明使用时机（Use when working with PDF files）。太模糊的描述会导致 Claude 无法正确匹配和激活 Skill。"
}
```

### 8. Ordering - Skills 激活流程

```json
{
    "type": "ordering",
    "question": "Skills 激活的正确流程顺序是什么？",
    "items": [
        "用户提出问题",
        "Claude 评估所有可用 Skills 的 description",
        "匹配到相关 Skill 时自动激活",
        "按 SKILL.md 中的说明执行"
    ],
    "correctOrder": [0, 1, 2, 3]
}
```

### 9. Fill Blank - 文件结构

```json
{
    "type": "fill-blank",
    "question": "每个 Skill 文件夹中必须包含的文件是什么？",
    "template": ["Skill 文件夹必须包含 ", "___", " 文件"],
    "blanks": [
        { "id": 0, "answer": "SKILL.md" }
    ],
    "wordBank": ["SKILL.md", "config.json", "index.js", "README.md"]
}
```

### 10. Scenario - Skill 不被激活的调试

```json
{
    "type": "scenario",
    "title": "Skill 调试",
    "subtitle": "你创建了一个 Skill 但 Claude 从不使用它",
    "icon": "🔧",
    "conversation": [
        { "role": "system", "text": "你在 .claude/skills/my-skill/ 创建了一个 Skill" },
        { "role": "user", "text": "处理一下这个 PDF 文件" },
        { "role": "system", "text": "Claude 没有使用你的 PDF 处理 Skill，而是尝试手动处理" }
    ],
    "question": "最可能的原因是什么？",
    "options": [
        "description 太模糊，没有包含具体功能和使用时机",
        "Skill 文件夹名称太长",
        "没有设置 allowed-tools",
        "需要重启电脑"
    ],
    "correctIndex": 0
}
```

### 11. Multiple Choice - 团队共享方式

```json
{
    "type": "multiple-choice",
    "question": "如何让团队成员共享项目 Skills？",
    "options": [
        "将 .claude/skills/ 目录提交到 git 仓库",
        "将 Skills 复制到每个人的 home 目录",
        "通过邮件发送 SKILL.md 文件",
        "Skills 无法在团队间共享"
    ],
    "correctIndex": 0,
    "explanation": "项目 Skills 存放在 .claude/skills/ 目录，通过 git 版本控制提交后，团队成员拉取代码即可自动获得这些 Skills。"
}
```

### 12. Scenario - 只读 Skill 设计

```json
{
    "type": "scenario",
    "title": "安全 Skill 设计",
    "subtitle": "你需要创建一个只能读取文件、不能修改的 Skill",
    "icon": "🔒",
    "conversation": [
        { "role": "system", "text": "团队要求创建一个代码审查 Skill，但出于安全考虑不能修改任何文件" },
        { "role": "user", "text": "如何限制 Skill 的权限？" }
    ],
    "question": "应该如何配置这个只读 Skill？",
    "options": [
        "在 SKILL.md 中设置 allowed-tools: Read, Grep, Glob",
        "在 SKILL.md 中设置 readonly: true",
        "创建一个单独的只读用户账户",
        "无法限制 Skill 的工具权限"
    ],
    "correctIndex": 0
}
```

---

## 完整 JSON 数据

以下数据可直接复制到 courses.js 使用：

```javascript
{
    id: 8,
    title: "Skills 技能",
    description: "学习创建和使用 Claude Code Skills",
    icon: "🎯",
    sourceUrl: "https://code.claude.com/docs/zh-CN/skills",
    lessons: [
        {
            id: 18,
            icon: "👋",
            questions: [
                {
                    "type": "knowledge",
                    "title": "什么是 Skills？",
                    "content": "Skills（技能）是 Claude Code 中用于扩展 Claude 功能的模块化单元。\n\n<strong>核心特性：</strong>\n• 由 Claude 自主决定何时使用\n• 基于请求与 Skill 描述的匹配度自动激活\n• 与斜杠命令不同，无需用户显式调用",
                    "tip": "Skills 就像给 Claude 装备的技能包，Claude 会自动判断何时使用！"
                },
                {
                    "type": "multiple-choice",
                    "question": "Skills 和斜杠命令（Slash Commands）的主要区别是什么？",
                    "options": [
                        "Skills 由 Claude 自动激活，斜杠命令需要用户显式调用",
                        "Skills 只能在项目中使用，斜杠命令可以全局使用",
                        "Skills 不支持工具限制，斜杠命令支持",
                        "Skills 必须用 Python 编写，斜杠命令用 Markdown"
                    ],
                    "correctIndex": 0,
                    "explanation": "Skills 是模型驱动的，Claude 根据用户请求与 Skill description 的匹配度自动决定是否激活。斜杠命令（如 /command）则需要用户显式输入触发。"
                },
                {
                    "type": "knowledge",
                    "title": "Skills 的三层架构",
                    "content": "Skills 可以存放在三个位置：\n\n<strong>1. 个人 Skills：</strong>\n<div class=\"code-block\"><code>~/.claude/skills/</code></div>\n用于个人工作流和实验\n\n<strong>2. 项目 Skills：</strong>\n<div class=\"code-block\"><code>.claude/skills/</code></div>\n通过 git 版本控制，团队共享\n\n<strong>3. 插件 Skills：</strong>\n通过 Claude Code 插件捆绑分发",
                    "tip": "项目 Skills 会自动对所有团队成员可用！"
                }
            ]
        },
        {
            id: 19,
            icon: "⚙️",
            questions: [
                {
                    "type": "fill-blank",
                    "question": "个人 Skills 应该存放在哪个目录？",
                    "template": ["个人 Skills 存放在 ", "___"],
                    "blanks": [
                        { "id": 0, "answer": "~/.claude/skills/" }
                    ],
                    "wordBank": ["~/.claude/skills/", ".claude/skills/", "~/.claude/agents/", ".claude/commands/"]
                },
                {
                    "type": "multiple-choice",
                    "question": "SKILL.md 配置文件中哪些字段是必需的？",
                    "options": [
                        "name 和 description",
                        "name 和 allowed-tools",
                        "description 和 model",
                        "allowed-tools 和 model"
                    ],
                    "correctIndex": 0,
                    "explanation": "name（小写字母、数字、连字符，最多64字符）和 description（功能说明+使用时机，最多1024字符）是必需字段。allowed-tools 是可选的。"
                },
                {
                    "type": "fill-blank",
                    "question": "如何在 SKILL.md 中限制 Skill 只能使用 Read、Grep、Glob 工具？",
                    "template": ["", "___", ": Read, Grep, Glob"],
                    "blanks": [
                        { "id": 0, "answer": "allowed-tools" }
                    ],
                    "wordBank": ["allowed-tools", "tools", "permissions", "access-tools"]
                }
            ]
        },
        {
            id: 20,
            icon: "📝",
            questions: [
                {
                    "type": "multiple-choice",
                    "question": "以下哪个是好的 Skill description 写法？",
                    "options": [
                        "Extract text from PDF files, fill forms. Use when working with PDF files or document extraction.",
                        "Helps with documents",
                        "For files",
                        "A useful tool"
                    ],
                    "correctIndex": 0,
                    "explanation": "好的 description 应该具体说明功能（Extract text, fill forms）并指明使用时机（Use when working with PDF files）。太模糊的描述会导致 Claude 无法正确匹配和激活 Skill。"
                },
                {
                    "type": "ordering",
                    "question": "Skills 激活的正确流程顺序是什么？",
                    "items": [
                        "用户提出问题",
                        "Claude 评估所有可用 Skills 的 description",
                        "匹配到相关 Skill 时自动激活",
                        "按 SKILL.md 中的说明执行"
                    ],
                    "correctOrder": [0, 1, 2, 3]
                },
                {
                    "type": "fill-blank",
                    "question": "每个 Skill 文件夹中必须包含的文件是什么？",
                    "template": ["Skill 文件夹必须包含 ", "___", " 文件"],
                    "blanks": [
                        { "id": 0, "answer": "SKILL.md" }
                    ],
                    "wordBank": ["SKILL.md", "config.json", "index.js", "README.md"]
                }
            ]
        },
        {
            id: 21,
            icon: "🎯",
            questions: [
                {
                    "type": "scenario",
                    "title": "Skill 调试",
                    "subtitle": "你创建了一个 Skill 但 Claude 从不使用它",
                    "icon": "🔧",
                    "conversation": [
                        { "role": "system", "text": "你在 .claude/skills/my-skill/ 创建了一个 Skill" },
                        { "role": "user", "text": "处理一下这个 PDF 文件" },
                        { "role": "system", "text": "Claude 没有使用你的 PDF 处理 Skill，而是尝试手动处理" }
                    ],
                    "question": "最可能的原因是什么？",
                    "options": [
                        "description 太模糊，没有包含具体功能和使用时机",
                        "Skill 文件夹名称太长",
                        "没有设置 allowed-tools",
                        "需要重启电脑"
                    ],
                    "correctIndex": 0
                },
                {
                    "type": "multiple-choice",
                    "question": "如何让团队成员共享项目 Skills？",
                    "options": [
                        "将 .claude/skills/ 目录提交到 git 仓库",
                        "将 Skills 复制到每个人的 home 目录",
                        "通过邮件发送 SKILL.md 文件",
                        "Skills 无法在团队间共享"
                    ],
                    "correctIndex": 0,
                    "explanation": "项目 Skills 存放在 .claude/skills/ 目录，通过 git 版本控制提交后，团队成员拉取代码即可自动获得这些 Skills。"
                },
                {
                    "type": "scenario",
                    "title": "安全 Skill 设计",
                    "subtitle": "你需要创建一个只能读取文件、不能修改的 Skill",
                    "icon": "🔒",
                    "conversation": [
                        { "role": "system", "text": "团队要求创建一个代码审查 Skill，但出于安全考虑不能修改任何文件" },
                        { "role": "user", "text": "如何限制 Skill 的权限？" }
                    ],
                    "question": "应该如何配置这个只读 Skill？",
                    "options": [
                        "在 SKILL.md 中设置 allowed-tools: Read, Grep, Glob",
                        "在 SKILL.md 中设置 readonly: true",
                        "创建一个单独的只读用户账户",
                        "无法限制 Skill 的工具权限"
                    ],
                    "correctIndex": 0
                }
            ]
        }
    ]
}
```

---

## 知识点索引

| 序号 | 题型 | 知识点 | 难度 |
|-----|------|-------|------|
| 1 | Knowledge | Skills 概念与特性 | 入门 |
| 2 | Multiple Choice | Skills 与斜杠命令区别 | 基础 |
| 3 | Knowledge | 三层 Skills 架构 | 入门 |
| 4 | Fill Blank | 个人 Skills 目录 | 基础 |
| 5 | Multiple Choice | SKILL.md 必需字段 | 基础 |
| 6 | Fill Blank | allowed-tools 配置 | 基础 |
| 7 | Multiple Choice | description 最佳实践 | 中级 |
| 8 | Ordering | Skills 激活流程 | 中级 |
| 9 | Fill Blank | SKILL.md 文件要求 | 基础 |
| 10 | Scenario | Skill 调试场景 | 中级 |
| 11 | Multiple Choice | 团队共享方式 | 基础 |
| 12 | Scenario | 只读 Skill 设计 | 中级 |
