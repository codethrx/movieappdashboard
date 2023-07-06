import { create } from "zustand";
import { DASHBOARD_URLS } from "./utils";
export const useStore = create((set) => ({
  dashboardURLs: DASHBOARD_URLS,
  activeURL: "My Account",
  updateActiveURL: (payload) => {
    set((state) => ({ ...state, activeURL: payload }));
  },
}));
