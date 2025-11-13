import { useNavigate } from "react-router-dom"

export function Home() {

    const navigate = useNavigate()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </>
    )
};
