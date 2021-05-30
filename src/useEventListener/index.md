---
title: useEventListener
group:
  title: 组件
  path: /
  order: 1
---

# useEventListener

```tsx

import React, { useState, useRef } from 'react'
import { useEventListener } from '@tms/site-hook'

export default () => {
    const ref = useRef()
    useEventListener('click',() => {
        alert('触发绑定事件')
    }, 
    {
        target: ref
    })

    return <div>
        <button ref={ref}>触发事件</button>
    </div>
}

```

## API

```typescript
   useEventListener('click',() => {
        alert('触发绑定事件')
    }, 
    {
        target: ref
})
```