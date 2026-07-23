import "./ProfileHeader.css";

import { useAuth } from "../../../../hooks";

function ProfileHeader() {
  const { user } = useAuth();

  const initial = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "D";

  return (
    <section className="profile-header">

      <div className="profile-header__avatar">
        {initial}
      </div>

      <h1 className="profile-header__name">
        {user?.name || "Developer"}
      </h1>

      <p className="profile-header__email">
        {user?.email}
      </p>

      <span className="profile-header__role">
        {user?.role}
      </span>

    </section>
  );
}

export default ProfileHeader;