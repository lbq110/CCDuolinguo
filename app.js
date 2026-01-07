// Claude Code 多邻国风格学习应用

class ClaudeCodeLearning {
    constructor() {
        // 状态管理
        this.state = {
            xp: 0,
            streak: 0,
            hearts: 5,
            completedLessons: [],
            currentUnit: null,
            currentLesson: null,
            currentQuestionIndex: 0,
            correctAnswers: 0,
            totalQuestions: 0,
            selectedAnswer: null,
            filledBlanks: {},
            sortedItems: []
        };

        // 初始化音频上下文
        this.audioContext = null;

        // 从 localStorage 加载进度
        this.loadProgress();

        // DOM 元素
        this.elements = {
            courseMap: document.getElementById('courseMap'),
            lessonView: document.getElementById('lessonView'),
            completeView: document.getElementById('completeView'),
            skillTree: document.getElementById('skillTree'),
            lessonContent: document.getElementById('lessonContent'),
            lessonProgress: document.getElementById('lessonProgress'),
            checkBtn: document.getElementById('checkBtn'),
            backBtn: document.getElementById('backBtn'),
            continueBtn: document.getElementById('continueBtn'),
            xpCount: document.getElementById('xpCount'),
            streakCount: document.getElementById('streakCount'),
            heartCount: document.getElementById('heartCount'),
            earnedXp: document.getElementById('earnedXp'),
            accuracy: document.getElementById('accuracy')
        };

        // 绑定事件
        this.bindEvents();

        // 初始化渲染
        this.renderSkillTree();
        this.updateStats();
    }

    // 初始化音频上下文（需要用户交互后才能创建）
    initAudio() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        // 确保音频上下文处于运行状态
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    // 播放正确音效
    playCorrectSound() {
        this.initAudio();
        const ctx = this.audioContext;

        // 创建两个音调，形成愉快的"叮咚"声
        const playTone = (freq, startTime, duration) => {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        };

        const now = ctx.currentTime;
        playTone(523.25, now, 0.15);        // C5
        playTone(659.25, now + 0.1, 0.2);   // E5
        playTone(783.99, now + 0.2, 0.3);   // G5
    }

    // 播放错误音效
    playIncorrectSound() {
        this.initAudio();
        const ctx = this.audioContext;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';

        const now = ctx.currentTime;
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        oscillator.start(now);
        oscillator.stop(now + 0.3);
    }

    // 播放完成课程音效
    playCompleteSound() {
        this.initAudio();
        const ctx = this.audioContext;

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

        notes.forEach((freq, i) => {
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            const startTime = ctx.currentTime + i * 0.15;
            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);

            oscillator.start(startTime);
            oscillator.stop(startTime + 0.4);
        });
    }

    // 播放移动音效（拖拽时）
    playMoveSound() {
        this.initAudio();
        const ctx = this.audioContext;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = 880; // A5
        oscillator.type = 'sine';

        const now = ctx.currentTime;
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        oscillator.start(now);
        oscillator.stop(now + 0.08);
    }

    // 加载保存的进度
    loadProgress() {
        const saved = localStorage.getItem('claudeCodeProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.state.xp = data.xp || 0;
            this.state.streak = data.streak || 0;
            this.state.completedLessons = data.completedLessons || [];
        }
    }

    // 保存进度
    saveProgress() {
        localStorage.setItem('claudeCodeProgress', JSON.stringify({
            xp: this.state.xp,
            streak: this.state.streak,
            completedLessons: this.state.completedLessons
        }));
    }

    // 绑定事件
    bindEvents() {
        this.elements.checkBtn.addEventListener('click', () => this.handleCheck());
        this.elements.backBtn.addEventListener('click', () => this.exitLesson());
        this.elements.continueBtn.addEventListener('click', () => this.returnToMap());
    }

    // 更新统计显示
    updateStats() {
        this.elements.xpCount.textContent = this.state.xp;
        this.elements.streakCount.textContent = this.state.streak;
        this.elements.heartCount.textContent = this.state.hearts;
    }

    // 复制来源链接
    copySourceUrl(url, btn) {
        navigator.clipboard.writeText(url).then(() => {
            const originalText = btn.textContent;
            btn.textContent = '✓ 已复制';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            // 降级方案
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            const originalText = btn.textContent;
            btn.textContent = '✓ 已复制';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        });
    }

    // 渲染技能树
    renderSkillTree() {
        this.elements.skillTree.innerHTML = '';

        courseData.units.forEach((unit, unitIndex) => {
            const unitEl = document.createElement('div');
            unitEl.className = 'skill-unit';

            // 单元头部
            const headerEl = document.createElement('div');
            headerEl.className = 'unit-header';
            headerEl.innerHTML = `
                <div class="unit-title">${unit.icon} ${unit.title}</div>
                <div class="unit-description">${unit.description}</div>
                ${unit.sourceUrl ? `
                    <button class="source-link-btn" data-url="${unit.sourceUrl}" title="复制参考链接">
                        📎 参考文档
                    </button>
                ` : ''}
            `;

            // 绑定复制按钮事件
            const copyBtn = headerEl.querySelector('.source-link-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.copySourceUrl(copyBtn.dataset.url, copyBtn);
                });
            }

            unitEl.appendChild(headerEl);

            // 课程列表
            const lessonsEl = document.createElement('div');
            lessonsEl.className = 'unit-lessons';

            unit.lessons.forEach((lesson, lessonIndex) => {
                // 确定课程状态
                const isCompleted = this.state.completedLessons.includes(lesson.id);
                const prevLesson = lessonIndex > 0 ? unit.lessons[lessonIndex - 1] : null;
                const prevUnitLastLesson = unitIndex > 0 ?
                    courseData.units[unitIndex - 1].lessons.slice(-1)[0] : null;

                // 所有课程都解锁，不需要按顺序完成
                const isUnlocked = true;

                // 连接线
                if (lessonIndex > 0) {
                    const connector = document.createElement('div');
                    connector.className = `lesson-connector ${
                        this.state.completedLessons.includes(unit.lessons[lessonIndex - 1].id) ? 'active' : ''
                    }`;
                    lessonsEl.appendChild(connector);
                }

                // 课程气泡
                const bubbleEl = document.createElement('button');
                bubbleEl.className = `lesson-bubble ${
                    isCompleted ? 'completed' :
                    isUnlocked ? 'available' : 'locked'
                }`;
                bubbleEl.textContent = lesson.icon;

                if (isUnlocked) {
                    bubbleEl.addEventListener('click', () => this.startLesson(unit, lesson));
                }

                lessonsEl.appendChild(bubbleEl);
            });

            unitEl.appendChild(lessonsEl);
            this.elements.skillTree.appendChild(unitEl);
        });
    }

    // 开始课程
    startLesson(unit, lesson) {
        // 在用户交互时预先初始化音频
        this.initAudio();

        this.state.currentUnit = unit;
        this.state.currentLesson = lesson;
        this.state.currentQuestionIndex = 0;
        this.state.correctAnswers = 0;
        this.state.totalQuestions = lesson.questions.length;
        this.state.hearts = 5;
        this.state.selectedAnswer = null;
        this.state.filledBlanks = {};
        this.state.sortedItems = [];

        this.elements.courseMap.classList.add('hidden');
        this.elements.lessonView.classList.remove('hidden');

        this.updateProgress();
        this.renderQuestion();
        this.updateStats();
    }

    // 更新进度条
    updateProgress() {
        const progress = (this.state.currentQuestionIndex / this.state.totalQuestions) * 100;
        this.elements.lessonProgress.style.width = `${progress}%`;
    }

    // 渲染当前问题
    renderQuestion() {
        const question = this.state.currentLesson.questions[this.state.currentQuestionIndex];
        this.state.selectedAnswer = null;
        this.state.filledBlanks = {};
        this.elements.checkBtn.disabled = true;
        this.elements.checkBtn.textContent = '检查';
        this.elements.checkBtn.className = 'check-btn';

        // 移除之前的反馈
        const oldFeedback = document.querySelector('.feedback-message');
        if (oldFeedback) oldFeedback.remove();

        let html = '<div class="question-container">';

        switch (question.type) {
            case 'knowledge':
                html += this.renderKnowledge(question);
                this.elements.checkBtn.disabled = false;
                this.elements.checkBtn.textContent = '继续';
                break;
            case 'multiple-choice':
                html += this.renderMultipleChoice(question);
                break;
            case 'fill-blank':
                html += this.renderFillBlank(question);
                break;
            case 'ordering':
                html += this.renderOrdering(question);
                break;
            case 'scenario':
                html += this.renderScenario(question);
                break;
        }

        html += '</div>';
        this.elements.lessonContent.innerHTML = html;

        // 绑定题型特定事件
        this.bindQuestionEvents(question);
    }

    // 渲染知识讲解
    renderKnowledge(question) {
        return `
            <div class="knowledge-card">
                <div class="knowledge-title">${question.title}</div>
                <div class="knowledge-content">${question.content}</div>
                ${question.tip ? `
                    <div class="tip-box">
                        <strong>💡 提示：</strong>${question.tip}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // 渲染选择题
    renderMultipleChoice(question) {
        return `
            <div class="question-type">选择正确答案</div>
            <div class="question-text">${question.question}</div>
            <div class="options-list">
                ${question.options.map((opt, idx) => `
                    <div class="option-item" data-index="${idx}">${opt}</div>
                `).join('')}
            </div>
        `;
    }

    // 渲染填空题
    renderFillBlank(question) {
        // 构建填空模板
        let templateHtml = question.template.map((part, idx) => {
            if (part === '___') {
                const blankId = question.blanks.findIndex(b =>
                    question.template.slice(0, idx + 1).filter(p => p === '___').length - 1 === b.id
                );
                return `<span class="blank-slot" data-blank-id="${blankId >= 0 ? blankId : 0}"></span>`;
            }
            return `<span>${part}</span>`;
        }).join(' ');

        return `
            <div class="question-type">填入正确的词汇</div>
            <div class="question-text">${question.question}</div>
            <div class="fill-blank-container">
                ${templateHtml}
            </div>
            <div class="word-bank">
                ${question.wordBank.map(word => `
                    <div class="word-chip" data-word="${word}">${word}</div>
                `).join('')}
            </div>
        `;
    }

    // 渲染排序题
    renderOrdering(question) {
        // 打乱顺序
        const shuffled = [...question.items].sort(() => Math.random() - 0.5);
        this.state.sortedItems = shuffled.map((_, idx) => idx);

        return `
            <div class="question-type">拖拽排列正确顺序</div>
            <div class="question-text">${question.question}</div>
            <div class="sortable-list">
                ${shuffled.map((item, idx) => `
                    <div class="sortable-item" draggable="true" data-index="${idx}" data-original="${question.items.indexOf(item)}">
                        <span class="drag-handle">☰</span>
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 渲染场景题
    renderScenario(question) {
        return `
            <div class="scenario-container">
                <div class="scenario-header">
                    <div class="scenario-icon">${question.icon}</div>
                    <div>
                        <div class="scenario-title">${question.title}</div>
                        <div class="scenario-subtitle">${question.subtitle}</div>
                    </div>
                </div>
                ${question.conversation.map(msg => `
                    <div class="chat-bubble ${msg.role}">${msg.text}</div>
                `).join('')}
                <div class="question-text" style="margin-top: 20px;">${question.question}</div>
                <div class="options-list">
                    ${question.options.map((opt, idx) => `
                        <div class="option-item" data-index="${idx}">${opt}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 绑定题型事件
    bindQuestionEvents(question) {
        switch (question.type) {
            case 'multiple-choice':
            case 'scenario':
                document.querySelectorAll('.option-item').forEach(item => {
                    item.addEventListener('click', () => this.selectOption(item));
                });
                break;
            case 'fill-blank':
                document.querySelectorAll('.word-chip').forEach(chip => {
                    chip.addEventListener('click', () => this.selectWord(chip, question));
                });
                document.querySelectorAll('.blank-slot').forEach(slot => {
                    slot.addEventListener('click', () => this.clearBlank(slot));
                });
                break;
            case 'ordering':
                this.initDragAndDrop();
                break;
        }
    }

    // 选择选项
    selectOption(item) {
        document.querySelectorAll('.option-item').forEach(opt => {
            opt.classList.remove('selected');
        });
        item.classList.add('selected');
        this.state.selectedAnswer = parseInt(item.dataset.index);
        this.elements.checkBtn.disabled = false;
    }

    // 选择词汇填空
    selectWord(chip, question) {
        if (chip.classList.contains('used')) return;

        const emptySlot = document.querySelector('.blank-slot:not(.filled)');
        if (!emptySlot) return;

        const blankId = parseInt(emptySlot.dataset.blankId);
        chip.classList.add('used');
        emptySlot.classList.add('filled');
        emptySlot.textContent = chip.dataset.word;
        emptySlot.dataset.word = chip.dataset.word;

        this.state.filledBlanks[blankId] = chip.dataset.word;

        // 检查是否所有空都填完了
        const allFilled = document.querySelectorAll('.blank-slot:not(.filled)').length === 0;
        this.elements.checkBtn.disabled = !allFilled;
    }

    // 清除填空
    clearBlank(slot) {
        if (!slot.classList.contains('filled')) return;

        const word = slot.dataset.word;
        const chip = document.querySelector(`.word-chip[data-word="${word}"]`);
        if (chip) chip.classList.remove('used');

        slot.classList.remove('filled');
        slot.textContent = '';
        delete slot.dataset.word;

        const blankId = parseInt(slot.dataset.blankId);
        delete this.state.filledBlanks[blankId];

        this.elements.checkBtn.disabled = true;
    }

    // 初始化拖拽
    initDragAndDrop() {
        const list = document.querySelector('.sortable-list');
        let draggedItem = null;
        let lastPosition = null;

        document.querySelectorAll('.sortable-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedItem = item;
                item.classList.add('dragging');
                lastPosition = Array.from(list.children).indexOf(item);
            });

            item.addEventListener('dragend', () => {
                item.classList.remove('dragging');
                draggedItem = null;
                lastPosition = null;
                this.elements.checkBtn.disabled = false;
            });

            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                if (draggedItem && draggedItem !== item) {
                    const rect = item.getBoundingClientRect();
                    const midY = rect.top + rect.height / 2;
                    const oldPosition = Array.from(list.children).indexOf(draggedItem);

                    if (e.clientY < midY) {
                        list.insertBefore(draggedItem, item);
                    } else {
                        list.insertBefore(draggedItem, item.nextSibling);
                    }

                    // 检查位置是否真的变化了
                    const newPosition = Array.from(list.children).indexOf(draggedItem);
                    if (newPosition !== oldPosition) {
                        this.playMoveSound();
                    }
                }
            });
        });

        // 默认启用检查按钮
        this.elements.checkBtn.disabled = false;
    }

    // 处理检查/继续按钮
    handleCheck() {
        const question = this.state.currentLesson.questions[this.state.currentQuestionIndex];

        // 知识类型直接进入下一题（自动计为正确）
        if (question.type === 'knowledge') {
            this.state.correctAnswers++;
            this.nextQuestion();
            return;
        }

        // 如果已经显示反馈，进入下一题
        if (this.elements.checkBtn.classList.contains('next-btn')) {
            this.nextQuestion();
            return;
        }

        // 检查答案
        const isCorrect = this.checkAnswer(question);
        this.showFeedback(isCorrect, question);

        if (isCorrect) {
            this.state.correctAnswers++;
        } else {
            this.state.hearts--;
            this.updateStats();
        }

        this.elements.checkBtn.textContent = '继续';
        this.elements.checkBtn.classList.add('next-btn');
    }

    // 检查答案
    checkAnswer(question) {
        switch (question.type) {
            case 'multiple-choice':
            case 'scenario':
                const options = document.querySelectorAll('.option-item');
                options.forEach((opt, idx) => {
                    if (idx === question.correctIndex) {
                        opt.classList.add('correct');
                    } else if (idx === this.state.selectedAnswer) {
                        opt.classList.add('incorrect');
                    }
                });
                return this.state.selectedAnswer === question.correctIndex;

            case 'fill-blank':
                let allCorrect = true;
                document.querySelectorAll('.blank-slot').forEach(slot => {
                    const blankId = parseInt(slot.dataset.blankId);
                    const blank = question.blanks[blankId];
                    if (blank && slot.dataset.word === blank.answer) {
                        slot.classList.add('correct');
                    } else {
                        slot.classList.add('incorrect');
                        allCorrect = false;
                    }
                });
                return allCorrect;

            case 'ordering':
                const items = document.querySelectorAll('.sortable-item');
                const currentOrder = Array.from(items).map(item =>
                    parseInt(item.dataset.original)
                );
                return JSON.stringify(currentOrder) === JSON.stringify(question.correctOrder);
        }
        return false;
    }

    // 获取正确答案文本
    getCorrectAnswerText(question) {
        switch (question.type) {
            case 'multiple-choice':
            case 'scenario':
                return question.options[question.correctIndex];
            case 'fill-blank':
                return question.blanks.map(b => b.answer).join(', ');
            case 'ordering':
                return question.items.join(' → ');
            default:
                return '';
        }
    }

    // 显示反馈
    showFeedback(isCorrect, question) {
        // 播放音效
        if (isCorrect) {
            this.playCorrectSound();
        } else {
            this.playIncorrectSound();
        }

        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${isCorrect ? 'correct' : 'incorrect'}`;

        let feedbackContent = `<div class="feedback-title">${isCorrect ? '正确！' : '答错了'}</div>`;

        if (!isCorrect) {
            const correctAnswer = this.getCorrectAnswerText(question);
            feedbackContent += `<div class="correct-answer">正确答案：${correctAnswer}</div>`;
        }

        if (question.explanation) {
            feedbackContent += `<div class="feedback-text">${question.explanation}</div>`;
        }

        feedback.innerHTML = feedbackContent;
        document.body.appendChild(feedback);
    }

    // 下一题
    nextQuestion() {
        // 移除反馈
        const feedback = document.querySelector('.feedback-message');
        if (feedback) feedback.remove();

        this.state.currentQuestionIndex++;

        if (this.state.currentQuestionIndex >= this.state.totalQuestions) {
            this.completeLesson();
        } else {
            this.updateProgress();
            this.renderQuestion();
        }
    }

    // 完成课程
    completeLesson() {
        // 播放完成音效
        this.playCompleteSound();

        const earnedXp = this.state.correctAnswers * 10 + (this.state.hearts * 5);
        const accuracy = Math.round((this.state.correctAnswers / this.state.totalQuestions) * 100);

        this.state.xp += earnedXp;
        if (!this.state.completedLessons.includes(this.state.currentLesson.id)) {
            this.state.completedLessons.push(this.state.currentLesson.id);
            this.state.streak++;
        }

        this.saveProgress();

        this.elements.earnedXp.textContent = earnedXp;
        this.elements.accuracy.textContent = `${accuracy}%`;

        this.elements.lessonView.classList.add('hidden');
        this.elements.completeView.classList.remove('hidden');
    }

    // 退出课程
    exitLesson() {
        this.elements.lessonView.classList.add('hidden');
        this.elements.courseMap.classList.remove('hidden');

        // 移除反馈
        const feedback = document.querySelector('.feedback-message');
        if (feedback) feedback.remove();
    }

    // 返回地图
    returnToMap() {
        this.elements.completeView.classList.add('hidden');
        this.elements.courseMap.classList.remove('hidden');
        this.renderSkillTree();
        this.updateStats();
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new ClaudeCodeLearning();
});
