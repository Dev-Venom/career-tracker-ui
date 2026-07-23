import "./NotificationList.css";

import NotificationCard from "../NotificationCard/NotificationCard";

function NotificationList({

    notifications,

    onRead,

}) {

    if (notifications.length === 0) {

        return (

            <div className="notification-list__empty">

                <h3>No Notifications</h3>

                <p>You're all caught up! 🎉</p>

            </div>

        );

    }

    return (

        <section className="notification-list">

            {

                notifications.map((notification) => (

                    <NotificationCard

                        key={notification.id}

                        notification={notification}

                        onRead={onRead}

                    />

                ))

            }

        </section>

    );

}

export default NotificationList;