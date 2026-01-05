// Claude Code 学习课程数据
const courseData = {
    units: [
        {
            id: 1,
            title: "入门基础",
            description: "了解 Claude Code 的基本使用",
            icon: "🚀",
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
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}
