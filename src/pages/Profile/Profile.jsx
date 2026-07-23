import "./Profile.css";

import {
  ProfileHeader,
  ProfileInfo,
  ProfileStats,
  ProfileActions,
} from "./components";

function Profile() {
  return (
    <div className="profile">

      <ProfileHeader />

      <ProfileInfo />

      <ProfileStats />

      <ProfileActions />

    </div>
  );
}

export default Profile;