import { useRef } from 'react';

var useImmutable = function useImmutable(val) {
  return useRef(val).current;
};

export default useImmutable;