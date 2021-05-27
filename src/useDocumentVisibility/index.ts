import { useEffect, useState } from 'react';
import useWatch from '../useWatch';

export const useDocumentVisibility = () => {
  const [visible, setVisible] = useState(document.visibilityState === 'visible');
  useEffect(() => {
    const listner = () => {
      setVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', listner);
    return () => document.removeEventListener('visibilitychange', listner);
  }, []);

  return visible;
};

export const useDocumentShow = (cb: (...arrgs: any[]) => any) => {
  const visible = useDocumentVisibility();
  useWatch(visible, () => {
    if (visible) {
      cb();
    }
  });
};
