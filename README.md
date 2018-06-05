# React Redux Saga with Firebase Integration

## Info

Uses:
  * React (create-react-app)
  * firebase 4.3.1
  * react-router 4.2.0
  * redux-saga
  * redux-saga-firebase
  * react-router-redux (^5.0.0-alpha.9) using react-router 4

Features:
  * Sign In
  * Register
  * Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Database: Users

##To install

From terminal:
- `git clone https://github.com/richardhealy/react-redux-saga-firebase.git`
- `cd react-redux-saga-firebase` 
- Add your Firebase config to `/src/firebase/rsf.js`
- `npm install` 
- `npm start`

Todo

- Move config to separate folder. Refactor to deal with different env configs.
- Remove messaging from redux reducers. Feels unnatural being in there.
- Refactor the reducers to be cleaner.

##Thanks to:

- Based on the work from: https://github.com/rwieruch/react-mobx-firebase-authentication
- ...and https://github.com/n6g7/redux-saga-firebase for making Firebase integration easy!
