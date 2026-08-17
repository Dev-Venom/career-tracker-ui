import { Card, Button } from "../../../../components/ui";

function InterviewCard({ interview, onEdit, onDelete }) {
  return (
    <Card className="interview-card">
      <div className="interview-card__header">
        <h3>{interview.companyName}</h3>

        <span>{interview.round}</span>
      </div>

      <p>
        <strong>Position:</strong> {interview.jobTitle}
      </p>

      <p>
        <strong>Date:</strong> {interview.interviewDate}
      </p>

      <p>
        <strong>Time:</strong> {interview.interviewTime}
      </p>

      <p>
        <strong>Interviewer:</strong> {interview.interviewer}
      </p>

      <p>
        <strong>Meeting:</strong>{" "}
        <a href={interview.meetingLink} target="_blank" rel="noreferrer">
          Join Meeting
        </a>
      </p>

      <div className="interview-card__actions">
        <Button variant="secondary" onClick={() => onEdit(interview)}>
          Edit
        </Button>

        <Button variant="danger" onClick={() => onDelete(interview.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default InterviewCard;
