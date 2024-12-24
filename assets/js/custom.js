// custom.js
$(document).ready(function () {
    function addNotification(appName, message, imgSrc) {
        const notificationHTML = `<div class="notification-item">
            <img src="${imgSrc}" alt="${appName} Logo">
            <div class="notification-content">
                <span class="app-name">${appName}</span>
                <p>${message}</p>
            </div>
        </div>`;
        $('.notification-list').append(notificationHTML);
    }

    function fetchNotifications() {
        $.get('/api/notifications/all', function (data) {
            if (data.success) {
                $('.notification-list').empty();
                data.notifications.forEach(notif => {
                    addNotification(notif.appName, notif.body, notif.iconUrl);
                });
            } else {
                console.error('Failed to fetch notifications');
            }
        });
    }

    setInterval(fetchNotifications, 10000);
    fetchNotifications();
});
