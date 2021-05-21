---
title: useImmutable
group:
  title: 组件
  path: /
  order: 2
---

# useImmutable

```tsx

import React, {useState} from 'react'
import { useImmutable } from '@tms/site-hook'

export default () => {

    const [count, setCount] = useState(0)
    const value = useImmutable(count)

    return <div>
        <button onClick={() => setCount(c => c+1)}>加一</button>
        <div>count: {count} value: {value}</div>
    </div>
}

```

## API

```typescript
  const value = useImmutable(() => <div>组件</div>)
```