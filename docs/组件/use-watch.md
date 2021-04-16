---
title: useWatch
---

```tsx
import React, {useState} from 'react'
import { useWatch } from '@tms/site-hook'

export default () => {
    const [count, setCount] = useState(1)
    useWatch(count, (prev) => {
        console.log(prev, count)
    })
    return <button onClick={() => setCount(c => c+1)}>加一</button>
}
```