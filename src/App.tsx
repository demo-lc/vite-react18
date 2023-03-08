import { useState } from 'react';

import styles from './App.module.less';
import { ConfigProvider } from 'antd';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}>
      <div className={styles.app}>
        {element}
      </div>
    </ConfigProvider>
  );
}

export default App;
