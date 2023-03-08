import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useLocalStorageState } from 'ahooks';
import { useOutlet } from 'react-router-dom';

export interface PaymentCenterProps {}

export const PaymentCenter: React.FC<PaymentCenterProps> = props => {
  const [state, setState] = React.useState<number>(0);

  const [localStorage, setLocalStorage] = useLocalStorageState<string | undefined>('path', {
    defaultValue: '',
  });

  const outlet = useOutlet();

  useEffect(
    () => {
      console.log('path改变', localStorage);
    },
    [localStorage]
  );

  // TODO
  return (
    <div>
      <div>localStorage留存记录,使用这个hook,在本组件改变会监听到localStorage的改变,但是在其他组件改变localStorage,这个组件不会监听到,手动删除也监听不到</div>
      <div>
        {state}
      </div>
      <Button
        type="primary"
        onClick={() => {
          console.log('path', localStorage);
        }}>
        打印path
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setState(state + 1);
        }}>
        改变state
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setLocalStorage(state + '');
        }}>
        改变localStorage
      </Button>

      <div>
        {outlet}
      </div>
    </div>
  );
};
