import "./EditInterview.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Input } from "../../../components/ui";

import toast from "react-hot-toast";

import {
  getInterviewById,
  updateInterview,
} from "../../../services/interviews/interviewService";

function EditInterview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    interviewDate: "",
    interviewTime: "",
    interviewer: "",
    meetingLink: "",
    round: "",
    notes: "",
  });

  useEffect(() => {
    async function loadInterview() {
      try {
        const interview = await getInterviewById(id);

        setFormData({
          interviewDate: interview.interviewDate,
          interviewTime: interview.interviewTime,
          interviewer: interview.interviewer || "",
          meetingLink: interview.meetingLink || "",
          round: interview.round || "",
          notes: interview.notes || "",
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadInterview();
  }, [id]);

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
      await updateInterview(id, formData);

      toast.success("Interview updated successfully!");

      navigate("/interviews");
    } catch (error) {
      console.error(error);

      toast.error("Failed to update interview.");
    }
  }

  return (
    <main className="edit-interview">
      <Card className="edit-interview__card">
        <h1>Edit Interview</h1>

        <form onSubmit={handleSubmit}>
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
            name="interviewer"
            placeholder="Interviewer"
            value={formData.interviewer}
            onChange={handleChange}
          />

          <Input
            name="round"
            placeholder="Interview Round"
            value={formData.round}
            onChange={handleChange}
          />

          <Input
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

          <Button type="submit">
            Update Interview
          </Button>
        </form>
      </Card>
    </main>
  );
}

export default EditInterview;