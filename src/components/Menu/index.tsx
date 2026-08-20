import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav className="flex gap-8 justify-center items-center">
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
        </nav>
    )
}