import {
  useCallback, useEffect, useReducer, useRef,
} from 'react';
import useImmutable from '../useImmutable';

interface Options {
    immediate: boolean;
    manul: boolean;
    delay: number;
}

type PromiseType<T> = T extends Promise<infer P> ? P : T;

interface Result<T extends (...args: any[]) => any> {
    run: T;
    loading: boolean;
    error: Error | null;
    result: PromiseType<ReturnType<T>> | null;
}

function useRequest<T extends (...args: any[]) => any>(fn: T, opts?: Partial<Options>): Result<T>;
function useRequest<T extends(...args: any[]) => any>(fn: T, options: Partial<Options> = {}) {
  const optionRef = useImmutable(
    (() => {
      const { manul = false, immediate = true, delay = 1000 } = options;
      return {
        manul,
        delay: delay ?? 1000,
        immediate: manul ? false : immediate,
      };
    })(),
  );
  const { manul, delay, immediate } = optionRef;

  const runRef = useRef<T>(fn);

  runRef.current = fn;

  const isCurrent = useCallback((cb: T) => runRef.current === cb, []);

  const timer = useRef<number | null>(null);

  const initValue = { loading: false, result: null, error: null };

  const [value, dispatch] = useReducer(
    (state: Result<T>, action: any) => ({ ...state, ...action }),
    initValue,
  );

  const openLoading = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (delay) {
      timer.current = window.setTimeout(() => {
        dispatch({ loading: true });
      }, delay);
    } else {
      dispatch({ loading: true });
    }
  }, []);

  const closeLoading = useCallback((closeOptions = {}) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    dispatch({ loading: false, ...closeOptions });
  }, []);

  const run = useCallback(
    async (...args) => {
      try {
        openLoading();

        const result = await fn(...args);

        if (isCurrent(fn)) {
          closeLoading({ loading: false, error: null, result });
        }
      } catch (error) {
        if (isCurrent(fn)) {
          closeLoading({ loading: false, error, result: null });
        }
        console.log(error);
      }
    },
    [fn],
  );

  useEffect(() => {
    if (!manul) {
      if (immediate) {
        run();
      } else {
        optionRef.immediate = true;
      }
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [run]);

  return { run, ...value };
}

export default useRequest;
