import { useEffect, useState } from "react";

import {

    getNotifications,
    getUnreadCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,

} from "../services/notifications/notificationService";

function useNotifications() {

    const [notifications, setNotifications] = useState([]);

    const [unreadCount, setUnreadCount] = useState(0);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadNotifications() {

        try {

            setLoading(true);

            const [notificationData, unread] = await Promise.all([

                getNotifications(),

                getUnreadCount(),

            ]);

            setNotifications(notificationData);

            setUnreadCount(unread);

            setError("");

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    }

    async function markAsRead(id) {

        try {

            await markNotificationAsRead(id);

            loadNotifications();

        } catch (error) {

            console.error(error);

        }

    }

    async function markAllAsRead() {

        try {

            await markAllNotificationsAsRead();

            loadNotifications();

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        loadNotifications();

    }, []);

    return {

        notifications,

        unreadCount,

        loading,

        error,

        markAsRead,

        markAllAsRead,

        refreshNotifications: loadNotifications,

    };

}

export default useNotifications;