---
title: usePersistFn
group:
  title: 组件
  path: /
  order: 2
---

# usePersistFn

```tsx
import React, { useState } from "react";
import { useMount } from "@tms/site-hook";

export default () => {
  useMount(() => {
    console.log("mounted");
  });

  return <div>useMount</div>;
};
```

## API

```typescript
useMount(() => {
  alert("mounted");
});
```
