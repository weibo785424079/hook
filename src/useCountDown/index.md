---
title: useCountDown
group:
  title: 组件
  path: /
  order: 1
---

# useCountDown

```tsx

import React, {useState} from 'react'
import { useCountDown } from '@tms/site-hook'

export default () => {

    const [{isCountDowning, remaning},{ start }] =useCountDown()

    return <div>
        <button onClick={() => start()}>开始倒计时</button>
        <div>isCountDowning: {isCountDowning ? 'true':'false'} 
            <br/>
            remaning: {remaning}
        </div>
    </div>
}

```

## API

```typescript
    const [count, setCount] = useState(0)
const deouncedCount = useDebounce(count)
```