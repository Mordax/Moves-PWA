import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from './serviceWorker';
import './i18n';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
    if ('PushManager' in window)  subscribeToPush();
    else console.error('Push is not supported');
  });
}
const vapidPublicKey = 'BHu0G9M6gwhxw1DTcz6Vc9d7h5SfBOJxhQg33Hctt8z2GFsaIyD_X8JX1ut8LET5_xB2CwwjNrSJiq7EGu-lGAE';
const API_URL = "https://push-server-moves-a.herokuapp.com/api";
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
                      console.log(pushSubscription);
                      fetch(`${API_URL}/subscribe`, { // And now we can send it to our server.
                          method: 'post',
                          headers: {
                              'Content-type': 'application/json'
                          },
                          body: JSON.stringify(pushSubscription), // Our subscription is sent as JSON in the body
                      }).catch(error => console.error(error));
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

/*
function createIndexedDB() {
  if (!('indexedDB' in window)) {return null;}
  return indexedDB.open('dashboardr', 1, function(upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains('events')) {
      const eventsOS = upgradeDb.createObjectStore('events', {keyPath: 'id'});
    }
  });
}

const dbPromise = createIndexedDB();

loadContentNetworkFirst();

function loadContentNetworkFirst() {
  getServerData()
  .then(dataFromNetwork => {
    saveEventDataLocally(dataFromNetwork)
    .then(() => {
      // setLastUpdated(new Date());
      // messageDataSaved();
    }).catch(err => {
      // messageSaveError();
      console.warn(err);
    });
  }).catch(err => {
    console.log('Network requests have failed, this is expected if offline');
    getLocalEventData()
    .then(offlineData => {
      if (!offlineData.length) {
        // messageNoData();
      } else {
        // messageOffline();
      }
    });
  });
}

function getServerData() {
  return fetch('api/getAll').then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}

function saveEventDataLocally(events) {
  if (!('indexedDB' in window)) {return null;}
  return dbPromise.then(db => {
    const tx = db.transaction('events', 'readwrite');
    const store = tx.objectStore('events');
    return Promise.all(events.map(event => store.put(event)))
    .catch(() => {
      tx.abort();
      throw Error('Events were not added to the store');
    });
  });
}

function getLocalEventData() {
  if (!('indexedDB' in window)) {return null;}
  return dbPromise.then(db => {
    const tx = db.transaction('events', 'readonly');
    const store = tx.objectStore('events');
    return store.getAll();
  });
}
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();