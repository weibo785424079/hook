---
title: useLoading
group:
  title: 高频
  path: /n
  order: 1
---

# useLoading

```tsx
import React, { useState } from "react";
import { useCountDown } from "@tms/site-hook";

export default () => {
  const [{ isCountDowning, remaning }, { start }] = useCountDown();

  return (
    <div>
      <button onClick={() => start()}>开始倒计时</button>
      <div>
        isCountDowning: {isCountDowning ? "true" : "false"}
        <br />
        remaning: {remaning}
      </div>
    </div>
  );
};
```

## API

```typescript
const [{ isCountDowning, remaning }, { start }] = useCountDown();
```
