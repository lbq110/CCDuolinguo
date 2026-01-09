// Claude Code 学习课程数据
const courseData = {
    units: [
        {
            id: 1,
            title: "入门基础",
            description: "了解 Claude Code 的基本使用",
            icon: "🚀",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 1,
                    icon: "👋",
                    questions: [
                        {
                            type: "knowledge",
                            title: "欢迎来到 Claude Code！",
                            content: `Claude Code 是 Anthropic 官方推出的命令行工具，让你可以在终端中与 Claude AI 进行交互式编程。

它可以帮助你：
• 理解和探索代码库
• 修复 Bug 和重构代码
• 编写测试和文档
• 创建 Git 提交和 PR`,
                            tip: "Claude Code 最强大的地方是它能直接读取和修改你的代码文件！"
                        },
                        {
                            type: "multiple-choice",
                            question: "Claude Code 是什么类型的工具？",
                            options: [
                                "图形界面应用程序",
                                "命令行工具 (CLI)",
                                "浏览器插件",
                                "移动端 App"
                            ],
                            correctIndex: 1,
                            explanation: "Claude Code 是一个命令行工具，你可以在终端中使用它。"
                        },
                        {
                            type: "multiple-choice",
                            question: "启动 Claude Code 后，如何获取代码库概览？",
                            options: [
                                "输入：give me an overview of this codebase",
                                "输入：show files",
                                "输入：list all",
                                "输入：help"
                            ],
                            correctIndex: 0,
                            explanation: "使用自然语言询问即可，Claude 会理解你的意图。"
                        }
                    ]
                },
                {
                    id: 2,
                    icon: "📂",
                    questions: [
                        {
                            type: "knowledge",
                            title: "理解新代码库",
                            content: `当你接手一个新项目时，Claude Code 可以帮你快速了解代码结构。

<div class="code-block"><code>cd /path/to/project
claude
> give me an overview of this codebase</code></div>

你还可以进一步询问：
• 解释主架构模式
• 关键数据模型有哪些
• 如何处理身份验证`,
                            tip: "最佳实践：从广泛问题开始，逐步深入到具体细节。"
                        },
                        {
                            type: "fill-blank",
                            question: "完成命令：查找处理用户认证的文件",
                            template: ["find the files that handle", "___"],
                            blanks: [
                                { id: 0, answer: "user authentication" }
                            ],
                            wordBank: ["user authentication", "database", "api routes", "configurations"]
                        },
                        {
                            type: "scenario",
                            title: "新项目探索",
                            subtitle: "你刚加入团队，需要了解代码库",
                            icon: "💼",
                            conversation: [
                                { role: "system", text: "你已进入项目目录并启动了 Claude Code" },
                                { role: "user", text: "give me an overview of this codebase" },
                                { role: "system", text: "Claude 分析了项目结构，列出了主要模块和技术栈..." }
                            ],
                            question: "接下来你想深入了解登录流程，应该问什么？",
                            options: [
                                "trace the login process from front-end to database",
                                "show me all files",
                                "what is JavaScript",
                                "delete login files"
                            ],
                            correctIndex: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "修复与重构",
            description: "学习如何高效修复 Bug 和重构代码",
            icon: "🔧",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 3,
                    icon: "🐛",
                    questions: [
                        {
                            type: "knowledge",
                            title: "高效修复错误",
                            content: `当遇到错误时，你可以直接把错误信息告诉 Claude：

<div class="code-block"><code>> I'm seeing an error when I run npm test</code></div>

Claude 会分析错误并提供修复建议。你还可以：

<div class="code-block"><code>> suggest a few ways to fix the @ts-ignore in user.ts
> update user.ts to add the null check you suggested</code></div>`,
                            tip: "提供完整的堆栈跟踪和复现步骤，能帮助 Claude 更准确地定位问题。"
                        },
                        {
                            type: "multiple-choice",
                            question: "报告错误时，最好提供什么信息？",
                            options: [
                                "只说「有个错误」",
                                "错误信息、堆栈跟踪、复现命令",
                                "只提供文件名",
                                "截图即可"
                            ],
                            correctIndex: 1,
                            explanation: "提供详细信息能帮助 Claude 更准确地分析和修复问题。"
                        },
                        {
                            type: "ordering",
                            question: "修复 Bug 的正确步骤顺序是？",
                            items: [
                                "描述遇到的错误",
                                "让 Claude 分析问题",
                                "选择修复方案",
                                "让 Claude 应用修复",
                                "运行测试验证"
                            ],
                            correctOrder: [0, 1, 2, 3, 4]
                        }
                    ]
                },
                {
                    id: 4,
                    icon: "♻️",
                    questions: [
                        {
                            type: "knowledge",
                            title: "重构代码",
                            content: `Claude Code 可以帮助你现代化和改进代码：

<div class="code-block"><code>> find deprecated API usage in our codebase
> suggest how to refactor utils.js to use modern JavaScript features
> refactor utils.js to use ES2024 features while maintaining the same behavior
> run tests for the refactored code</code></div>`,
                            tip: "重构后一定要运行测试，确保行为没有改变！"
                        },
                        {
                            type: "fill-blank",
                            question: "完成重构请求",
                            template: ["refactor utils.js to use", "___", "while maintaining the same", "___"],
                            blanks: [
                                { id: 0, answer: "ES2024 features" },
                                { id: 1, answer: "behavior" }
                            ],
                            wordBank: ["ES2024 features", "behavior", "old syntax", "file size", "comments"]
                        },
                        {
                            type: "multiple-choice",
                            question: "重构代码后应该做什么？",
                            options: [
                                "直接提交代码",
                                "运行测试验证行为没有改变",
                                "删除旧文件",
                                "什么都不用做"
                            ],
                            correctIndex: 1,
                            explanation: "重构的目标是改进代码结构但不改变行为，所以必须用测试验证。"
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "高级功能",
            description: "掌握计划模式、扩展思考等高级特性",
            icon: "⚡",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 5,
                    icon: "📋",
                    questions: [
                        {
                            type: "knowledge",
                            title: "计划模式 (Plan Mode)",
                            content: `计划模式让你在修改代码前先进行安全分析和规划。

适用场景：
• <strong>多步实现</strong>：功能需要编辑多个文件
• <strong>代码探索</strong>：在修改前彻底研究代码库
• <strong>交互式开发</strong>：与 Claude 迭代方向

<div class="code-block"><code># 启动计划模式
claude --permission-mode plan

# 或在会话中按 Shift+Tab 切换</code></div>`,
                            tip: "计划模式下，Claude 只会分析和建议，不会直接修改文件。"
                        },
                        {
                            type: "multiple-choice",
                            question: "如何在会话中切换到计划模式？",
                            options: [
                                "输入 /plan",
                                "按 Shift+Tab",
                                "按 Ctrl+C",
                                "输入 exit"
                            ],
                            correctIndex: 1,
                            explanation: "Shift+Tab 可以在不同权限模式之间循环切换。"
                        },
                        {
                            type: "scenario",
                            title: "复杂重构规划",
                            subtitle: "你需要将认证系统迁移到 OAuth2",
                            icon: "🔐",
                            conversation: [
                                { role: "system", text: "这是一个涉及多个文件的大改动" },
                                { role: "user", text: "我需要将认证系统重构为 OAuth2" }
                            ],
                            question: "在开始修改代码前，你应该先怎么做？",
                            options: [
                                "使用计划模式创建详细的迁移方案",
                                "直接开始修改认证文件",
                                "删除现有的认证代码",
                                "跳过认证功能"
                            ],
                            correctIndex: 0
                        }
                    ]
                },
                {
                    id: 6,
                    icon: "🧠",
                    questions: [
                        {
                            type: "knowledge",
                            title: "扩展思考 (Extended Thinking)",
                            content: `对于复杂问题，可以启用扩展思考让 Claude 深入分析：

<div class="code-block"><code># 使用 Tab 键切换功能开关
# 或在提示中使用关键词：

> think deeply about the best approach for implementing OAuth2
> think hard about potential security vulnerabilities
> think about edge cases we should handle</code></div>

最佳使用场景：
• 规划复杂架构更改
• 调试棘手问题
• 评估不同方案的权衡`,
                            tip: "使用 'think' 或 'think hard' 关键词触发扩展思考。"
                        },
                        {
                            type: "fill-blank",
                            question: "让 Claude 深入思考安全漏洞问题",
                            template: ["___", "about potential security vulnerabilities in this approach"],
                            blanks: [
                                { id: 0, answer: "think hard" }
                            ],
                            wordBank: ["think hard", "tell me", "show", "list"]
                        },
                        {
                            type: "multiple-choice",
                            question: "扩展思考最适合用于什么场景？",
                            options: [
                                "简单的代码格式化",
                                "复杂架构决策和调试棘手问题",
                                "列出文件列表",
                                "创建 Git 提交"
                            ],
                            correctIndex: 1,
                            explanation: "扩展思考适合需要深入分析的复杂问题。"
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Git 与协作",
            description: "学习使用 Claude Code 进行版本控制和团队协作",
            icon: "🤝",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 7,
                    icon: "📝",
                    questions: [
                        {
                            type: "knowledge",
                            title: "创建拉取请求 (PR)",
                            content: `Claude Code 可以帮你创建规范的 PR：

<div class="code-block"><code>> summarize the changes I've made to the authentication module
> create a pr
> enhance the PR description with more context
> add information about how these changes were tested</code></div>

Claude 会自动：
• 分析你的代码变更
• 生成清晰的 PR 描述
• 包含测试计划`,
                            tip: "Claude 会使用 gh 命令行工具创建 PR，确保你已安装并登录 GitHub CLI。"
                        },
                        {
                            type: "ordering",
                            question: "创建 PR 的正确步骤是？",
                            items: [
                                "总结代码变更",
                                "创建 PR",
                                "增强 PR 描述",
                                "添加测试信息"
                            ],
                            correctOrder: [0, 1, 2, 3]
                        },
                        {
                            type: "multiple-choice",
                            question: "让 Claude 创建 PR 的命令是？",
                            options: [
                                "make pr",
                                "create a pr",
                                "git pr",
                                "new pr"
                            ],
                            correctIndex: 1,
                            explanation: "直接用自然语言说 'create a pr' 即可。"
                        }
                    ]
                },
                {
                    id: 8,
                    icon: "🔀",
                    questions: [
                        {
                            type: "knowledge",
                            title: "使用 Git Worktrees 并行工作",
                            content: `Git Worktrees 让你可以同时在多个分支上运行 Claude Code：

<div class="code-block"><code># 创建新 worktree
git worktree add ../project-feature-a -b feature-a

# 在 worktree 中运行 Claude
cd ../project-feature-a
claude

# 管理 worktrees
git worktree list
git worktree remove ../project-feature-a</code></div>

优势：完全隔离的文件状态 + 并行处理多任务`,
                            tip: "每个 worktree 是独立的工作目录，可以运行独立的 Claude 会话。"
                        },
                        {
                            type: "fill-blank",
                            question: "创建一个名为 feature-a 的 worktree",
                            template: ["git worktree add ../project-feature-a", "___", "feature-a"],
                            blanks: [
                                { id: 0, answer: "-b" }
                            ],
                            wordBank: ["-b", "-m", "--new", "-create"]
                        },
                        {
                            type: "multiple-choice",
                            question: "Git Worktrees 的主要优势是什么？",
                            options: [
                                "让代码运行更快",
                                "完全隔离的文件状态，可并行处理多任务",
                                "自动合并代码",
                                "替代 Git 分支"
                            ],
                            correctIndex: 1,
                            explanation: "Worktrees 提供独立的工作目录，非常适合并行运行多个 Claude 会话。"
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "实用技巧",
            description: "掌握引用文件、使用图像、自定义命令等技巧",
            icon: "💡",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 9,
                    icon: "📎",
                    questions: [
                        {
                            type: "knowledge",
                            title: "引用文件和目录",
                            content: `使用 @ 符号可以快速引用文件和目录：

<div class="code-block"><code># 引用单个文件
> Explain the logic in @src/utils/auth.js

# 引用目录
> What's the structure of @src/components?

# 引用 MCP 资源
> Show me the data from @github:repos/owner/repo/issues</code></div>`,
                            tip: "@ 符号是快速定位代码的利器！"
                        },
                        {
                            type: "fill-blank",
                            question: "引用 src/utils/auth.js 文件",
                            template: ["Explain the logic in", "___"],
                            blanks: [
                                { id: 0, answer: "@src/utils/auth.js" }
                            ],
                            wordBank: ["@src/utils/auth.js", "src/utils/auth.js", "#src/utils/auth.js", "file:auth.js"]
                        },
                        {
                            type: "multiple-choice",
                            question: "使用什么符号引用文件？",
                            options: [
                                "#",
                                "@",
                                "$",
                                "&"
                            ],
                            correctIndex: 1,
                            explanation: "@ 符号用于引用文件、目录和 MCP 资源。"
                        }
                    ]
                },
                {
                    id: 10,
                    icon: "🖼️",
                    questions: [
                        {
                            type: "knowledge",
                            title: "使用图像",
                            content: `Claude Code 支持图像分析，你可以：

<strong>添加图像的方式：</strong>
• 拖放到 Claude Code 窗口
• 使用 <code>Ctrl+V</code> 粘贴（注意不是 Cmd+V）
• 提供图像路径

<div class="code-block"><code>> Here's a screenshot of the error. What's causing it?
> This is our current database schema. How should we modify it?
> Generate CSS to match this design mockup</code></div>`,
                            tip: "粘贴图片时使用 Ctrl+V 而不是 Cmd+V！"
                        },
                        {
                            type: "multiple-choice",
                            question: "在 Claude Code 中粘贴图片应该使用什么快捷键？",
                            options: [
                                "Cmd+V",
                                "Ctrl+V",
                                "Shift+V",
                                "Alt+V"
                            ],
                            correctIndex: 1,
                            explanation: "在 Claude Code 中粘贴图片要用 Ctrl+V，即使在 Mac 上也是如此。"
                        },
                        {
                            type: "scenario",
                            title: "UI 设计实现",
                            subtitle: "设计师给了你一个设计稿",
                            icon: "🎨",
                            conversation: [
                                { role: "system", text: "你有一张 UI 设计稿图片" }
                            ],
                            question: "如何让 Claude 根据设计稿生成代码？",
                            options: [
                                "拖放图片到窗口，然后说 'Generate CSS to match this design'",
                                "用文字描述设计稿",
                                "手动写代码",
                                "忽略设计稿"
                            ],
                            correctIndex: 0
                        }
                    ]
                },
                {
                    id: 11,
                    icon: "⚙️",
                    questions: [
                        {
                            type: "knowledge",
                            title: "自定义斜杠命令",
                            content: `你可以创建自己的斜杠命令来简化工作流程：

<div class="code-block"><code># 创建项目命令目录
mkdir -p .claude/commands

# 创建优化命令
echo "Analyze the performance of this code and suggest optimizations:" > .claude/commands/optimize.md

# 使用命令
> /optimize</code></div>

还可以使用 <code>$ARGUMENTS</code> 添加参数：

<div class="code-block"><code>echo 'Find and fix issue #$ARGUMENTS' > .claude/commands/fix-issue.md

# 使用
> /fix-issue 123</code></div>`,
                            tip: "个人命令放在 ~/.claude/commands，项目命令放在 .claude/commands"
                        },
                        {
                            type: "fill-blank",
                            question: "创建一个接受参数的命令",
                            template: ["Find and fix issue #", "___"],
                            blanks: [
                                { id: 0, answer: "$ARGUMENTS" }
                            ],
                            wordBank: ["$ARGUMENTS", "$PARAMS", "$INPUT", "$1"]
                        },
                        {
                            type: "multiple-choice",
                            question: "项目特定的斜杠命令应该放在哪里？",
                            options: [
                                "~/.claude/commands",
                                ".claude/commands",
                                "/usr/local/claude",
                                "node_modules/.claude"
                            ],
                            correctIndex: 1,
                            explanation: "项目命令放在项目根目录的 .claude/commands，个人命令放在 ~/.claude/commands"
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "会话与管道",
            description: "恢复对话、管道操作和输出格式控制",
            icon: "🔄",
            sourceUrl: "https://code.claude.com/docs/zh-CN/common-workflows",
            lessons: [
                {
                    id: 12,
                    icon: "💬",
                    questions: [
                        {
                            type: "knowledge",
                            title: "恢复之前的对话",
                            content: `Claude Code 会自动保存你的对话，你可以随时恢复：

<div class="code-block"><code># 继续最近的对话
claude --continue

# 非交互模式继续
claude --continue --print "Continue with my task"

# 显示对话选择器
claude --resume</code></div>

恢复的内容包括：
• 完整消息历史
• 工具使用和结果
• 完整上下文`,
                            tip: "使用 --continue 快速恢复上一次对话！"
                        },
                        {
                            type: "multiple-choice",
                            question: "继续最近一次对话的命令是？",
                            options: [
                                "claude --resume",
                                "claude --continue",
                                "claude --restore",
                                "claude --last"
                            ],
                            correctIndex: 1,
                            explanation: "--continue 继续最近的对话，--resume 显示对话选择器。"
                        },
                        {
                            type: "fill-blank",
                            question: "显示对话选择器的命令",
                            template: ["claude", "___"],
                            blanks: [
                                { id: 0, answer: "--resume" }
                            ],
                            wordBank: ["--resume", "--continue", "--list", "--history"]
                        }
                    ]
                },
                {
                    id: 13,
                    icon: "📤",
                    questions: [
                        {
                            type: "knowledge",
                            title: "管道操作",
                            content: `Claude Code 可以像 Unix 工具一样使用管道：

<div class="code-block"><code># 管道输入，管道输出
cat build-error.txt | claude -p 'explain the root cause' > output.txt

# 控制输出格式
cat data.txt | claude -p 'summarize' --output-format text
cat code.py | claude -p 'analyze bugs' --output-format json
cat log.txt | claude -p 'parse errors' --output-format stream-json</code></div>

输出格式：
• <code>text</code> - 纯文本（默认）
• <code>json</code> - JSON 格式
• <code>stream-json</code> - 流式 JSON`,
                            tip: "-p 参数后面跟着你的提示词，用于非交互模式。"
                        },
                        {
                            type: "ordering",
                            question: "正确的管道命令顺序是？",
                            items: [
                                "cat build-error.txt",
                                "|",
                                "claude -p 'explain the error'",
                                ">",
                                "output.txt"
                            ],
                            correctOrder: [0, 1, 2, 3, 4]
                        },
                        {
                            type: "multiple-choice",
                            question: "获取 JSON 格式输出应该用什么参数？",
                            options: [
                                "--format json",
                                "--output-format json",
                                "--json",
                                "-j"
                            ],
                            correctIndex: 1,
                            explanation: "使用 --output-format json 指定 JSON 输出格式。"
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "子代理",
            description: "学习创建和使用专业化的子代理",
            icon: "🤖",
            sourceUrl: "https://code.claude.com/docs/zh-CN/sub-agents",
            lessons: [
                {
                    id: 14,
                    icon: "👋",
                    questions: [
                        {
                            type: "knowledge",
                            title: "什么是子代理？",
                            content: `子代理（Sub-agents）是 Claude Code 中的专门 AI 助手，可以被主 Claude 调用来处理特定类型的任务。

<strong>核心特点：</strong>
• 独立的上下文窗口
• 自定义系统提示
• 特定工具访问权限
• 与主对话分离，防止上下文污染`,
                            tip: "子代理就像专家顾问，主 Claude 可以随时召唤它们处理专业问题！"
                        },
                        {
                            type: "multiple-choice",
                            question: "以下哪项不是子代理的主要优势？",
                            options: [
                                "自动生成文档",
                                "上下文保留 - 主对话保持聚焦",
                                "专业化专业知识 - 针对特定领域微调",
                                "可重用性 - 跨项目使用和团队共享"
                            ],
                            correctIndex: 0,
                            explanation: "子代理的四大优势是：上下文保留、专业化专业知识、可重用性和灵活的权限。自动生成文档不是子代理的优势，这是它可能执行的任务，不是架构优势。"
                        },
                        {
                            type: "knowledge",
                            title: "子代理配置文件放在哪里？",
                            content: `子代理配置文件可以放在两个位置：

<strong>项目级别：</strong>
<div class="code-block"><code>.claude/agents/</code></div>

<strong>用户级别：</strong>
<div class="code-block"><code>~/.claude/agents/</code></div>

<strong>优先级顺序：</strong>
项目级别 > 用户级别 > CLI定义`,
                            tip: "项目级别的配置优先级最高，适合定义项目专用的子代理！"
                        }
                    ]
                },
                {
                    id: 15,
                    icon: "⚙️",
                    questions: [
                        {
                            type: "fill-blank",
                            question: "子代理配置文件的格式是什么？",
                            template: ["子代理配置文件使用 ", "___", " 前置内容 + Markdown 格式"],
                            blanks: [
                                { id: 0, answer: "YAML" }
                            ],
                            wordBank: ["YAML", "JSON", "TOML", "XML"]
                        },
                        {
                            type: "multiple-choice",
                            question: "在子代理配置中，哪两个字段是必需的？",
                            options: [
                                "name 和 description",
                                "name 和 tools",
                                "description 和 model",
                                "tools 和 model"
                            ],
                            correctIndex: 0,
                            explanation: "name（唯一标识符）和 description（目的描述）是必需字段。tools 和 model 是可选的，省略 tools 则继承所有工具，省略 model 则使用默认模型。"
                        },
                        {
                            type: "fill-blank",
                            question: "如果想让子代理使用与主对话相同的模型，应该将 model 字段设置为什么？",
                            template: ["model: ", "___"],
                            blanks: [
                                { id: 0, answer: "inherit" }
                            ],
                            wordBank: ["inherit", "same", "parent", "default"]
                        }
                    ]
                },
                {
                    id: 16,
                    icon: "🔧",
                    questions: [
                        {
                            type: "multiple-choice",
                            question: "以下哪个不是子代理支持的模型别名？",
                            options: [
                                "gpt-4",
                                "sonnet",
                                "opus",
                                "haiku"
                            ],
                            correctIndex: 0,
                            explanation: "子代理支持的模型别名包括：sonnet、opus、haiku，以及 inherit（继承主对话模型）。gpt-4 是 OpenAI 的模型，不属于 Claude 系列。"
                        },
                        {
                            type: "ordering",
                            question: "使用 /agents 命令创建子代理的正确步骤顺序是什么？",
                            items: [
                                "运行 /agents 命令",
                                "选择「创建新代理」",
                                "定义配置（name、description 等）",
                                "保存配置文件"
                            ],
                            correctOrder: [0, 1, 2, 3]
                        },
                        {
                            type: "fill-blank",
                            question: "如果想让子代理只能使用 Read、Grep 和 Glob 工具，应该如何配置？",
                            template: ["tools: Read, ", "___", ", Glob"],
                            blanks: [
                                { id: 0, answer: "Grep" }
                            ],
                            wordBank: ["Grep", "Search", "Find", "Query"]
                        }
                    ]
                },
                {
                    id: 17,
                    icon: "🎯",
                    questions: [
                        {
                            type: "scenario",
                            title: "代码审查自动化",
                            subtitle: "你刚完成了一段重要的代码修改",
                            icon: "🔍",
                            conversation: [
                                { role: "system", text: "你在项目中配置了一个 code-reviewer 子代理，description 包含 \"修改代码后立即使用\"" },
                                { role: "user", text: "我刚修改了用户认证模块" },
                                { role: "system", text: "Claude 检测到代码修改与 code-reviewer 的 description 匹配" }
                            ],
                            question: "在这种情况下，Claude 会如何处理？",
                            options: [
                                "自动调用 code-reviewer 子代理进行代码审查",
                                "询问用户是否需要代码审查",
                                "忽略，因为用户没有显式要求审查",
                                "报错，因为子代理不能自动调用"
                            ],
                            correctIndex: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "如果想让 Claude 主动使用某个子代理，应该在 description 中包含什么关键词？",
                            options: [
                                "use PROACTIVELY 或 MUST BE USED",
                                "AUTO_RUN 或 ALWAYS_USE",
                                "REQUIRED 或 MANDATORY",
                                "DEFAULT 或 PRIMARY"
                            ],
                            correctIndex: 0,
                            explanation: "在 description 中包含 \"use PROACTIVELY\" 或 \"MUST BE USED\" 可以鼓励 Claude 主动使用该子代理，而不是等待用户显式调用。"
                        },
                        {
                            type: "scenario",
                            title: "长时间任务处理",
                            subtitle: "你需要分析一个大型模块的代码",
                            icon: "🔄",
                            conversation: [
                                { role: "user", text: "Use the code-analyzer agent to start reviewing auth module" },
                                { role: "system", text: "子代理开始分析，返回 agentId: \"abc123\"，但分析中断了" },
                                { role: "user", text: "需要继续之前的分析工作" }
                            ],
                            question: "如何继续之前中断的子代理任务？",
                            options: [
                                "使用 Resume agent abc123 命令恢复子代理",
                                "重新运行相同的命令",
                                "删除并重建子代理",
                                "无法恢复，只能重新开始"
                            ],
                            correctIndex: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "插件系统",
            description: "学习创建和管理 Claude Code 插件",
            icon: "🔌",
            sourceUrl: "https://code.claude.com/docs/zh-CN/plugins",
            lessons: [
                {
                    id: 18,
                    icon: "👋",
                    questions: [
                        {
                            type: "knowledge",
                            title: "什么是插件？",
                            content: `插件（Plugins）是通过自定义命令、代理、钩子、技能和 MCP 服务器来扩展 Claude Code 功能的可复用模块。

<strong>插件可以包含：</strong>
• 自定义斜杠命令（commands/）
• 自定义代理（agents/）
• 代理技能（skills/）
• 事件钩子（hooks/）
• MCP 服务器配置（.mcp.json）`,
                            tip: "插件可以在项目和团队中共享，是扩展 Claude Code 的最佳方式！"
                        },
                        {
                            type: "multiple-choice",
                            question: "以下哪项不是插件可以扩展的功能？",
                            options: [
                                "修改 Claude 的底层模型",
                                "自定义斜杠命令",
                                "代理技能（Skills）",
                                "MCP 服务器集成"
                            ],
                            correctIndex: 0,
                            explanation: "插件可以扩展命令、代理、技能、钩子和 MCP 服务器，但不能修改 Claude 的底层模型。"
                        },
                        {
                            type: "knowledge",
                            title: "插件目录结构",
                            content: `一个完整的插件目录结构：

<div class="code-block"><code>my-plugin/
├── .claude-plugin/
│   └── plugin.json      # 插件元数据（必需）
├── commands/            # 自定义命令
├── agents/              # 自定义代理
├── skills/              # 代理技能
├── hooks/               # 事件钩子
└── .mcp.json           # MCP 配置</code></div>`,
                            tip: "只有 .claude-plugin/plugin.json 是必需的，其他目录都是可选的！"
                        }
                    ]
                },
                {
                    id: 19,
                    icon: "⚙️",
                    questions: [
                        {
                            type: "fill-blank",
                            question: "插件的元数据配置文件放在哪里？",
                            template: ["插件元数据文件位于 ", "___", "/plugin.json"],
                            blanks: [
                                { id: 0, answer: ".claude-plugin" }
                            ],
                            wordBank: [".claude-plugin", ".claude", "config", ".plugin"]
                        },
                        {
                            type: "multiple-choice",
                            question: "plugin.json 中哪些字段是必需的？",
                            options: [
                                "name、version、description、author",
                                "name、commands、agents",
                                "version、hooks、skills",
                                "description、mcp、settings"
                            ],
                            correctIndex: 0,
                            explanation: "plugin.json 必须包含 name（唯一标识符）、version（语义版本）、description（功能说明）和 author（作者信息）四个必需字段。"
                        },
                        {
                            type: "fill-blank",
                            question: "安装一个名为 formatter 的插件，来自 your-org 市场：",
                            template: ["/plugin install ", "___"],
                            blanks: [
                                { id: 0, answer: "formatter@your-org" }
                            ],
                            wordBank: ["formatter@your-org", "your-org/formatter", "formatter from your-org", "formatter"]
                        }
                    ]
                },
                {
                    id: 20,
                    icon: "🛠️",
                    questions: [
                        {
                            type: "ordering",
                            question: "创建一个新插件的正确步骤顺序是什么？",
                            items: [
                                "创建插件目录结构",
                                "创建 .claude-plugin/plugin.json",
                                "添加命令/代理/技能等组件",
                                "创建市场清单 marketplace.json",
                                "安装并测试插件"
                            ],
                            correctOrder: [0, 1, 2, 3, 4]
                        },
                        {
                            type: "multiple-choice",
                            question: "如何浏览和管理已安装的插件？",
                            options: [
                                "/plugin",
                                "/plugins list",
                                "/show plugins",
                                "/manage plugins"
                            ],
                            correctIndex: 0,
                            explanation: "使用 /plugin 命令可以打开交互式菜单，浏览市场、安装插件、管理已安装的插件等。"
                        },
                        {
                            type: "fill-blank",
                            question: "添加一个本地开发市场：",
                            template: ["/plugin marketplace add ", "___"],
                            blanks: [
                                { id: 0, answer: "./dev-marketplace" }
                            ],
                            wordBank: ["./dev-marketplace", "dev-marketplace", "local:dev-marketplace", "--local dev-marketplace"]
                        }
                    ]
                },
                {
                    id: 21,
                    icon: "🎯",
                    questions: [
                        {
                            type: "scenario",
                            title: "本地插件开发",
                            subtitle: "你正在开发一个新插件，需要反复测试",
                            icon: "🔧",
                            conversation: [
                                { role: "system", text: "你修改了插件的命令文件" },
                                { role: "user", text: "修改后如何让更改生效？" },
                                { role: "system", text: "Claude Code 不会自动重新加载插件" }
                            ],
                            question: "如何让插件修改生效？",
                            options: [
                                "卸载并重新安装插件",
                                "重启电脑",
                                "运行 /plugin refresh",
                                "修改会自动生效"
                            ],
                            correctIndex: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "如何为团队自动配置插件？",
                            options: [
                                "在项目的 .claude/settings.json 中配置 plugins",
                                "让每个人手动安装",
                                "在 package.json 中添加依赖",
                                "使用环境变量配置"
                            ],
                            correctIndex: 0,
                            explanation: "在项目的 .claude/settings.json 中配置 plugins.marketplaces 和 plugins.installed，可以为团队成员自动安装指定插件。"
                        },
                        {
                            type: "scenario",
                            title: "插件调试",
                            subtitle: "你安装了插件但命令没有出现",
                            icon: "🔍",
                            conversation: [
                                { role: "user", text: "/plugin install my-plugin@dev" },
                                { role: "system", text: "安装成功" },
                                { role: "user", text: "/my-command" },
                                { role: "system", text: "命令未找到" }
                            ],
                            question: "最可能的原因是什么？",
                            options: [
                                "命令目录不在插件根目录，或 plugin.json 格式错误",
                                "需要付费才能使用",
                                "Claude Code 版本太低",
                                "网络连接问题"
                            ],
                            correctIndex: 0
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "Agent Skills",
            description: "了解 Claude 的模块化扩展能力",
            icon: "🧩",
            sourceUrl: "https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/overview",
            lessons: [
                {
                    id: 22,
                    icon: "📚",
                    questions: [
                        {
                            type: "knowledge",
                            title: "什么是 Agent Skills？",
                            content: `Agent Skills 是扩展 Claude 功能的<strong>模块化能力</strong>。

每个 Skill 包含：
• 指令（Instructions）
• 元数据（Metadata）
• 可选资源（脚本、模板等）

Claude 在相关时会<strong>自动使用</strong>这些 Skills，无需每次对话重复提供指导。`,
                            tip: "Skills 就像给 Claude 配备的专业工具箱，按需取用！"
                        },
                        {
                            type: "multiple-choice",
                            question: "Agent Skills 与普通提示（Prompt）的主要区别是什么？",
                            options: [
                                "Skills 是一次性的，提示是可重用的",
                                "Skills 按需加载且可重用，提示是对话级别的一次性指令",
                                "Skills 只能用于代码任务，提示可用于所有任务",
                                "Skills 需要付费，提示免费使用"
                            ],
                            correctIndex: 1,
                            explanation: "Skills 是可重用的、基于文件系统的资源，按需加载；而提示是对话级别的一次性任务指令，需要在每次对话中重复提供。"
                        },
                        {
                            type: "knowledge",
                            title: "Skills 的渐进式加载",
                            content: `Skills 采用<strong>渐进式披露</strong>机制，分三个级别加载：

<strong>第 1 级：元数据</strong>（始终加载）
• YAML 前置数据中的 name 和 description
• 约 100 tokens/Skill

<strong>第 2 级：指令</strong>（触发时加载）
• SKILL.md 主体内容
• 通常 < 5k tokens

<strong>第 3 级：资源</strong>（按需加载）
• 脚本、参考文件等
• 通过 bash 执行，不占上下文`,
                            tip: "这种设计意味着你可以安装很多 Skills，但只有用到的才会消耗 token！"
                        }
                    ]
                },
                {
                    id: 23,
                    icon: "⚙️",
                    questions: [
                        {
                            type: "multiple-choice",
                            question: "Skill 的元数据（name 和 description）在什么时候加载到上下文中？",
                            options: [
                                "用户请求相关任务时",
                                "Claude 读取 SKILL.md 时",
                                "启动时就加载到系统提示中",
                                "执行脚本时"
                            ],
                            correctIndex: 2,
                            explanation: "元数据（第 1 级）在启动时就加载到系统提示中，这样 Claude 才能知道有哪些 Skills 可用以及何时使用它们。"
                        },
                        {
                            type: "fill-blank",
                            question: "每个 Skill 都需要一个 SKILL.md 文件，其中 YAML 前置数据必须包含两个必需字段。",
                            template: ["YAML 前置数据必须包含 ", "___", " 和 ", "___", " 两个字段"],
                            blanks: [
                                { id: 0, answer: "name" },
                                { id: 1, answer: "description" }
                            ],
                            wordBank: ["name", "description", "title", "version", "author", "instructions"]
                        },
                        {
                            type: "multiple-choice",
                            question: "以下哪个 Skill name 是有效的？",
                            options: [
                                "My_Awesome_Skill",
                                "pdf-processing",
                                "Claude-Helper",
                                "anthropic-skill"
                            ],
                            correctIndex: 1,
                            explanation: "name 只能包含小写字母、数字和连字符，且不能包含保留字「anthropic」或「claude」。所以只有 pdf-processing 是有效的。"
                        }
                    ]
                },
                {
                    id: 24,
                    icon: "🔄",
                    questions: [
                        {
                            type: "ordering",
                            question: "请按正确顺序排列 Claude 加载和使用 PDF 处理 Skill 的步骤：",
                            items: [
                                "系统提示包含 Skill 元数据（name 和 description）",
                                "用户请求：「从此 PDF 中提取文本并总结」",
                                "Claude 通过 bash 读取 pdf-skill/SKILL.md",
                                "Claude 根据指令完成任务"
                            ],
                            correctOrder: [0, 1, 2, 3]
                        },
                        {
                            type: "multiple-choice",
                            question: "当 Claude 运行 Skill 中的脚本（如 validate_form.py）时，会发生什么？",
                            options: [
                                "脚本代码和输出都加载到上下文窗口",
                                "只有脚本代码加载到上下文，输出被丢弃",
                                "只有脚本输出进入上下文，代码本身不加载",
                                "脚本在用户本地机器上执行"
                            ],
                            correctIndex: 2,
                            explanation: "脚本通过 bash 执行，只有输出（如「验证通过」或错误消息）消耗 token。脚本代码永远不会加载到上下文窗口中，这使得脚本比让 Claude 即时生成代码更高效。"
                        },
                        {
                            type: "scenario",
                            title: "跨平台 Skills 管理",
                            subtitle: "团队协作场景",
                            icon: "👥",
                            conversation: [
                                { role: "system", text: "你是一个团队的技术负责人，需要让团队成员共享自定义 Skills。" },
                                { role: "user", text: "我想创建一个自定义 Skill，让整个团队都能使用，应该怎么做？" },
                                { role: "system", text: "不同平台的 Skills 共享范围不同..." }
                            ],
                            question: "如果你想让自定义 Skill 在整个工作区/团队内共享，应该选择哪个平台？",
                            options: [
                                "Claude API（工作区范围共享）",
                                "Claude.ai（仅限个人）",
                                "Claude Code 个人目录（~/.claude/skills/）",
                                "以上都可以"
                            ],
                            correctIndex: 0
                        }
                    ]
                },
                {
                    id: 25,
                    icon: "🔒",
                    questions: [
                        {
                            type: "fill-blank",
                            question: "Anthropic 提供了 4 种预构建的 Agent Skills，用于处理常见文档任务。",
                            template: ["预构建 Skills 包括：PowerPoint (", "___", ")、Excel (", "___", ")、Word (docx)、PDF (pdf)"],
                            blanks: [
                                { id: 0, answer: "pptx" },
                                { id: 1, answer: "xlsx" }
                            ],
                            wordBank: ["pptx", "xlsx", "ppt", "xls", "doc", "txt"]
                        },
                        {
                            type: "multiple-choice",
                            question: "Skills 在代码执行容器中运行时，以下哪项是正确的？",
                            options: [
                                "可以自由访问互联网和外部 API",
                                "可以在运行时安装任何需要的包",
                                "无网络访问，只能使用预安装的包",
                                "可以访问用户本地文件系统"
                            ],
                            correctIndex: 2,
                            explanation: "Skills 在代码执行容器中运行，无法进行外部 API 调用或访问互联网，也无法在运行时安装新包，只能使用预安装的包。"
                        },
                        {
                            type: "scenario",
                            title: "Skill 安全评估",
                            subtitle: "来自未知来源的 Skill",
                            icon: "🔒",
                            conversation: [
                                { role: "system", text: "你的同事分享了一个从网上下载的 Skill，声称可以自动化报告生成。" },
                                { role: "user", text: "这个 Skill 看起来很有用，我可以直接使用吗？" },
                                { role: "system", text: "你打开 Skill 目录，发现里面有多个 .py 脚本和一个 SKILL.md 文件..." }
                            ],
                            question: "在使用这个来自未知来源的 Skill 之前，你应该怎么做？",
                            options: [
                                "彻底审计所有文件：SKILL.md、脚本和其他资源，检查异常网络调用或文件访问模式",
                                "只检查 SKILL.md 文件即可，脚本不重要",
                                "直接使用，因为 Skills 在沙箱中运行很安全",
                                "只要文件大小不大就可以信任"
                            ],
                            correctIndex: 0
                        }
                    ]
                }
            ]
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}
