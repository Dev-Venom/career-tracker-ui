import "./SideBar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaPlusCircle,
  FaColumns,
  FaCalendarAlt,
  FaClock,
  FaBell,
  FaUser,
  FaTimes,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`sidebar ${sidebarOpen ? "sidebar sidebar--open" : "sidebar"}`}
    >
      <div className="sidebar__header">
        <h2>Dashboard</h2>

        <button
          className="sidebar__close"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      <nav className="sidebar__nav">
        <NavLink to="/analytics">Analytics</NavLink>

        <h4 className="sidebar__section">Applications</h4>

        <NavLink
          to="/applications/new"
          className={({ isActive }) =>
            isActive ? "sidebar__link active" : "sidebar__link"
          }
        >
          <FaPlusCircle />
          <span>Add Application</span>
        </NavLink>

        <NavLink to="/applications/board" className="sidebar__link">
          <FaColumns />
          <span>Kanban Board</span>
        </NavLink>

        <h4 className="sidebar__section">Interviews</h4>

        <NavLink to="/interviews" className="sidebar__link">
          <FaClock />
          <span>Upcoming Interviews</span>
        </NavLink>

        <NavLink to="/interviews/new" className="sidebar__link">
          <FaCalendarAlt />
          <span>Schedule Interview</span>
        </NavLink>

        <NavLink to="/profile" className="sidebar__link">
          <FaUser />
          <span>Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
