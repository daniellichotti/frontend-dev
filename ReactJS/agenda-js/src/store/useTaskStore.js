import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
}));
