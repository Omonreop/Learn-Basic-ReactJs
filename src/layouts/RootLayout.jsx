import { NavLink, Outlet } from "react-router-dom";
import "../style/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
        to="/blog"
      >
        Blog
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
        to="/about"
      >
        About
      </NavLink>
      <Outlet />
    </>
  );
}

export default RootLayout;
