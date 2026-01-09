# 代码简化器技能 (Code Simplifier)

## 描述
这个技能帮助用户简化复杂代码，提高代码的可读性和维护性。当用户需要重构、优化或简化代码时使用此技能。

## 触发条件
当用户要求以下操作时使用此技能：
- 简化代码
- 重构代码
- 优化可读性
- 减少代码复杂度
- 消除重复代码

## 简化原则

### 1. 提取重复逻辑
将重复的代码块提取为函数或方法。

### 2. 使用描述性命名
- 变量名应该清晰表达其用途
- 函数名应该描述其行为
- 避免缩写和单字母变量名（除非是常见惯例如 i, j）

### 3. 减少嵌套层级
- 使用早返回（early return）减少嵌套
- 考虑使用 guard clauses
- 将复杂条件提取为命名良好的变量

### 4. 简化条件表达式
- 使用三元运算符简化简单条件
- 将复杂条件提取为函数
- 使用对象映射替代多重 if-else

### 5. 应用设计模式
在适当的场景应用设计模式来简化代码结构。

## 输出格式

简化代码时，请提供：

1. **原始代码分析**：指出代码中的复杂性问题
2. **简化后的代码**：提供重构后的版本
3. **改进说明**：解释做了哪些改进及原因

## 示例

### 输入
```javascript
function processData(data) {
  if (data) {
    if (data.items) {
      if (data.items.length > 0) {
        let result = [];
        for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].active) {
            result.push(data.items[i].name);
          }
        }
        return result;
      }
    }
  }
  return [];
}
```

### 输出
```javascript
function processData(data) {
  if (!data?.items?.length) return [];

  return data.items
    .filter(item => item.active)
    .map(item => item.name);
}
```

**改进说明**：
- 使用可选链 (?.) 简化空值检查
- 使用早返回减少嵌套
- 使用 filter/map 替代 for 循环，更具声明性
