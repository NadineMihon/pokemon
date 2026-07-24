import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <NavLink 
                    to={'/'}
                    end
                    className={({ isActive }) => 
                        isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                    }
                    >
                        Главная
                    </NavLink>
                <NavLink
                    to={'/favorites'} 
                    className={({ isActive }) => 
                        isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                    } 
                >
                    Изранное
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
};