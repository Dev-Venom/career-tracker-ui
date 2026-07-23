import "./ApplicationForm.css";

import {
  Input,
  Button,
  Select,
  TextArea,
} from "../ui";

function ApplicationForm({
  title,
  submitText,
  formData,
  onChange,
  onSubmit,
}) {
  return (
    <>
      <h1>{title}</h1>

      <form onSubmit={onSubmit}>

        <Input
  label="Company Name"
  name="companyName"
  value={formData.companyName}
  onChange={onChange}
/>

<Input
  label="Job Title"
  name="jobTitle"
  value={formData.jobTitle}
  onChange={onChange}
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
  onChange={onChange}
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
    id="jobPlatform"
    name="jobPlatform"
    label="Job Platform"
    value={formData.jobPlatform}
    onChange={onChange}
    options={[
        { value: "LINKEDIN", label: "LinkedIn" },
        { value: "NAUKRI", label: "Naukri" },
        { value: "INDEED", label: "Indeed" },
        { value: "GLASSDOOR", label: "Glassdoor" },
        { value: "WELLFOUND", label: "Wellfound" },
        { value: "COMPANY", label: "Company Website" },
        { value: "OTHER", label: "Other" }
    ]}
/>

<Input
  type="url"
  label="Job URL"
  name="jobUrl"
  value={formData.jobUrl}
  onChange={onChange}
/>

<TextArea
  label="Notes"
  name="notes"
  value={formData.notes}
  onChange={onChange}
/>

        <Button
          type="submit"
          fullwidth
        >
          {submitText}
        </Button>

      </form>
    </>
  );
}

export default ApplicationForm;