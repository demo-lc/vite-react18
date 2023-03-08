import Home from '@/view/home';
import { LayoutComponent } from '@/layout/admin-layout';
import { DoctorLayout } from '@/layout/doctor-layout';

import { PaymentCenter } from '@/view/payment-center';

export interface IRoutesAndViewAndLayoutMap {
  [key: string]: {
    // 组件
    view: React.ReactNode;
    // 是否在菜单中显示
    isMenu?: boolean;
    // 菜单名称
    menuName?: string;
    // 菜单图标
    menuIcon?: React.ReactNode;
    // 菜单权限
    viewAuth?: string[];
    children?: IRoutesAndViewAndLayoutMap;
  };
}

export const routesAndViewAndLayoutMap: IRoutesAndViewAndLayoutMap = {
  '/admin': {
    view: <LayoutComponent />,
    children: {
      '': {
        view: <Home />,
      },
      payment: {
        view: <PaymentCenter />,
        children: {
          '': {
            view: <Home />,
          },
        },
      },
    },
  },
  '/doctor': {
    view: <DoctorLayout />,
    children: {
      '': {
        view: <Home />,
      },
      payment: {
        view: <PaymentCenter />,
      },
    },
  },
};
