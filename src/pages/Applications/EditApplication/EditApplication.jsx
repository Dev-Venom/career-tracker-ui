import "./EditApplication.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import detectJobPlatform from "../../../utils/detectJobPlatform";
import toast from "react-hot-toast";

import { Card } from "../../../components/ui";

import ApplicationForm from "../../../components/ApplicationForm/ApplicationForm";

import {
  getApplicationById,
  updateApplication,
} from "../../../services/applications/applicationService";

function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    jobType: "FULL_TIME",
    status: "APPLIED",
    salary: "",
    appliedDate: "",
    jobUrl: "",
    notes: "",
    jobPlatform: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplication();
  }, [id]);

  async function loadApplication() {
    try {
      const response = await getApplicationById(id);

      setFormData(response.data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load application.");

      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      ...formData,
      jobPlatform: detectJobPlatform(formData.jobUrl),
    };

    try {
      await updateApplication(id, payload);

      toast.success("Application updated successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to update application:", error);

      toast.error("Failed to update application.");
    }
  }

  if (loading) {
    return (
      <main className="edit-application">
        <p className="edit-application__loading">
          Loading application...
        </p>
      </main>
    );
  }

  return (
    <main className="edit-application">
      <div className="edit-application__header">
        <p className="edit-application__eyebrow">
          APPLICATION TRACKER
        </p>

        <h1 className="edit-application__title">
          Edit Application
        </h1>

        <p className="edit-application__description">
          Update the details of this job opportunity.
        </p>
      </div>

      <Card className="edit-application__card">
        <ApplicationForm
          title="Application Details"
          submitText="Update Application"
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Card>
    </main>
  );
}

export default EditApplication;