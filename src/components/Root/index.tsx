import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <NavLink className="hover:text-red-600" to={'/'}>Главная</NavLink>
                <NavLink className="hover:text-red-600" to={'/favorites'}>Ибранное</NavLink>
            </div>
            <Outlet />
        </div>
    )
};