import { Link } from "react-router";
import { type SidebarProps } from "../libs/Sidebar";

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-info-subtle text-white min-vh-100 border-end border-secondary"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Todo List App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <span className="d-md-inline px-2">Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-md-inline px-2">MY Stuffs</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/my/todolistpage"}>
                    <span className="d-md-inline px-2">TodolistPage</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-100 pt-3 border-top border-secondary text-center">
        <p className="text-white fs-5 fw-semibold mb-0">
          {userName} : {type}
        </p>
      </div>
    </aside>
  );
}
