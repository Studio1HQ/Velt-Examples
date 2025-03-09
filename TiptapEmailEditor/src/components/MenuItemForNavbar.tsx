import { MenuItemProps } from "../types";
import { buttonStyles } from "../utils/constant";

const MenuItemForNavbar = ({ icon, label, count }: MenuItemProps) => (
  <button className={buttonStyles}>
    {icon}
    <span>{label}</span>
    {count && (
      <span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
        {count}
      </span>
    )}
  </button>
);

export default MenuItemForNavbar;
