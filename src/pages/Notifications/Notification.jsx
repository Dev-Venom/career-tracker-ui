import "./Notification.css";

import useNotifications from "../../hooks/useNotifications";

import NotificationList from "./components/NotificationList/NotificationList";

function Notification() {

    const {
        notifications,
        loading,
        error,
        markAsRead,
        markAllAsRead,
    } = useNotifications();

    if (loading) {
        return <h2>Loading notifications...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (

        <main className="notifications">

            <div className="notifications__header">

                <h1>Notifications</h1>

                <button
                    className="notifications__button"
                    onClick={markAllAsRead}
                >
                    Mark All Read
                </button>

            </div>

            <NotificationList
                notifications={notifications}
                onRead={markAsRead}
            />

        </main>

    );

}

export default Notification;