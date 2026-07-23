import "./ProfileInfo.css";

import { useAuth } from "../../../../hooks";

function ProfileInfo() {
  const { user } = useAuth();

  return (
    <section className="profile-info">

      <h2 className="profile-info__title">
        Personal Information
      </h2>

      <div className="profile-info__grid">

        <div className="profile-info__item">
          <span className="profile-info__label">
            Full Name
          </span>

          <span className="profile-info__value">
            {user?.name}
          </span>
        </div>

        <div className="profile-info__item">
          <span className="profile-info__label">
            Email
          </span>

          <span className="profile-info__value">
            {user?.email}
          </span>
        </div>

        <div className="profile-info__item">
          <span className="profile-info__label">
            Role
          </span>

          <span className="profile-info__value">
            {user?.role}
          </span>
        </div>

        <div className="profile-info__item">
          <span className="profile-info__label">
            User ID
          </span>

          <span className="profile-info__value">
            #{user?.id}
          </span>
        </div>

      </div>

    </section>
  );
}

export default ProfileInfo;