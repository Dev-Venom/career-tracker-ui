
import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import "./Profile.css";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

import { useAuth } from "../../hooks";

function Profile() {
  const { user, isLoading, updateProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    experienceLevel: "",
    preferredJobType: "",
    preferredLocation: "",
    activelyLooking: false,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        role: user.role || "",
        experienceLevel: user.experienceLevel || "",
        preferredJobType: user.preferredJobType || "",
        preferredLocation: user.preferredLocation || "",
        activelyLooking: user.activelyLooking ?? false,
      });
    }
  }, [user]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleEdit() {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      location: user.location || "",
      role: user.role || "",
      experienceLevel: user.experienceLevel || "",
      preferredJobType: user.preferredJobType || "",
      preferredLocation: user.preferredLocation || "",
      activelyLooking: user.activelyLooking ?? false,
    });

    setIsEditing(true);
  }

  function handleCancel() {
    setFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      location: user.location || "",
      role: user.role || "",
      experienceLevel: user.experienceLevel || "",
      preferredJobType: user.preferredJobType || "",
      preferredLocation: user.preferredLocation || "",
      activelyLooking: user.activelyLooking ?? false,
    });

    setIsEditing(false);
  }

  async function handleSave() {
    setIsSaving(true);

    try {
      const result = await updateProfile(formData);

      if (result.success) {
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      } else {
        toast.error(result.message || "Unable to update profile.");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Unable to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading || !user) {
    return (
      <main className="profile">
        <section className="profile__hero">
          <div className="profile__identity">
            <div className="profile__avatar">
              <FaUser />
            </div>

            <div className="profile__identity-content">
              <span className="profile__eyebrow">
                MY PROFILE
              </span>

              <h1 className="profile__name">
                Loading...
              </h1>

              <p className="profile__role">
                Loading profile...
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="profile">

      {/* =====================================
          PROFILE HERO
      ====================================== */}

      <section className="profile__hero">

        <div className="profile__identity">

          <div className="profile__avatar">
            <FaUser />
          </div>

          <div className="profile__identity-content">

            <span className="profile__eyebrow">
              MY PROFILE
            </span>

            <h1 className="profile__name">
              {user.name || "Name not provided"}
            </h1>

            <p className="profile__role">
              {user.role || "Role not provided"}
            </p>

            <div className="profile__meta">

              <span>
                <FaEnvelope />
                {user.email || "Email not provided"}
              </span>

              <span>
                <FaMapMarkerAlt />
                {user.location || "Location not provided"}
              </span>

            </div>

          </div>

        </div>

        <div className="profile__status">

          <span className="profile__status-dot"></span>

          <span>
            {user.activelyLooking
              ? "Actively Looking"
              : "Not Looking"}
          </span>

        </div>

      </section>


      <div className="profile__grid">

        {/* =====================================
            PERSONAL INFORMATION
        ====================================== */}

        <section className="profile__card profile__card--information">

          <div className="profile__card-header">

            <div>

              <span className="profile__card-eyebrow">
                PERSONAL
              </span>

              <h2>
                Personal Information
              </h2>

            </div>

            {!isEditing && (
              <button
                type="button"
                className="profile__edit-button"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}

          </div>


          {isEditing ? (

            <div className="profile__fields">

              <div className="profile__field">

                <span className="profile__field-label">
                  Full Name
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Phone
                </span>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Location
                </span>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />

              </div>

            </div>

          ) : (

            <div className="profile__fields">

              <div className="profile__field">

                <span className="profile__field-label">
                  Full Name
                </span>

                <strong>
                  {user.name || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Email
                </span>

                <strong>
                  {user.email || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Phone
                </span>

                <strong>
                  {user.phone || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Location
                </span>

                <strong>
                  {user.location || "Not provided"}
                </strong>

              </div>

            </div>

          )}

        </section>


        {/* =====================================
            CAREER PREFERENCES
        ====================================== */}

        <section className="profile__card">

          <div className="profile__card-header">

            <div>

              <span className="profile__card-eyebrow">
                CAREER
              </span>

              <h2>
                Career Preferences
              </h2>

            </div>

            <FaBriefcase className="profile__card-icon" />

          </div>


          {isEditing ? (

            <div className="profile__fields">

              <div className="profile__field">

                <span className="profile__field-label">
                  Target Role
                </span>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Experience Level
                </span>

                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="">
                    Select experience
                  </option>

                  <option value="Entry Level">
                    Entry Level
                  </option>

                  <option value="Mid Level">
                    Mid Level
                  </option>

                  <option value="Senior Level">
                    Senior Level
                  </option>

                </select>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Preferred Job Type
                </span>

                <select
                  name="preferredJobType"
                  value={formData.preferredJobType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select job type
                  </option>

                  <option value="Full Time">
                    Full Time
                  </option>

                  <option value="Part Time">
                    Part Time
                  </option>

                  <option value="Contract">
                    Contract
                  </option>

                  <option value="Internship">
                    Internship
                  </option>

                </select>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Preferred Location
                </span>

                <input
                  type="text"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                />

              </div>


              <div className="profile__field">

                <label>

                  <input
                    type="checkbox"
                    name="activelyLooking"
                    checked={formData.activelyLooking}
                    onChange={handleChange}
                  />

                  Actively Looking for Jobs

                </label>

              </div>

            </div>

          ) : (

            <div className="profile__fields">

              <div className="profile__field">

                <span className="profile__field-label">
                  Target Role
                </span>

                <strong>
                  {user.role || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Experience Level
                </span>

                <strong>
                  {user.experienceLevel || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Preferred Job Type
                </span>

                <strong>
                  {user.preferredJobType || "Not provided"}
                </strong>

              </div>


              <div className="profile__field">

                <span className="profile__field-label">
                  Preferred Location
                </span>

                <strong>
                  {user.preferredLocation || "Not provided"}
                </strong>

              </div>

            </div>

          )}

        </section>


        {/* =====================================
            SAVE / CANCEL
        ====================================== */}

        {isEditing && (

          <section className="profile__edit-actions">

            <button
              type="button"
              onClick={handleCancel}
              disabled={isSaving}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving
                ? "Saving..."
                : "Save Changes"}
            </button>

          </section>

        )}


        {/* =====================================
            CAREER STATS
        ====================================== */}

        <section className="profile__card profile__card--stats">

          <div className="profile__card-header">

            <div>

              <span className="profile__card-eyebrow">
                CAREER TRACKER
              </span>

              <h2>
                Your Progress
              </h2>

            </div>

          </div>


          <div className="profile__stats">

            <div className="profile__stat">

              <strong>
                {user.stats?.applications ?? 0}
              </strong>

              <span>
                Applications
              </span>

            </div>


            <div className="profile__stat">

              <strong>
                {user.stats?.interviews ?? 0}
              </strong>

              <span>
                Interviews
              </span>

            </div>


            <div className="profile__stat">

              <strong>
                {user.stats?.offers ?? 0}
              </strong>

              <span>
                Offers
              </span>

            </div>


            <div className="profile__stat profile__stat--highlight">

              <strong>
                {user.stats?.hired ?? 0}
              </strong>

              <span>
                Hired
              </span>

            </div>

          </div>

        </section>


        {/* =====================================
            ACCOUNT
        ====================================== */}

        <section className="profile__card">

          <div className="profile__card-header">

            <div>

              <span className="profile__card-eyebrow">
                ACCOUNT
              </span>

              <h2>
                Account Settings
              </h2>

            </div>

          </div>


          <div className="profile__actions">

            <button
              type="button"
              className="profile__action"
            >
              <span>
                Change Password
              </span>

              <span>
                →
              </span>

            </button>


            <button
              type="button"
              className="profile__action"
            >
              <span>
                Notification Preferences
              </span>

              <span>
                →
              </span>

            </button>


            <button
              type="button"
              className="profile__action profile__action--danger"
            >
              <span>
                Delete Account
              </span>

              <span>
                →
              </span>

            </button>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Profile;

