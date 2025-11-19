import { create } from 'zustand'

const useStore = create((set, get) => ({
    tasks: [],

    includeTask: (newTask) => {
        const tasks = get().tasks
        set({ tasks: [...tasks, newTask] })
    }
}))