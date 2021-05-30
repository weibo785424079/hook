---
title: useMount
group:
  title: 组件
  path: /
  order: 2
---

# useMount

```tsx

import React, {useState} from 'react'
import { useMount } from '@tms/site-hook'

export default () => {

   useMount(() => {
     alert('mounted')
   })

    return <div>useMount</div>
}

```

## API

```typescript
   useMount(() => {
     alert('mounted')
})
```