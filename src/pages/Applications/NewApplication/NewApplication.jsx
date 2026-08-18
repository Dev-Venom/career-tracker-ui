import "./NewApplication.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createApplication } from "../../../services/applications/applicationService";
import ApplicationForm from "../../../components/ApplicationForm/ApplicationForm";
import detectJobPlatform from "../../../utils/detectJobPlatform";

import toast from "react-hot-toast";

import { Card } from "../../../components/ui";

function NewApplication() {
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
      await createApplication(payload);

      toast.success("Application added successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error("Failed to add application.");
    }
  }

  return (
    <main className="new-application">
      <div className="new-application__header">
        <p className="new-application__eyebrow">APPLICATION TRACKER</p>

        <h1 className="new-application__title">Add New Application</h1>

        <p className="new-application__description">
          Keep your job search organized by tracking every opportunity in one
          place.
        </p>
      </div>

      <Card className="new-application__card">
        <ApplicationForm
          title="Application Details"
          submitText="Save Application"
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Card>
    </main>
  );
}

export default NewApplication;
