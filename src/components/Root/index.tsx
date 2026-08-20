import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../Header";

export const Root = () => {
    return (
        <div className="flex flex-col gap-4">
            <Header />
            <Outlet />
        </div>
    )
};