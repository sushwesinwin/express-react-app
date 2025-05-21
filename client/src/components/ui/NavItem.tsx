// Reusable NavItem for Desktop
import { NavLink } from "react-router-dom";

export type NavItemProps = {
  to: string;
  text: string;
}

export default function NavItem({ to, text }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium 
        ${
          isActive
            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
