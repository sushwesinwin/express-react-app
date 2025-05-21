import { NavLink } from "react-router-dom";

export type MobileNavItemProps = {
    to: string;
    text: string;
}

export default function MobileNavItem({ to, text }: MobileNavItemProps) {
  return (
    <NavLink to={to} 
        className={({ isActive }) => 
         `block px-3 py-2 rounded-md text-base font-medium ${ isActive
            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
         }`}>
      {text}
    </NavLink>
  )
}
