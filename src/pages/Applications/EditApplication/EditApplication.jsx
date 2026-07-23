import "./EditApplication.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import detectJobPlatform from "../../../utils/detectJobPlatform";
import toast from "react-hot-toast";


import { Card, Input, Button, Select, TextArea } from "../../../components/ui";

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
  });

  useEffect(() => {
    loadApplication();
  }, []);

  async function loadApplication() {
    try {
      const response = await getApplicationById(id);

      setFormData(response.data);
    } catch (error) {
      console.error(error);
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

      Toaster.success("Application updated successfully!");

      navigate("/dashboard");
    } catch (error) {
  console.error("Full Error:", error);
  console.error("Response:", error.response);
  console.error("Response Data:", error.response?.data);

  Toaster.error("Failed to update application.");
}
  }

  return (
    <main>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <Input
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />

          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <Select
            label="Job Type"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            options={[
              { value: "FULL_TIME", label: "Full Time" },
              { value: "PART_TIME", label: "Part Time" },
              { value: "INTERNSHIP", label: "Internship" },
              { value: "CONTRACT", label: "Contract" },
            ]}
          />

          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: "APPLIED", label: "Applied" },
              { value: "INTERVIEW", label: "Interview" },
              { value: "OFFER", label: "Offer" },
              { value: "REJECTED", label: "Rejected" },
            ]}
          />

          <Input
            type="number"
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <Input
            type="date"
            label="Applied Date"
            name="appliedDate"
            value={formData.appliedDate}
            onChange={handleChange}
          />

          <Input
            type="url"
            label="Job URL"
            name="jobUrl"
            value={formData.jobUrl}
            onChange={handleChange}
          />

          <TextArea
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <Button type="submit" fullwidth>
            Update Application
          </Button>
        </form>
      </Card>
    </main>
  );
}

export default EditApplication;
