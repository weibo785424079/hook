import { useRef } from 'react';

const useImmutable = <T>(val: T) => {
    return useRef(val).current;
};

export default useImmutable;