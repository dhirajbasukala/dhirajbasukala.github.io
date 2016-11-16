
'use strict';

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
        body: 'Push Notification. Tada ! ',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    // event.waitUntil(self.registration.showNotification(title, options));
    const notificationPromise = self.registration.showNotification(title, options);
    event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://developers.google.com/web/')
    );
});

/*

self.addEventListener('push', function(event) {

    console.log('[Service Worker] Push Received.1');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    event.waitUntil(
        self.registration.showNotification('Got Push?', {
            body: 'Push Message received'
        }));
});
*/
