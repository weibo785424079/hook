---
title: 标题内容
---

```tsx
import React, {useState} from 'react'
import useWatch from './index'
export default () => {
    const [count, setCount] = useState(1)
    useWatch(count, (prev) => {
        console.log(prev, count)
    })
    return <button onClick={() => setCount(c => c+1)}>加一</button>
}
```