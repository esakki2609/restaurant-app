import { MdOutlineDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaBurger } from "react-icons/fa6";

const DRAWER_ITEMS = [
    {
        id: 1,
        label: "Dashboard",
        icon: <MdOutlineDashboard />,
        url: "/",
    },
    {
        id: 2,
        label: "Employees",
        icon: <HiUserGroup />,
        url: "/employee",
    },
    {
        id: 3,
        label: "Customers",
        icon: <FaBurger />,
        url: "/customer",
    },
];

export { DRAWER_ITEMS };
