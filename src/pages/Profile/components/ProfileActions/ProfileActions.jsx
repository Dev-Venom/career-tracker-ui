import "./ProfileActions.css";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hooks";

function ProfileActions() {

  const navigate = useNavigate();

  const { logout } = useAuth();

  function handleLogout() {

    logout();

    navigate("/login");

  }

  return (

    <section className="profile-actions">

      <button
        className="profile-actions__button"
        onClick={() => alert("Coming Soon 🚀")}
      >
        Edit Profile
      </button>

      <button
        className="profile-actions__button"
        onClick={() => alert("Coming Soon 🚀")}
      >
        Change Password
      </button>

      <button
        className="profile-actions__button"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>

      <button
        className="profile-actions__button profile-actions__button--logout"
        onClick={handleLogout}
      >
        Logout
      </button>

    </section>

  );

}

export default ProfileActions;