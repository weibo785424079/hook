import React from 'react';
import { useVirtualList } from '@tms/site-hook';
import './demo1.less';

const Item = ({ text } : {text: string}) => (
  <div
    className="use-virtuallist-container-item"
    style={{ height: 50 }}
  >
    {text}
  </div>
);

const data = Array.from({ length: 100 }, (_, index) => index);

export default () => {
  const {
    list,
    containerProps,
    wrapperProps,
  } = useVirtualList(data, { itemHeight: 50 });

  return (
    <div className="use-virtuallist-container" {...containerProps}>
      <div {...wrapperProps}>
        {
              list.map((i) => <Item key={i.index} text={String(i.data)} />)
          }
      </div>
    </div>
  );
};
