import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Error } from './pages/Error'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/login', element: <Login /> },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])