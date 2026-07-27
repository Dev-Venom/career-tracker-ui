import "./CareerSnapshot.css";

function CareerSnapshot({insight}) {

    return(

        <section className="career-snapshot">

            <div className="career-snapshot__icon">

                ✨

            </div>

            <div className="career-snapshot__content">

                <h2>

                    {insight?.title}

                </h2>

                <p>

                    {insight?.description}

                </p>

                <span>

                    {insight?.message}

                </span>

            </div>

        </section>

    );

}

export default CareerSnapshot;