import "./RecentApplications.css";

import ApplicationCard from "./ApplicationCard";

function RecentApplications({
  applications = [],
  onDelete,
}) {
  return (
    <section className="recent-applications">
  <h2 className="recent-applications__title">
    Recent Applications
  </h2>

  {applications.length === 0 ? (
    <div className="recent-applications__empty">

      <h3>No applications yet</h3>

      <p>
        Start tracking your job search by adding your first application.
      </p>

    </div>
  ) : (
    <div className="recent-applications__list">
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          id={application.id}
          company={application.companyName}
          position={application.jobTitle}
          status={application.status}
          appliedDate={application.appliedDate}
          jobUrl={application.jobUrl}
          onDelete={onDelete}
        />
      ))}
    </div>
  )}
</section>
  );
}

export default RecentApplications;