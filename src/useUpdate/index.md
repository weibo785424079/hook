---
title: useUpdate
group:
  title: 组件
  path: /
  order: 2
---

# useUnMount

```tsx

import React, { useEffect } from 'react'
import { useUpdate } from '@tms/site-hook'

export default () => {

    const update = useUpdate()
    return (
        <div>
            <button onClick={update}>update, </button>
            <div>{Math.random()}</div>
        </div>)
}

```

## API

```typescript
  const update = useUpdate()
```