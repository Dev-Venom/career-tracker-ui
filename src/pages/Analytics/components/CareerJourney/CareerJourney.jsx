import "./CareerJourney.css";

import {
    FaFileAlt,
    FaEye,
    FaUserTie,
    FaTrophy
} from "react-icons/fa";

function CareerJourney() {

    return (

        <section className="career-journey">

            <div className="career-journey__header">

                <h2>

                    Career Journey

                </h2>

                <p>

                    Track every milestone of your job search.

                </p>

            </div>

            <div className="career-journey__timeline">

                <div className="career-step complete">

                    <div className="career-step__icon">

                        <FaFileAlt />

                    </div>

                    <span>Applied</span>

                </div>

                <div className="career-line complete"></div>

                <div className="career-step complete">

                    <div className="career-step__icon">

                        <FaEye />

                    </div>

                    <span>Resume Viewed</span>

                </div>

                <div className="career-line complete"></div>

                <div className="career-step complete">

                    <div className="career-step__icon">

                        <FaUserTie />

                    </div>

                    <span>Interview</span>

                </div>

                <div className="career-line"></div>

                <div className="career-step">

                    <div className="career-step__icon">

                        <FaTrophy />

                    </div>

                    <span>Offer</span>

                </div>

            </div>

        </section>

    );

}

export default CareerJourney;