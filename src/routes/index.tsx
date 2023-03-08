import { routesAndViewAndLayoutMap, IRoutesAndViewAndLayoutMap } from './routesAndViewAndLayoutMap';

import { RouteObject } from 'react-router-dom';

type keyType = keyof typeof routesAndViewAndLayoutMap;

// 递归遍历routesAndViewAndLayoutMap,生成路由

const createRoutes = (routesAndViewAndLayoutMap: IRoutesAndViewAndLayoutMap): RouteObject[] => {
  return Object.keys(routesAndViewAndLayoutMap).map(key => {
    const { view, children } = routesAndViewAndLayoutMap[key as keyType];
    return {
      path: key,
      element: view,
      children: children ? createRoutes(children) : undefined,
    };
  });
};

export const routes = createRoutes(routesAndViewAndLayoutMap);
console.log(routes);

/* export const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/payment',
        element: <PaymentCenter />,
      },
    ],
  },
]; */
