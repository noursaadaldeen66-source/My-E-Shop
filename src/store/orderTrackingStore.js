
import create from 'zustand';

const statusFlow = ['New Order', 'Preparing', 'Ready for Delivery', 'Delivered'];

const useOrderTrackingStore = create((set, get) => ({
  orders: [],
  addOrder: (order) =>
    set((state) => ({ orders: [...state.orders, { ...order, id: Date.now(), status: 'New Order' }] })),

  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id ? { ...order, status } : order
      ),
    })),

  startAutoUpdate: () => {
    setInterval(() => {
      const { orders, updateOrderStatus } = get();
      orders.forEach((order) => {
        const currentIndex = statusFlow.indexOf(order.status);
        if (currentIndex < statusFlow.length - 1) {
          const nextStatus = statusFlow[currentIndex + 1];
          updateOrderStatus(order.id, nextStatus);
        }
      });
    }, 5 * 60 * 1000); // 5 minutes
  },
}));

export default useOrderTrackingStore;
