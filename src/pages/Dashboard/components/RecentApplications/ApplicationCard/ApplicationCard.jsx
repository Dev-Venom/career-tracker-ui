import "./ApplicationCard.css";

import { useNavigate } from "react-router-dom";

import { Card, Button } from "../../../../../components/ui";

import { formatDate } from "../../../../../utils/date";

import { getCompanyLogo } from "../../../../../utils/companyLogo";

function ApplicationCard({
  id,
  company,
  position,
  status,
  appliedDate,
  jobUrl,
  onDelete,
}) {
  const navigate = useNavigate();

  const logo = getCompanyLogo(jobUrl);

  function handleEdit() {
    navigate(`/applications/${id}/edit`);
  }
  function handleViewJob() {
    if (!jobUrl) {
      alert("Job URL not available.");
      return;
    }

    window.open(jobUrl, "_blank", "noopener,noreferrer");
  }
  function handleOpenJob() {
    if (!jobUrl) {
      alert("Job URL not available.");
      return;
    }

    window.open(jobUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="application-card">
      <div className="application-card__content">
        <div className="application-card__company-wrapper">
          {logo ? (
            <img
              src={logo}
              alt={company}
              className="application-card__logo application-card__logo--clickable"
              onClick={handleOpenJob}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="application-card__avatar">
              {company.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <p className="application-card__company">{company}</p>

            <h3 className="application-card__position">{position}</h3>

            <span
              className={`application-card__status application-card__status--${status.toLowerCase()}`}
            >
              {status.replace("_", " ")}
            </span>
          </div>
        </div>
      </div>

      <div className="application-card__footer">
        <span>Applied {formatDate(appliedDate)}</span>

        <div className="application-card__actions">
          

          <Button variant="secondary" size="sm" onClick={handleEdit}>
            Edit
          </Button>

          <Button variant="danger" size="sm" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ApplicationCard;
