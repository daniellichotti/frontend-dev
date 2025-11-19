import { createBrowserRouter } from 'react-router-dom'
import { CreateTaskPage } from './pages/CreateTask'
import { ListTaskPage } from './pages/ListTask'
import { Error } from './pages/Error'
import { Layout } from './Layout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: 'criar-tarefa', element: <CreateTaskPage /> },
            { path: 'listar-tarefas', element: <ListTaskPage /> },
        ]
    },
    { path: '*', element: <Error /> }
])
