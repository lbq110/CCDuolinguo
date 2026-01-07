# Claude Code 子代理 学习测验

> 来源：https://code.claude.com/docs/zh-CN/sub-agents
> 生成时间：2026-01-06
> 题目数量：12 题

## 课程概览

本课程涵盖 Claude Code 子代理（Sub-agents）的核心概念，包括：
- 子代理的定义与优势
- 配置文件格式与字段
- 创建和管理子代理的方法
- 模型选择与工具配置
- 最佳实践与实际应用场景

---

## 题目列表

### 1. Knowledge - 子代理概念介绍

```json
{
    "type": "knowledge",
    "title": "什么是子代理？",
    "content": "子代理（Sub-agents）是 Claude Code 中的专门 AI 助手，可以被主 Claude 调用来处理特定类型的任务。\n\n<strong>核心特点：</strong>\n• 独立的上下文窗口\n• 自定义系统提示\n• 特定工具访问权限\n• 与主对话分离，防止上下文污染",
    "tip": "子代理就像专家顾问，主 Claude 可以随时召唤它们处理专业问题！"
}
```

### 2. Multiple Choice - 子代理优势

```json
{
    "type": "multiple-choice",
    "question": "以下哪项不是子代理的主要优势？",
    "options": [
        "自动生成文档",
        "上下文保留 - 主对话保持聚焦",
        "专业化专业知识 - 针对特定领域微调",
        "可重用性 - 跨项目使用和团队共享"
    ],
    "correctIndex": 0,
    "explanation": "子代理的四大优势是：上下文保留、专业化专业知识、可重用性和灵活的权限。自动生成文档不是子代理的优势，这是它可能执行的任务，不是架构优势。"
}
```

### 3. Knowledge - 配置文件位置

```json
{
    "type": "knowledge",
    "title": "子代理配置文件放在哪里？",
    "content": "子代理配置文件可以放在两个位置：\n\n<strong>项目级别：</strong>\n<div class=\"code-block\"><code>.claude/agents/</code></div>\n\n<strong>用户级别：</strong>\n<div class=\"code-block\"><code>~/.claude/agents/</code></div>\n\n<strong>优先级顺序：</strong>\n项目级别 > 用户级别 > CLI定义",
    "tip": "项目级别的配置优先级最高，适合定义项目专用的子代理！"
}
```

### 4. Fill Blank - 配置文件格式

```json
{
    "type": "fill-blank",
    "question": "子代理配置文件的格式是什么？",
    "template": ["子代理配置文件使用 ", "___", " 前置内容 + Markdown 格式"],
    "blanks": [
        { "id": 0, "answer": "YAML" }
    ],
    "wordBank": ["YAML", "JSON", "TOML", "XML"]
}
```

### 5. Multiple Choice - 必需配置字段

```json
{
    "type": "multiple-choice",
    "question": "在子代理配置中，哪两个字段是必需的？",
    "options": [
        "name 和 description",
        "name 和 tools",
        "description 和 model",
        "tools 和 model"
    ],
    "correctIndex": 0,
    "explanation": "name（唯一标识符）和 description（目的描述）是必需字段。tools 和 model 是可选的，省略 tools 则继承所有工具，省略 model 则使用默认模型。"
}
```

### 6. Fill Blank - 模型别名

```json
{
    "type": "fill-blank",
    "question": "如果想让子代理使用与主对话相同的模型，应该将 model 字段设置为什么？",
    "template": ["model: ", "___"],
    "blanks": [
        { "id": 0, "answer": "inherit" }
    ],
    "wordBank": ["inherit", "same", "parent", "default"]
}
```

### 7. Multiple Choice - 模型选择

```json
{
    "type": "multiple-choice",
    "question": "以下哪个不是子代理支持的模型别名？",
    "options": [
        "gpt-4",
        "sonnet",
        "opus",
        "haiku"
    ],
    "correctIndex": 0,
    "explanation": "子代理支持的模型别名包括：sonnet、opus、haiku，以及 inherit（继承主对话模型）。gpt-4 是 OpenAI 的模型，不属于 Claude 系列。"
}
```

### 8. Ordering - 创建子代理步骤

```json
{
    "type": "ordering",
    "question": "使用 /agents 命令创建子代理的正确步骤顺序是什么？",
    "items": [
        "运行 /agents 命令",
        "选择"创建新代理"",
        "定义配置（name、description 等）",
        "保存配置文件"
    ],
    "correctOrder": [0, 1, 2, 3]
}
```

### 9. Fill Blank - 工具配置

```json
{
    "type": "fill-blank",
    "question": "如果想让子代理只能使用 Read、Grep 和 Glob 工具，应该如何配置？",
    "template": ["tools: Read, ", "___", ", Glob"],
    "blanks": [
        { "id": 0, "answer": "Grep" }
    ],
    "wordBank": ["Grep", "Search", "Find", "Query"]
}
```

### 10. Scenario - 代码审查场景

```json
{
    "type": "scenario",
    "title": "代码审查自动化",
    "subtitle": "你刚完成了一段重要的代码修改",
    "icon": "🔍",
    "conversation": [
        { "role": "system", "text": "你在项目中配置了一个 code-reviewer 子代理，description 包含 \"修改代码后立即使用\"" },
        { "role": "user", "text": "我刚修改了用户认证模块" },
        { "role": "system", "text": "Claude 检测到代码修改与 code-reviewer 的 description 匹配" }
    ],
    "question": "在这种情况下，Claude 会如何处理？",
    "options": [
        "自动调用 code-reviewer 子代理进行代码审查",
        "询问用户是否需要代码审查",
        "忽略，因为用户没有显式要求审查",
        "报错，因为子代理不能自动调用"
    ],
    "correctIndex": 0
}
```

### 11. Multiple Choice - 主动调用关键词

```json
{
    "type": "multiple-choice",
    "question": "如果想让 Claude 主动使用某个子代理，应该在 description 中包含什么关键词？",
    "options": [
        "use PROACTIVELY 或 MUST BE USED",
        "AUTO_RUN 或 ALWAYS_USE",
        "REQUIRED 或 MANDATORY",
        "DEFAULT 或 PRIMARY"
    ],
    "correctIndex": 0,
    "explanation": "在 description 中包含 \"use PROACTIVELY\" 或 \"MUST BE USED\" 可以鼓励 Claude 主动使用该子代理，而不是等待用户显式调用。"
}
```

### 12. Scenario - 可恢复子代理

```json
{
    "type": "scenario",
    "title": "长时间任务处理",
    "subtitle": "你需要分析一个大型模块的代码",
    "icon": "🔄",
    "conversation": [
        { "role": "user", "text": "Use the code-analyzer agent to start reviewing auth module" },
        { "role": "system", "text": "子代理开始分析，返回 agentId: \"abc123\"，但分析中断了" },
        { "role": "user", "text": "需要继续之前的分析工作" }
    ],
    "question": "如何继续之前中断的子代理任务？",
    "options": [
        "使用 Resume agent abc123 命令恢复子代理",
        "重新运行相同的命令",
        "删除并重建子代理",
        "无法恢复，只能重新开始"
    ],
    "correctIndex": 0
}
```

---

## 完整 JSON 数据

以下数据可直接复制到 courses.js 使用：

```javascript
{
    id: "sub-agents",
    icon: "🤖",
    questions: [
        {
            "type": "knowledge",
            "title": "什么是子代理？",
            "content": "子代理（Sub-agents）是 Claude Code 中的专门 AI 助手，可以被主 Claude 调用来处理特定类型的任务。\n\n<strong>核心特点：</strong>\n• 独立的上下文窗口\n• 自定义系统提示\n• 特定工具访问权限\n• 与主对话分离，防止上下文污染",
            "tip": "子代理就像专家顾问，主 Claude 可以随时召唤它们处理专业问题！"
        },
        {
            "type": "multiple-choice",
            "question": "以下哪项不是子代理的主要优势？",
            "options": [
                "自动生成文档",
                "上下文保留 - 主对话保持聚焦",
                "专业化专业知识 - 针对特定领域微调",
                "可重用性 - 跨项目使用和团队共享"
            ],
            "correctIndex": 0,
            "explanation": "子代理的四大优势是：上下文保留、专业化专业知识、可重用性和灵活的权限。自动生成文档不是子代理的优势，这是它可能执行的任务，不是架构优势。"
        },
        {
            "type": "knowledge",
            "title": "子代理配置文件放在哪里？",
            "content": "子代理配置文件可以放在两个位置：\n\n<strong>项目级别：</strong>\n<div class=\"code-block\"><code>.claude/agents/</code></div>\n\n<strong>用户级别：</strong>\n<div class=\"code-block\"><code>~/.claude/agents/</code></div>\n\n<strong>优先级顺序：</strong>\n项目级别 > 用户级别 > CLI定义",
            "tip": "项目级别的配置优先级最高，适合定义项目专用的子代理！"
        },
        {
            "type": "fill-blank",
            "question": "子代理配置文件的格式是什么？",
            "template": ["子代理配置文件使用 ", "___", " 前置内容 + Markdown 格式"],
            "blanks": [
                { "id": 0, "answer": "YAML" }
            ],
            "wordBank": ["YAML", "JSON", "TOML", "XML"]
        },
        {
            "type": "multiple-choice",
            "question": "在子代理配置中，哪两个字段是必需的？",
            "options": [
                "name 和 description",
                "name 和 tools",
                "description 和 model",
                "tools 和 model"
            ],
            "correctIndex": 0,
            "explanation": "name（唯一标识符）和 description（目的描述）是必需字段。tools 和 model 是可选的，省略 tools 则继承所有工具，省略 model 则使用默认模型。"
        },
        {
            "type": "fill-blank",
            "question": "如果想让子代理使用与主对话相同的模型，应该将 model 字段设置为什么？",
            "template": ["model: ", "___"],
            "blanks": [
                { "id": 0, "answer": "inherit" }
            ],
            "wordBank": ["inherit", "same", "parent", "default"]
        },
        {
            "type": "multiple-choice",
            "question": "以下哪个不是子代理支持的模型别名？",
            "options": [
                "gpt-4",
                "sonnet",
                "opus",
                "haiku"
            ],
            "correctIndex": 0,
            "explanation": "子代理支持的模型别名包括：sonnet、opus、haiku，以及 inherit（继承主对话模型）。gpt-4 是 OpenAI 的模型，不属于 Claude 系列。"
        },
        {
            "type": "ordering",
            "question": "使用 /agents 命令创建子代理的正确步骤顺序是什么？",
            "items": [
                "运行 /agents 命令",
                "选择"创建新代理"",
                "定义配置（name、description 等）",
                "保存配置文件"
            ],
            "correctOrder": [0, 1, 2, 3]
        },
        {
            "type": "fill-blank",
            "question": "如果想让子代理只能使用 Read、Grep 和 Glob 工具，应该如何配置？",
            "template": ["tools: Read, ", "___", ", Glob"],
            "blanks": [
                { "id": 0, "answer": "Grep" }
            ],
            "wordBank": ["Grep", "Search", "Find", "Query"]
        },
        {
            "type": "scenario",
            "title": "代码审查自动化",
            "subtitle": "你刚完成了一段重要的代码修改",
            "icon": "🔍",
            "conversation": [
                { "role": "system", "text": "你在项目中配置了一个 code-reviewer 子代理，description 包含 \"修改代码后立即使用\"" },
                { "role": "user", "text": "我刚修改了用户认证模块" },
                { "role": "system", "text": "Claude 检测到代码修改与 code-reviewer 的 description 匹配" }
            ],
            "question": "在这种情况下，Claude 会如何处理？",
            "options": [
                "自动调用 code-reviewer 子代理进行代码审查",
                "询问用户是否需要代码审查",
                "忽略，因为用户没有显式要求审查",
                "报错，因为子代理不能自动调用"
            ],
            "correctIndex": 0
        },
        {
            "type": "multiple-choice",
            "question": "如果想让 Claude 主动使用某个子代理，应该在 description 中包含什么关键词？",
            "options": [
                "use PROACTIVELY 或 MUST BE USED",
                "AUTO_RUN 或 ALWAYS_USE",
                "REQUIRED 或 MANDATORY",
                "DEFAULT 或 PRIMARY"
            ],
            "correctIndex": 0,
            "explanation": "在 description 中包含 \"use PROACTIVELY\" 或 \"MUST BE USED\" 可以鼓励 Claude 主动使用该子代理，而不是等待用户显式调用。"
        },
        {
            "type": "scenario",
            "title": "长时间任务处理",
            "subtitle": "你需要分析一个大型模块的代码",
            "icon": "🔄",
            "conversation": [
                { "role": "user", "text": "Use the code-analyzer agent to start reviewing auth module" },
                { "role": "system", "text": "子代理开始分析，返回 agentId: \"abc123\"，但分析中断了" },
                { "role": "user", "text": "需要继续之前的分析工作" }
            ],
            "question": "如何继续之前中断的子代理任务？",
            "options": [
                "使用 Resume agent abc123 命令恢复子代理",
                "重新运行相同的命令",
                "删除并重建子代理",
                "无法恢复，只能重新开始"
            ],
            "correctIndex": 0
        }
    ]
}
```

---

## 知识点索引

| 序号 | 题型 | 知识点 | 难度 |
|-----|------|-------|------|
| 1 | Knowledge | 子代理定义与特点 | 入门 |
| 2 | Multiple Choice | 子代理优势辨析 | 基础 |
| 3 | Knowledge | 配置文件位置与优先级 | 入门 |
| 4 | Fill Blank | 配置文件格式（YAML） | 基础 |
| 5 | Multiple Choice | 必需配置字段 | 基础 |
| 6 | Fill Blank | 模型继承配置 | 基础 |
| 7 | Multiple Choice | 模型别名辨析 | 基础 |
| 8 | Ordering | 创建子代理流程 | 中级 |
| 9 | Fill Blank | 工具配置语法 | 基础 |
| 10 | Scenario | 自动调用场景 | 中级 |
| 11 | Multiple Choice | 主动调用关键词 | 中级 |
| 12 | Scenario | 可恢复子代理 | 中级 |
