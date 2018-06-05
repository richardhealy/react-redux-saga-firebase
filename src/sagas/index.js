import firebase from 'firebase';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  types,
  loginSuccess,
  loginFailure,
  loginWithEmailSuccess,
  loginWithEmailFailure,
  logoutSuccess,
  logoutFailure,
  syncUser,
  registerWithEmailSuccess,
  registerWithEmailFailure,
  createUserSuccess,
  createUserFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  passwordForgetSuccess,
  passwordForgetFailure,
} from '../actions';

import * as routes from '../constants/routes';

import rsf from '../firebase/rsf';

const authProvider = new firebase.auth.GoogleAuthProvider()

function *loginSaga () {
  try {
    const data = yield call(rsf.auth.signInWithPopup, authProvider)
    yield put(loginSuccess(data));
    yield put(push(routes.HOME));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function *loginWithEmailSaga (payload) {
  try {
    const data = yield call(rsf.auth.signInWithEmailAndPassword, payload.email, payload.password);
    yield put(loginWithEmailSuccess(data));
    yield put(push(routes.HOME));
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}

function *registerWithEmailSaga (payload) {
  try {
    const data = yield call(rsf.auth.createUserWithEmailAndPassword, payload.email, payload.password);
    yield put(registerWithEmailSuccess(data));
    yield put(push(routes.HOME));
  } catch (error) {
    yield put(registerWithEmailFailure(error));
  }
}

function *logoutSaga () {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(logoutSuccess(data));
    yield put(push(routes.SIGN_IN));
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function *syncUserSaga () {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);

    if (user) {
      yield put(syncUser(user)); 
    } else {
      yield put(syncUser(null));
    } 
  }
}

function *createUserSaga ({credential}) {
  try {
    yield call(rsf.database.create, 'user', {
      email: credential.email,
      displayName: credential.displayName,
      creationTime: credential.metadata.creationTime,
    });
    yield put(createUserSuccess(credential));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* passwordChangeSaga({password}) {
  try {
    yield call(rsf.auth.updatePassword, password);
    yield put(passwordChangeSuccess());
  }
  catch(error) {
    yield put(passwordChangeFailure(error));
  }
}


function* passwordForgetSaga({email}) {
  try {
    yield call(rsf.auth.sendPasswordResetEmail, email);
    yield put(passwordForgetSuccess());
  }
  catch(error) {
    yield put(passwordForgetFailure(error));
  }
}

export default function* loginRootSaga () {
  yield fork(syncUserSaga);
  yield [
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGIN_WITH_EMAIL.REQUEST, loginWithEmailSaga),
    takeEvery(types.REGISTER_WITH_EMAIL.REQUEST, registerWithEmailSaga),
    takeEvery(types.REGISTER_WITH_EMAIL.SUCCESS, createUserSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
    takeEvery(types.PASSWORD_CHANGE.REQUEST, passwordChangeSaga),
    takeEvery(types.PASSWORD_FORGET.REQUEST, passwordForgetSaga)
  ];
}