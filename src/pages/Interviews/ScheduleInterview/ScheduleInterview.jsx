import "./ScheduleInterview.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Button, Input } from "../../../components/ui";

import { scheduleInterview } from "../../../services/interviews/interviewService";
import { getMyApplications } from "../../../services/applications/applicationService";

function ScheduleInterview() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicationId: "",
    interviewDate: "",
    interviewTime: "",
    interviewer: "",
    meetingLink: "",
    round: "",
    notes: "",
  });

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function loadApplications() {
      try {
        const data = await getMyApplications();

        setApplications(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadApplications();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await scheduleInterview(formData);

      alert("Interview scheduled successfully!");

      navigate("/interviews");
    } catch (error) {
      alert("Failed to schedule interview.");

      console.error(error);
    }
  }

  return (
    <main className="schedule-interview">
      <Card className="schedule-interview__card">
        <h1>Schedule Interview</h1>

        <form onSubmit={handleSubmit}>
          <select
            name="applicationId"
            value={formData.applicationId}
            onChange={handleChange}
            required
          >
            <option value="">Select an application</option>

            {applications.map((application) => (
              <option key={application.id} value={application.id}>
                {application.companyName}
                {" - "}
                {application.jobTitle}
              </option>
            ))}
          </select>

          <Input
            type="date"
            name="interviewDate"
            value={formData.interviewDate}
            onChange={handleChange}
            required
          />

          <Input
            type="time"
            name="interviewTime"
            value={formData.interviewTime}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            name="interviewer"
            placeholder="Interviewer"
            value={formData.interviewer}
            onChange={handleChange}
          />

          <Input
            type="text"
            name="round"
            placeholder="Interview Round"
            value={formData.round}
            onChange={handleChange}
          />

          <Input
            type="url"
            name="meetingLink"
            placeholder="Meeting Link"
            value={formData.meetingLink}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <Button type="submit">Schedule Interview</Button>
        </form>
      </Card>
    </main>
  );
}

export default ScheduleInterview;
