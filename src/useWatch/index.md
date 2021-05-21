---
title: useWatch
group:
  title: 组件
  path: /
  order: 3
---

# useWatch

```tsx
import React, {useState} from 'react'
import { useWatch } from '@tms/site-hook'

export default () => {
    const [count, setCount] = useState(0)
    useWatch(count, (prev) => {
        alert(`current: ${count}, prev: ${prev}`)
    })
    return <button onClick={() => setCount(c => c+1)}>加一</button>
}
```

## API

```typescript
const [count, setCount] = useState(0);
useWatch(count, (prev) => {
  alert(`current: ${count}, prev: ${prev}`)
})
```
      
### Params

| 参数         | 说明                     | 类型      | 默认值  |
|--------------|--------------------------|-----------|---------|
| data | 必须项,被观察的值 | `any` | `无` |
| cb | 必须项,被观察的值改变后的回调函数 | `function` | `无` |
| config | 可选项, 配置是否在首次挂载执行监听回调 | `object` | `{ immediate: false }` |

### Result

| 参数    | 说明     | 类型      |
|---------|----------|-----------|
| fn   | 取消观察函数引用   | `function` |