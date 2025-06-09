import { Outlet } from "react-router"
import Navbar from "../features/Navbar/Navbar"

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default AppLayout