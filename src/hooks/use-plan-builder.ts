import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Package, bundleDiscounts } from '@/content/packages';

export interface PlanItem extends Package {
  quantity?: number;
  selectedOptions?: Record<string, any>;
}

interface PlanBuilderStore {
  items: PlanItem[];
  isOpen: boolean;
  subtotal: number;
  discount: number;
  total: number;
  appliedBundles: string[];
  
  addItem: (item: Package) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearPlan: () => void;
  toggleDrawer: () => void;
  calculateTotals: () => void;
}

export const usePlanBuilder = create<PlanBuilderStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      subtotal: 0,
      discount: 0,
      total: 0,
      appliedBundles: [],

      addItem: (item: Package) => {
        const state = get();
        const existingItem = state.items.find(i => i.id === item.id);
        
        if (existingItem) {
          // If item exists, increase quantity
          set({
            items: state.items.map(i => 
              i.id === item.id 
                ? { ...i, quantity: (i.quantity || 1) + 1 }
                : i
            )
          });
        } else {
          // Add new item
          set({
            items: [...state.items, { ...item, quantity: 1 }]
          });
        }
        
        // Open drawer and recalculate
        set({ isOpen: true });
        get().calculateTotals();
      },

      removeItem: (itemId: string) => {
        const state = get();
        set({
          items: state.items.filter(item => item.id !== itemId)
        });
        get().calculateTotals();
      },

      updateQuantity: (itemId: string, quantity: number) => {
        const state = get();
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        
        set({
          items: state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          )
        });
        get().calculateTotals();
      },

      clearPlan: () => {
        set({
          items: [],
          subtotal: 0,
          discount: 0,
          total: 0,
          appliedBundles: []
        });
      },

      toggleDrawer: () => {
        const state = get();
        set({ isOpen: !state.isOpen });
      },

      calculateTotals: () => {
        const state = get();
        const subtotal = state.items.reduce((total, item) => {
          return total + (item.price * (item.quantity || 1));
        }, 0);

        // Check for bundle discounts
        const appliedBundles: string[] = [];
        let maxDiscount = 0;

        for (const bundle of bundleDiscounts) {
          const hasAllConditions = bundle.conditions.every(condition => {
            // Check if any item matches the condition
            return state.items.some(item => {
              if (condition === 'ep') return item.id.includes('ep');
              if (condition === 'album') return item.id.includes('album');
              if (condition === 'website') return item.category === 'website';
              if (condition === 'website-pro') return item.id === 'website-pro';
              if (condition === 'website-premium') return item.id === 'website-premium';
              if (condition === 'merch') return item.category === 'merch';
              if (condition === 'merch-100') return item.id === 'tshirts' && (item.quantity || 0) >= 100;
              if (condition === 'merch-500') return item.id === 'tshirts' && (item.quantity || 0) >= 500;
              if (condition === 'merch-1000') return item.id === 'tshirts' && (item.quantity || 0) >= 1000;
              if (condition === 'social') return state.items.some(i => 
                i.id.includes('posting-calendar') || 
                i.id.includes('hashtag-caption') || 
                i.id.includes('profile-optimization')
              );
              return false;
            });
          });

          if (hasAllConditions && bundle.discount > maxDiscount) {
            maxDiscount = bundle.discount;
            appliedBundles.push(bundle.id);
          }
        }

        const discount = subtotal * (maxDiscount / 100);
        const total = subtotal - discount;

        set({
          subtotal,
          discount,
          total,
          appliedBundles
        });
      }
    }),
    {
      name: 'wom-plan-builder',
      partialize: (state) => ({
        items: state.items,
        subtotal: state.subtotal,
        discount: state.discount,
        total: state.total,
        appliedBundles: state.appliedBundles
      })
    }
  )
);