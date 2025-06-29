import { create } from "zustand";

const getInitialOrders = () => {
  const stored = localStorage.getItem("orders");
  return stored ? JSON.parse(stored) : [];
};

export const useOrderStore = create((set, get) => ({
  orders: getInitialOrders(),

  addToOrder: (food) => {
    const state = get();
    const existing = state.orders.find((item) => item.id === food.id);

    let updatedOrders;
    if (existing) {
      updatedOrders = state.orders.map((item) =>
        item.id === food.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      updatedOrders = [...state.orders, { ...food, count: 1 }];
    }

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    set({ orders: updatedOrders });
  },

  increment: (id) => {
    const updatedOrders = get().orders.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    set({ orders: updatedOrders });
  },

  decrement: (id) => {
    const updatedOrders = get()
      .orders.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    set({ orders: updatedOrders });
  },

  clearOrders: () => {
    localStorage.removeItem("orders");
    set({ orders: [] });
  },
}));
