import { renderHook, act } from '@testing-library/react-hooks';
import useWatch from '../index';

// const setUp = (defaultValue?: boolean) => renderHook(() => useWatch(defaultValue, (prev) => {
//     console.log(prev)
// }));

describe('useWatch', () => {
  it('should be defined', () => {
    expect(useWatch).toBeDefined();
  });
});