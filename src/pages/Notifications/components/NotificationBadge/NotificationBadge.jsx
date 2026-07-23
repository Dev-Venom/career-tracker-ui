import "./NotificationBadge.css";

import { FaBell } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function NotificationBadge({

    unreadCount,

}) {

    const navigate = useNavigate();

    return (

        <button
            className="notification-badge"
            onClick={() => navigate("/notifications")}
        >

            <FaBell />

            {

                unreadCount > 0 && (

                    <span className="notification-badge__count">

                        {unreadCount}

                    </span>

                )

            }

        </button>

    );

}

export default NotificationBadge;