"use strict";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/n-site/sw.js',{scope: '/n-site/'})
    .then(_ => {
      console.log('Server Worker Registered');
      if (!navigator.serviceWorker.controller) {
        document.querySelector('.snackbar').className
          = 'snackbar snackbar-opened';
        setTimeout(_ => {
          document.querySelector('.snackbar').className
            = 'snackbar';
        }, 2000);
      }
    })
    .catch(_ => {
      console.log('Oops there was a problem');
    });
}

window.addEventListener('DOMContentLoaded',event => {
  console.log(event);
});
