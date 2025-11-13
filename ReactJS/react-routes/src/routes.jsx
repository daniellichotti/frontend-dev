import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Error } from './pages/Error'
import { PrivateRoute } from './components/PrivateRoute'

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <PrivateRoute />, //Aqui ele vai exigir autenticação
        children: [
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
        ]
    },
    {
        path: '*',
        element: <Error />
    },
])