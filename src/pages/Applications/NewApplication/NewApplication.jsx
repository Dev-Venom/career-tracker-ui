import "./NewApplication.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApplication } from "../../../services/applications/applicationService";
import ApplicationForm from "../../../components/ApplicationForm/ApplicationForm";
import detectJobPlatform from "../../../utils/detectJobPlatform";


import {
  Card,
  Input,
  Button,
  Select,
  TextArea
} from "../../../components/ui";

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

    alert("Application added successfully!");

    navigate("/dashboard");
  } catch (error) {
    console.error(error);

    alert("Failed to add application.");
  }
}

  

  return (
    <main className="new-application">
      <Card>

  <ApplicationForm
    title="Add New Application"
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