import "./UpcomingInterviews.css";

function UpcomingInterviews({ interviews = [] }) {
  return (
    <section className="upcoming-interviews">
      <h2 className="upcoming-interviews__title">
        Upcoming Interviews
      </h2>

      {interviews.length === 0 ? (
        <div className="upcoming-interviews__empty">
          <p>No upcoming interviews scheduled.</p>
        </div>
      ) : (
        <div className="upcoming-interviews__list">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="upcoming-interviews__card"
            >
              <h3>{interview.companyName}</h3>

              <p>{interview.jobTitle}</p>

              <span className="upcoming-interviews__round">
                {interview.round}
              </span>

              <div className="upcoming-interviews__date">
                <strong>{interview.interviewDate}</strong>
                <span>{interview.interviewTime}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default UpcomingInterviews;