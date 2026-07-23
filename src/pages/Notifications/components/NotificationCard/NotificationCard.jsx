import "./NotificationCard.css";

import { Button, Card } from "../../../../components/ui";

import {
    FaBell,
    FaBriefcase,
    FaCalendarCheck,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

function NotificationCard({

    notification,

    onRead,

}) {

    function getIcon(type) {

        switch (type) {

            case "APPLICATION":
                return <FaBriefcase />;

            case "INTERVIEW":
                return <FaCalendarCheck />;

            case "OFFER":
                return <FaCheckCircle />;

            case "REJECTION":
                return <FaTimesCircle />;

            default:
                return <FaBell />;

        }

    }

    return (

        <Card
            className={
                notification.read
                    ? "notification-card"
                    : "notification-card notification-card--unread"
            }
        >

            <div className="notification-card__icon">

                {getIcon(notification.type)}

            </div>

            <div className="notification-card__content">

                <h3>{notification.title}</h3>

                <p>{notification.message}</p>

                <small>

                    {new Date(notification.createdAt)
                        .toLocaleString()}

                </small>

            </div>

            {

                !notification.read && (

                    <Button
                        variant="secondary"
                        onClick={() => onRead(notification.id)}
                    >
                        Mark Read
                    </Button>

                )

            }

        </Card>

    );

}

export default NotificationCard;