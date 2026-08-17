import "./ProfileActions.css";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hooks";

import toast from "react-hot-toast";

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
        onClick={() => toast("Coming Soon 🚀")}
      >
        Edit Profile
      </button>

      <button
        className="profile-actions__button"
        onClick={() => toast("Coming Soon 🚀")}
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