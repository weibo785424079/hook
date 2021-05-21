---
title: useBoolean
group:
  title: 组件
  path: /
  order: 1
---

# useDebounce

```tsx

import React, {useState} from 'react'
import { useDebounce } from '@tms/site-hook'

export default () => {

    const [count, setCount] = useState(0)
    const deouncedCount = useDebounce(count)

    return <div>
        <button onClick={() => setCount(c => c+1)}>加一</button>
        <div>count: {count} debouncedCount: {deouncedCount}</div>
    </div>
}

```

## API

```typescript
    const [count, setCount] = useState(0)
const deouncedCount = useDebounce(count)
```