import React from "react";
import ReactDOM from "react-dom";
import './i18n';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Route path = "/" component = { App }/>
  </BrowserRouter>,

  document.getElementById("root")
);

// Service worker registration, since we decided not to use react's original service worker
// therefore we will manually register it. 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
    if ('PushManager' in window)  subscribeToPush();
    else console.error('Push is not supported');
  });
}

// Generated public key and service url
const vapidPublicKey = 'BOQSx17Hj2IcVAPM3SLtucRRGgqdTt9DnnojOYGjy1SAIs09AjXQPlMjgP5NrOeBFBhX4m3B7kFx8HP28MOu1EU';
const API_URL = "https://push-service-moves-a.herokuapp.com/api";

// Functions provided by Guest lecturer to subscibe to push notification
function subscribeToPush() {
      navigator.serviceWorker.ready.then(
          function (serviceWorkerRegistration) {
              // Register to push events here
              // The server key has to be encoded using this function to work with the Push API
              const applicationServerKey = urlBase64ToUint8Array(vapidPublicKey);
              const options = {
                  userVisibleOnly: true,
                  applicationServerKey: applicationServerKey
              };
              // This method will create the subscription (or retrive an existing one)
              serviceWorkerRegistration.pushManager.subscribe(options).then(
                  function (pushSubscription) { // And this callback will get the subscription
                      
                      fetch(`${API_URL}/subscribe`, { // And now we can send it to our server.
                          method: 'post',
                          headers: {
                              'Content-type': 'application/json'
                          },
                          body: JSON.stringify(pushSubscription), // Our subscription is sent as JSON in the body
                      }).then(d => console.log(d)).catch(error => console.error(error));
                  }, function (error) {
                      console.log(error);
                  }
              );
          });
  }

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
