import React from "react";
import { NavLink } from "react-router-dom";

const list = [
  {
    id: 1,
    link: "All",
    path: "/",
  },
  {
    id: 2,
    link: "HTML",
    path: "/html",
  },
  {
    id: 3,
    link: "CSS",
    path: "css",
  },
  {
    id: 4,
    link: "JavaScript",
    path: "/javascript",
  },
];
let activeStyle = {
  backgroundColor: "red",
  padding: "10px",
  color: "white",
  border: "none",
  borderRadius: "15%",
};

let activeClassName = {
  padding: "10px",
  color: "white",
  border: "none",
  borderRadius: "15%",
  backgroundColor: "green",
};

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex justify-center bg-black p-5 gap-5">
        {list.map(({ id, link, path }) => (
          <button key={id}>
            <NavLink
              to={`${path}`}
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              {link}
            </NavLink>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
