import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import { About } from './pages/About'
import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

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