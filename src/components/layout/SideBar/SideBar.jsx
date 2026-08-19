
import "./SideBar.css";

import { NavLink } from "react-router-dom";

import {
  FaPlusCircle,
  FaColumns,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTimes,
  FaChartLine,
} from "react-icons/fa";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const getNavLinkClass = ({ isActive }) =>
    `sidebar__link ${isActive ? "sidebar__link--active" : ""}`;

  function handleNavigation() {
    setSidebarOpen(false);
  }

  return (
    <aside
      className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}
    >
      {/* Header */}

      <div className="sidebar__header">
        <h2>Career Tracker</h2>

        <button
          type="button"
          className="sidebar__close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <FaTimes />
        </button>
      </div>

      {/* Navigation */}

      <nav className="sidebar__nav">

        {/* Analytics */}

        <NavLink
          to="/analytics"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaChartLine />

          <span>Analytics</span>
        </NavLink>

        {/* Applications */}

        <h4 className="sidebar__section">
          Applications
        </h4>

        <NavLink
          to="/applications/new"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaPlusCircle />

          <span>Add Application</span>
        </NavLink>

        <NavLink
          to="/applications/board"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaColumns />

          <span>Kanban Board</span>
        </NavLink>

        {/* Interviews */}

        <h4 className="sidebar__section">
          Interviews
        </h4>

        <NavLink
          to="/interviews"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaClock />

          <span>Upcoming Interviews</span>
        </NavLink>

        <NavLink
          to="/interviews/new"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaCalendarAlt />

          <span>Schedule Interview</span>
        </NavLink>

        {/* Account */}

        <h4 className="sidebar__section">
          Account
        </h4>

        <NavLink
          to="/profile"
          className={getNavLinkClass}
          onClick={handleNavigation}
        >
          <FaUser />

          <span>Profile</span>
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;

