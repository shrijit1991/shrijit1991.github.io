var CACHE_NAME = 'koinex-ticker-cache';
var reg = null;
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        reg = registration;
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });

    self.addEventListener('install', eve => {

    })
  }

  function enableNotifications() {
    navigator.serviceWorker.ready.then(swreg => {
      console.log('service worker ready!')
      if('PushManager' in window) {
        Notification.requestPermission()
        .then(notificationPermission => {
          console.log(notificationPermission);
          reg.showNotification('hello').then(() => {
            console.log('notification shown');
          }, err => {
            console.log(err);
          });
          //console.log(notificationPermission);
        })
        .catch(err => {
          if((Notification).permission == 'denied') {
            console.log('push notification permission denied!')
          }
        })
      }
      else {
        console.log('push manager not supported')
      }
    }, err => {
      console.log(err);
    })
  }