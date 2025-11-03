import create from 'zustand';

const useOrderStore = create((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  updateOrderStatus: (orderNumber, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.orderNumber === orderNumber ? { ...order, status } : order
      ),
    })),
}));

export default useOrderStore;
