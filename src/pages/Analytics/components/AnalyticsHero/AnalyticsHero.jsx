import "./AnalyticsHero.css";

function AnalyticsHero() {

    return (

        <section className="analytics-hero">

            <div className="analytics-hero__content">

                <span className="analytics-hero__badge">

                    📊 Career Intelligence

                </span>

                <h1 className="analytics-hero__title">

                    Your career journey, visualized.

                </h1>

                <p className="analytics-hero__description">

                    Discover trends, measure your progress,
                    and make smarter career decisions.

                </p>

            </div>

            <button className="analytics-hero__filter">

                Last 30 Days ▼

            </button>

        </section>

    );

}

export default AnalyticsHero;