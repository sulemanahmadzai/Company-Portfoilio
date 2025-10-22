import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    title: "Team",
    link: "/team",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <ul className="main_menu_list clearfix">
      {menus.map((item, mn) => {
        return (
          <ListItem key={mn}>
            <Link onClick={ClickHandler} className="active" href={item.link}>
              {item.title}
            </Link>
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
