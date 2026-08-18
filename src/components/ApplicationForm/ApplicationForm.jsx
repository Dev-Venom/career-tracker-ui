import "./ApplicationForm.css";

import { Input, Button, Select, TextArea } from "../ui";

function ApplicationForm({ title, submitText, formData, onChange, onSubmit }) {
  return (
    <div className="application-form">
      <div className="application-form__header">
        <h2 className="application-form__title">{title}</h2>

        <p className="application-form__description">
          Enter the details of the opportunity you're tracking.
        </p>
      </div>

      <form className="application-form__form" onSubmit={onSubmit}>
        <section className="application-form__section">
          <div className="application-form__section-header">
            <h3>Job Details</h3>

            <p>Basic information about the position.</p>
          </div>

          <div className="application-form__grid">
            <Input
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={onChange}
              required
            />

            <Input
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={onChange}
              required
            />

            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={onChange}
            />

            <Select
              label="Job Type"
              name="jobType"
              value={formData.jobType}
              onChange={onChange}
              options={[
                {
                  value: "FULL_TIME",
                  label: "Full Time",
                },
                {
                  value: "PART_TIME",
                  label: "Part Time",
                },
                {
                  value: "INTERNSHIP",
                  label: "Internship",
                },
                {
                  value: "CONTRACT",
                  label: "Contract",
                },
              ]}
            />
          </div>
        </section>

        <section className="application-form__section">
          <div className="application-form__section-header">
            <h3>Application Details</h3>

            <p>Track the current stage and important dates.</p>
          </div>

          <div className="application-form__grid">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={onChange}
              options={[
                {
                  value: "APPLIED",
                  label: "Applied",
                },
                {
                  value: "INTERVIEW",
                  label: "Interview",
                },
                {
                  value: "OFFER",
                  label: "Offer",
                },
                {
                  value: "REJECTED",
                  label: "Rejected",
                },
              ]}
            />

            <Input
              type="number"
              label="Salary"
              name="salary"
              value={formData.salary}
              onChange={onChange}
            />

            <Input
              type="date"
              label="Applied Date"
              name="appliedDate"
              value={formData.appliedDate}
              onChange={onChange}
            />

            <Select
              name="jobPlatform"
              label="Job Platform"
              value={formData.jobPlatform}
              onChange={onChange}
              options={[
                {
                  value: "LINKEDIN",
                  label: "LinkedIn",
                },
                {
                  value: "NAUKRI",
                  label: "Naukri",
                },
                {
                  value: "INDEED",
                  label: "Indeed",
                },
                {
                  value: "GLASSDOOR",
                  label: "Glassdoor",
                },
                {
                  value: "WELLFOUND",
                  label: "Wellfound",
                },
                {
                  value: "COMPANY",
                  label: "Company Website",
                },
                {
                  value: "OTHER",
                  label: "Other",
                },
              ]}
            />
          </div>
        </section>

        <section className="application-form__section">
          <div className="application-form__section-header">
            <h3>Additional Information</h3>

            <p>Save the job link and any notes you want to remember.</p>
          </div>

          <div className="application-form__stack">
            <Input
              type="url"
              label="Job URL"
              name="jobUrl"
              value={formData.jobUrl}
              onChange={onChange}
              placeholder="https://..."
            />

            <TextArea
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={onChange}
              placeholder="Add notes about this opportunity..."
            />
          </div>
        </section>

        <div className="application-form__actions">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>

          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;
