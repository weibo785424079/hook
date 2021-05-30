---
title: useRequest
group:
  title: 组件
  path: /
  order: 2
---

# useRequest

```tsx

import React, { useState,useCallback } from 'react'
import { useRequest } from '@tms/site-hook'

export default () => {

    const action = useCallback(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('data')
        }, 3000)
      })
    }, [])

    const { result, loading, error, run } = useRequest(action)

    return (
      <div>
        <div>loading: {loading ? 'loading' : ''}</div>
        <div>result: {result}</div>
        <div>error: {error}</div>
        <button onClick={run}>再次求情</button>
      </div>
    )
}

```

## API

```typescript
  const action = useCallback(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('data')
        }, 300)
      })
    }, [])
const {result, loading, error} = useRequest(action)
```