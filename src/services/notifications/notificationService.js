import client from "../api/client";

// Get all notifications
export async function getNotifications() {

    const response = await client.get("/notifications");

    return response.data;

}

// Get unread notification count
export async function getUnreadCount() {

    const response = await client.get("/notifications/unread-count");

    return response.data;

}

// Mark one notification as read
export async function markNotificationAsRead(id) {

    const response = await client.put(
        `/notifications/${id}/read`
    );

    return response.data;

}

// Mark every notification as read
export async function markAllNotificationsAsRead() {

    await client.put("/notifications/read-all");

}