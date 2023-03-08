import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useOutlet } from 'react-router-dom';
import { GetUrlRelativePath } from '@/utils';
import Styles from './index.module.less';

export interface LayoutProps {}

const { Header, Content, Footer, Sider } = Layout;

export const LayoutComponent: React.FC<LayoutProps> = props => {
  const { token: { colorBgContainer } } = theme.useToken();

  const [currentPath, setCurrentPath] = useState(GetUrlRelativePath());

  const element = useOutlet();
  // TODO
  return (
    <Layout className={Styles.layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div>admin</div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          {element}
        </Content>
        <Footer style={{ textAlign: 'center' }}>promiseLC ©2023 Created by Admin</Footer>
      </Layout>
    </Layout>
  );
};
