import { create } from 'zustand';

export interface Package { id: string; weight: number; items: string[]; }
export interface Shipment { id: string; packageIds: string[]; status: 'created' | 'in-transit'; }
export interface Order { id: string; customerName: string; status: 'pending' | 'packed' | 'shipped'; packages: Package[]; }

interface OrderStore {
  orders: Order[];
  shipments: Shipment[];
  addPackageToOrder: (orderId: string, newPkg: Package) => void;
  createShipment: (packageIds: string[]) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [{ id: "ORD-001", customerName: "Trần Khánh Vi", status: 'pending', packages: [] }],
  shipments: [],
  addPackageToOrder: (orderId, newPkg) => set((state) => ({
    orders: state.orders.map(o => o.id === orderId ? { ...o, packages: [...o.packages, newPkg] } : o)
  })),
  createShipment: (packageIds) => set((state) => ({
    shipments: [...state.shipments, { id: `SHIP-${Date.now().toString().slice(-4)}`, packageIds, status: 'created' }]
  })),
}));