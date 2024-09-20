import { FaTasks, FaRegCheckSquare, FaRegClock } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navlList: NavItemType[] = [
    { id: 1, label: "All tasks", link: "/", icon: <FaTasks /> },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare />,
    },
    { id: 3, label: "Expired tasks", link: "/expired", icon: <FaRegClock /> },
  ];
  return (
    <div className="mt-24">
      {navlList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
