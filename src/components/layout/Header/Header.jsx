import "./Header.css";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks";
import useNotifications from "../../../hooks/useNotifications";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars, FaBell } from "react-icons/fa";
import logo from "../../../assets/logo/career-tracker-logo.png";

function Header({ setSidebarOpen }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const { unreadCount } = useNotifications();

  const location = useLocation();

  console.log("Dashboard User:", user);

  function handleLogout() {
    logout();

    navigate("/login");
  }

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>

        <Link to="/dashboard" className="header__brand">
          <img src={logo} alt="Career Tracker" className="header__logo" />
        </Link>
      </div>

      <div className="header__right">
        <button
          className="header__notification"
          onClick={() => navigate("/notifications")}
        >
          <FaBell />

          {unreadCount > 0 && (
            <span className="header__badge">{unreadCount}</span>
          )}
        </button>

        <Link to="/profile" className="header__user">
          {user?.name || "Developer"}
        </Link>

        <button className="header__logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
