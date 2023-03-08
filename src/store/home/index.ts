// 引入zustand
import { create, StoreApi } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// 定义store的类型
export interface Store {
  count: number;
  bees: number;
  increment: () => void;
  decrement: () => void;
  addBees: (a: number) => void;
}

// 定义store的初始值
const initialState: Store = {
  bees: 0,
  count: 0,
  increment: () => {},
  decrement: () => {},
  addBees: () => {},
};

// 定义createStore方法

const createStore = (set: any) => ({
  ...initialState,
  increment: () => set((state: Store) => ({ count: state.count + 1 })),
  decrement: () => set((state: Store) => ({ count: state.count - 1 })),
  addBees: (by: number) =>
    set((state: Store) => {
      state.bees += by;
    }),
});

// 定义store的方法, 并且使用中间件
const useHomeStore = create<Store>(persist(immer(createStore), { name: 'store', storage: createJSONStorage(() => sessionStorage) }) as any);

export default useHomeStore;
