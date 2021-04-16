import { useEffect, useRef } from 'react';

var useWatch = function useWatch(dep, callback) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    immediate: false
  };
  var initied = useRef(false);
  var stoped = useRef(false);
  var prevDep = useRef(dep);
  useEffect(function () {
    var execute = function execute() {
      return callback(prevDep.current);
    };

    if (!initied.current) {
      initied.current = true;

      if (config.immediate) {
        execute(); // 初始化时也回调
      }
    } else if (!stoped.current) {
      execute();
    }

    prevDep.current = dep;
  }, [dep, config.immediate]);
  return function () {
    stoped.current = true;
  };
};

export default useWatch;