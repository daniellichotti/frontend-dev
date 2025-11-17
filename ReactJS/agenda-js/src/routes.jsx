import { createBrowserRouter } from 'react-router-dom'
import { CreateTaskPage } from './pages/CreateTask'
import { ListTaskPage } from './pages/ListTask'
import { Error } from './pages/Error'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { path: '/criar-tarefa', element: <CreateTaskPage /> },
            { path: '/listar-tarefas', element: <ListTaskPage /> },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])