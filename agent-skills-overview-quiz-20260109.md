# Agent Skills 概述 学习测验

> 来源：https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/overview
> 生成时间：2026-01-09
> 题目数量：12 题

## 课程概览

本课程涵盖 Agent Skills 的核心概念，包括：什么是 Skills、为什么使用 Skills、Skills 的三级加载机制、Skill 结构规范、跨平台使用以及安全注意事项。

---

## 题目列表

### 1. Knowledge - 什么是 Agent Skills

```json
{
    "type": "knowledge",
    "title": "什么是 Agent Skills？",
    "content": "Agent Skills 是扩展 Claude 功能的<strong>模块化能力</strong>。\n\n每个 Skill 包含：\n• 指令（Instructions）\n• 元数据（Metadata）\n• 可选资源（脚本、模板等）\n\nClaude 在相关时会<strong>自动使用</strong>这些 Skills，无需每次对话重复提供指导。",
    "tip": "Skills 就像给 Claude 配备的专业工具箱，按需取用！"
}
```

### 2. Multiple Choice - Skills vs 提示的区别

```json
{
    "type": "multiple-choice",
    "question": "Agent Skills 与普通提示（Prompt）的主要区别是什么？",
    "options": [
        "Skills 是一次性的，提示是可重用的",
        "Skills 按需加载且可重用，提示是对话级别的一次性指令",
        "Skills 只能用于代码任务，提示可用于所有任务",
        "Skills 需要付费，提示免费使用"
    ],
    "correctIndex": 1,
    "explanation": "Skills 是可重用的、基于文件系统的资源，按需加载；而提示是对话级别的一次性任务指令，需要在每次对话中重复提供。"
}
```

### 3. Knowledge - 三级加载机制

```json
{
    "type": "knowledge",
    "title": "Skills 的渐进式加载",
    "content": "Skills 采用<strong>渐进式披露</strong>机制，分三个级别加载：\n\n<strong>第 1 级：元数据</strong>（始终加载）\n• YAML 前置数据中的 name 和 description\n• 约 100 tokens/Skill\n\n<strong>第 2 级：指令</strong>（触发时加载）\n• SKILL.md 主体内容\n• 通常 < 5k tokens\n\n<strong>第 3 级：资源</strong>（按需加载）\n• 脚本、参考文件等\n• 通过 bash 执行，不占上下文",
    "tip": "这种设计意味着你可以安装很多 Skills，但只有用到的才会消耗 token！"
}
```

### 4. Multiple Choice - 元数据加载时机

```json
{
    "type": "multiple-choice",
    "question": "Skill 的元数据（name 和 description）在什么时候加载到上下文中？",
    "options": [
        "用户请求相关任务时",
        "Claude 读取 SKILL.md 时",
        "启动时就加载到系统提示中",
        "执行脚本时"
    ],
    "correctIndex": 2,
    "explanation": "元数据（第 1 级）在启动时就加载到系统提示中，这样 Claude 才能知道有哪些 Skills 可用以及何时使用它们。"
}
```

### 5. Fill Blank - SKILL.md 必需字段

```json
{
    "type": "fill-blank",
    "question": "每个 Skill 都需要一个 SKILL.md 文件，其中 YAML 前置数据必须包含两个必需字段。",
    "template": ["YAML 前置数据必须包含 ", "___", " 和 ", "___", " 两个字段"],
    "blanks": [
        { "id": 0, "answer": "name" },
        { "id": 1, "answer": "description" }
    ],
    "wordBank": ["name", "description", "title", "version", "author", "instructions"]
}
```

### 6. Multiple Choice - name 字段规范

```json
{
    "type": "multiple-choice",
    "question": "以下哪个 Skill name 是有效的？",
    "options": [
        "My_Awesome_Skill",
        "pdf-processing",
        "Claude-Helper",
        "anthropic-skill"
    ],
    "correctIndex": 1,
    "explanation": "name 只能包含小写字母、数字和连字符，且不能包含保留字「anthropic」或「claude」。所以只有 pdf-processing 是有效的。"
}
```

### 7. Ordering - PDF 处理 Skill 加载流程

```json
{
    "type": "ordering",
    "question": "请按正确顺序排列 Claude 加载和使用 PDF 处理 Skill 的步骤：",
    "items": [
        "系统提示包含 Skill 元数据（name 和 description）",
        "用户请求：「从此 PDF 中提取文本并总结」",
        "Claude 通过 bash 读取 pdf-skill/SKILL.md",
        "Claude 根据指令完成任务"
    ],
    "correctOrder": [0, 1, 2, 3]
}
```

### 8. Multiple Choice - 脚本执行特点

```json
{
    "type": "multiple-choice",
    "question": "当 Claude 运行 Skill 中的脚本（如 validate_form.py）时，会发生什么？",
    "options": [
        "脚本代码和输出都加载到上下文窗口",
        "只有脚本代码加载到上下文，输出被丢弃",
        "只有脚本输出进入上下文，代码本身不加载",
        "脚本在用户本地机器上执行"
    ],
    "correctIndex": 2,
    "explanation": "脚本通过 bash 执行，只有输出（如「验证通过」或错误消息）消耗 token。脚本代码永远不会加载到上下文窗口中，这使得脚本比让 Claude 即时生成代码更高效。"
}
```

### 9. Scenario - 选择合适的平台

```json
{
    "type": "scenario",
    "title": "跨平台 Skills 管理",
    "subtitle": "团队协作场景",
    "icon": "👥",
    "conversation": [
        { "role": "system", "text": "你是一个团队的技术负责人，需要让团队成员共享自定义 Skills。" },
        { "role": "user", "text": "我想创建一个自定义 Skill，让整个团队都能使用，应该怎么做？" },
        { "role": "system", "text": "不同平台的 Skills 共享范围不同..." }
    ],
    "question": "如果你想让自定义 Skill 在整个工作区/团队内共享，应该选择哪个平台？",
    "options": [
        "Claude API（工作区范围共享）",
        "Claude.ai（仅限个人）",
        "Claude Code 个人目录（~/.claude/skills/）",
        "以上都可以"
    ],
    "correctIndex": 0
}
```

### 10. Fill Blank - 预构建 Skills

```json
{
    "type": "fill-blank",
    "question": "Anthropic 提供了 4 种预构建的 Agent Skills，用于处理常见文档任务。",
    "template": ["预构建 Skills 包括：PowerPoint (", "___", ")、Excel (", "___", ")、Word (docx)、PDF (pdf)"],
    "blanks": [
        { "id": 0, "answer": "pptx" },
        { "id": 1, "answer": "xlsx" }
    ],
    "wordBank": ["pptx", "xlsx", "ppt", "xls", "doc", "txt"]
}
```

### 11. Multiple Choice - 运行时限制

```json
{
    "type": "multiple-choice",
    "question": "Skills 在代码执行容器中运行时，以下哪项是正确的？",
    "options": [
        "可以自由访问互联网和外部 API",
        "可以在运行时安装任何需要的包",
        "无网络访问，只能使用预安装的包",
        "可以访问用户本地文件系统"
    ],
    "correctIndex": 2,
    "explanation": "Skills 在代码执行容器中运行，无法进行外部 API 调用或访问互联网，也无法在运行时安装新包，只能使用预安装的包。"
}
```

### 12. Scenario - 安全审计

```json
{
    "type": "scenario",
    "title": "Skill 安全评估",
    "subtitle": "来自未知来源的 Skill",
    "icon": "🔒",
    "conversation": [
        { "role": "system", "text": "你的同事分享了一个从网上下载的 Skill，声称可以自动化报告生成。" },
        { "role": "user", "text": "这个 Skill 看起来很有用，我可以直接使用吗？" },
        { "role": "system", "text": "你打开 Skill 目录，发现里面有多个 .py 脚本和一个 SKILL.md 文件..." }
    ],
    "question": "在使用这个来自未知来源的 Skill 之前，你应该怎么做？",
    "options": [
        "彻底审计所有文件：SKILL.md、脚本和其他资源，检查异常网络调用或文件访问模式",
        "只检查 SKILL.md 文件即可，脚本不重要",
        "直接使用，因为 Skills 在沙箱中运行很安全",
        "只要文件大小不大就可以信任"
    ],
    "correctIndex": 0
}
```

---

## 完整 JSON 数据

以下数据可直接复制到 courses.js 使用：

```javascript
{
    id: "agent-skills-overview",
    icon: "🧩",
    title: "Agent Skills 概述",
    description: "了解 Claude 的模块化扩展能力",
    questions: [
        {
            "type": "knowledge",
            "title": "什么是 Agent Skills？",
            "content": "Agent Skills 是扩展 Claude 功能的<strong>模块化能力</strong>。\n\n每个 Skill 包含：\n• 指令（Instructions）\n• 元数据（Metadata）\n• 可选资源（脚本、模板等）\n\nClaude 在相关时会<strong>自动使用</strong>这些 Skills，无需每次对话重复提供指导。",
            "tip": "Skills 就像给 Claude 配备的专业工具箱，按需取用！"
        },
        {
            "type": "multiple-choice",
            "question": "Agent Skills 与普通提示（Prompt）的主要区别是什么？",
            "options": [
                "Skills 是一次性的，提示是可重用的",
                "Skills 按需加载且可重用，提示是对话级别的一次性指令",
                "Skills 只能用于代码任务，提示可用于所有任务",
                "Skills 需要付费，提示免费使用"
            ],
            "correctIndex": 1,
            "explanation": "Skills 是可重用的、基于文件系统的资源，按需加载；而提示是对话级别的一次性任务指令，需要在每次对话中重复提供。"
        },
        {
            "type": "knowledge",
            "title": "Skills 的渐进式加载",
            "content": "Skills 采用<strong>渐进式披露</strong>机制，分三个级别加载：\n\n<strong>第 1 级：元数据</strong>（始终加载）\n• YAML 前置数据中的 name 和 description\n• 约 100 tokens/Skill\n\n<strong>第 2 级：指令</strong>（触发时加载）\n• SKILL.md 主体内容\n• 通常 < 5k tokens\n\n<strong>第 3 级：资源</strong>（按需加载）\n• 脚本、参考文件等\n• 通过 bash 执行，不占上下文",
            "tip": "这种设计意味着你可以安装很多 Skills，但只有用到的才会消耗 token！"
        },
        {
            "type": "multiple-choice",
            "question": "Skill 的元数据（name 和 description）在什么时候加载到上下文中？",
            "options": [
                "用户请求相关任务时",
                "Claude 读取 SKILL.md 时",
                "启动时就加载到系统提示中",
                "执行脚本时"
            ],
            "correctIndex": 2,
            "explanation": "元数据（第 1 级）在启动时就加载到系统提示中，这样 Claude 才能知道有哪些 Skills 可用以及何时使用它们。"
        },
        {
            "type": "fill-blank",
            "question": "每个 Skill 都需要一个 SKILL.md 文件，其中 YAML 前置数据必须包含两个必需字段。",
            "template": ["YAML 前置数据必须包含 ", "___", " 和 ", "___", " 两个字段"],
            "blanks": [
                { "id": 0, "answer": "name" },
                { "id": 1, "answer": "description" }
            ],
            "wordBank": ["name", "description", "title", "version", "author", "instructions"]
        },
        {
            "type": "multiple-choice",
            "question": "以下哪个 Skill name 是有效的？",
            "options": [
                "My_Awesome_Skill",
                "pdf-processing",
                "Claude-Helper",
                "anthropic-skill"
            ],
            "correctIndex": 1,
            "explanation": "name 只能包含小写字母、数字和连字符，且不能包含保留字「anthropic」或「claude」。所以只有 pdf-processing 是有效的。"
        },
        {
            "type": "ordering",
            "question": "请按正确顺序排列 Claude 加载和使用 PDF 处理 Skill 的步骤：",
            "items": [
                "系统提示包含 Skill 元数据（name 和 description）",
                "用户请求：「从此 PDF 中提取文本并总结」",
                "Claude 通过 bash 读取 pdf-skill/SKILL.md",
                "Claude 根据指令完成任务"
            ],
            "correctOrder": [0, 1, 2, 3]
        },
        {
            "type": "multiple-choice",
            "question": "当 Claude 运行 Skill 中的脚本（如 validate_form.py）时，会发生什么？",
            "options": [
                "脚本代码和输出都加载到上下文窗口",
                "只有脚本代码加载到上下文，输出被丢弃",
                "只有脚本输出进入上下文，代码本身不加载",
                "脚本在用户本地机器上执行"
            ],
            "correctIndex": 2,
            "explanation": "脚本通过 bash 执行，只有输出（如「验证通过」或错误消息）消耗 token。脚本代码永远不会加载到上下文窗口中，这使得脚本比让 Claude 即时生成代码更高效。"
        },
        {
            "type": "scenario",
            "title": "跨平台 Skills 管理",
            "subtitle": "团队协作场景",
            "icon": "👥",
            "conversation": [
                { "role": "system", "text": "你是一个团队的技术负责人，需要让团队成员共享自定义 Skills。" },
                { "role": "user", "text": "我想创建一个自定义 Skill，让整个团队都能使用，应该怎么做？" },
                { "role": "system", "text": "不同平台的 Skills 共享范围不同..." }
            ],
            "question": "如果你想让自定义 Skill 在整个工作区/团队内共享，应该选择哪个平台？",
            "options": [
                "Claude API（工作区范围共享）",
                "Claude.ai（仅限个人）",
                "Claude Code 个人目录（~/.claude/skills/）",
                "以上都可以"
            ],
            "correctIndex": 0
        },
        {
            "type": "fill-blank",
            "question": "Anthropic 提供了 4 种预构建的 Agent Skills，用于处理常见文档任务。",
            "template": ["预构建 Skills 包括：PowerPoint (", "___", ")、Excel (", "___", ")、Word (docx)、PDF (pdf)"],
            "blanks": [
                { "id": 0, "answer": "pptx" },
                { "id": 1, "answer": "xlsx" }
            ],
            "wordBank": ["pptx", "xlsx", "ppt", "xls", "doc", "txt"]
        },
        {
            "type": "multiple-choice",
            "question": "Skills 在代码执行容器中运行时，以下哪项是正确的？",
            "options": [
                "可以自由访问互联网和外部 API",
                "可以在运行时安装任何需要的包",
                "无网络访问，只能使用预安装的包",
                "可以访问用户本地文件系统"
            ],
            "correctIndex": 2,
            "explanation": "Skills 在代码执行容器中运行，无法进行外部 API 调用或访问互联网，也无法在运行时安装新包，只能使用预安装的包。"
        },
        {
            "type": "scenario",
            "title": "Skill 安全评估",
            "subtitle": "来自未知来源的 Skill",
            "icon": "🔒",
            "conversation": [
                { "role": "system", "text": "你的同事分享了一个从网上下载的 Skill，声称可以自动化报告生成。" },
                { "role": "user", "text": "这个 Skill 看起来很有用，我可以直接使用吗？" },
                { "role": "system", "text": "你打开 Skill 目录，发现里面有多个 .py 脚本和一个 SKILL.md 文件..." }
            ],
            "question": "在使用这个来自未知来源的 Skill 之前，你应该怎么做？",
            "options": [
                "彻底审计所有文件：SKILL.md、脚本和其他资源，检查异常网络调用或文件访问模式",
                "只检查 SKILL.md 文件即可，脚本不重要",
                "直接使用，因为 Skills 在沙箱中运行很安全",
                "只要文件大小不大就可以信任"
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
| 1 | Knowledge | Agent Skills 定义与组成 | 入门 |
| 2 | Multiple Choice | Skills vs 提示的区别 | 基础 |
| 3 | Knowledge | 渐进式加载机制（三级加载） | 基础 |
| 4 | Multiple Choice | 元数据加载时机 | 基础 |
| 5 | Fill Blank | SKILL.md 必需字段 | 基础 |
| 6 | Multiple Choice | name 字段命名规范 | 中级 |
| 7 | Ordering | Skill 加载流程 | 中级 |
| 8 | Multiple Choice | 脚本执行与上下文 | 中级 |
| 9 | Scenario | 跨平台共享范围 | 中级 |
| 10 | Fill Blank | 预构建 Skills 文件类型 | 基础 |
| 11 | Multiple Choice | 运行时环境限制 | 中级 |
| 12 | Scenario | 安全审计最佳实践 | 中级 |
