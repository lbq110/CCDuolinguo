# /simplify 命令

## 描述
简化当前文件或选定代码块中的复杂代码。

## 用法
```
/simplify [file_path]
/simplify --selection
```

## 参数
- `file_path` (可选): 要简化的文件路径。如果不提供，则简化当前打开的文件
- `--selection`: 仅简化当前选中的代码块

## 功能
1. 分析代码复杂度
2. 识别可简化的模式
3. 提供简化建议和重构后的代码

## 示例

### 简化整个文件
```
/simplify src/utils/helpers.js
```

### 简化选中代码
```
/simplify --selection
```

## 输出
- 原始代码分析报告
- 简化后的代码
- 改进说明和最佳实践建议
