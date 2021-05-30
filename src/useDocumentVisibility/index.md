---
title: useDocumentVisibility
group:
  title: 组件
  path: /
  order: 2
---

# useDocumentVisibility

```tsx

import React, {useState} from 'react'
import { useDocumentShow } from '@tms/site-hook'

export default () => {

   useDocumentShow(() => {
     alert('useDocumentShow')
   })
  return <div>useDocumentShow</div>
}

```

## API

```typescript
   useDocumentShow(() => {
     alert(''useDocumentShow)
})
```