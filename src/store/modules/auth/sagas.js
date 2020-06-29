import {all, call, put, takeLatest} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';

import api from '../../../services/api';

import {cadastroSuccess, sigInSuccess, signFailure} from './actions';

export function* login({payload}) {
  const {email, senha} = payload.data;

  try {
    const {data} = yield call(api.post, 'sessoes', {
      email,
      senha,
    });

    showMessage({
      message: 'Login realizado com sucesso!',
      type: 'success',
      animationDuration: 1000,
      icon: {
        icon: 'success',
        position: 'left',
      },
    });

    const {token, ...usuario} = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(sigInSuccess(usuario, token));
  } catch (error) {
    showMessage({
      message: 'Erro no login',
      description: `E-mail ou senha inválido`,
      type: 'danger',
      animationDuration: 1000,
      icon: {
        icon: 'danger',
        position: 'left',
      },
    });

    console.tron.log('Erro no login', error);

    yield put(signFailure());
  }
}

export function* criarConta({payload}) {
  const {nome, email, senha} = payload.data;

  try {
    const {data} = yield call(api.post, 'usuarios', {
      nome,
      email,
      senha,
    });

    showMessage({
      message: 'Sucesso!',
      description: `Cadastro realizado com sucesso! Realize o login`,
      type: 'success',
      animationDuration: 1000,
      icon: {
        icon: 'success',
        position: 'left',
      },
    });

    yield put(cadastroSuccess());
  } catch (error) {
    showMessage({
      message: 'Erro no cadastro',
      description: `E-mail já existente!`,
      type: 'danger',
      animationDuration: 1000,
      icon: {
        icon: 'danger',
        position: 'left',
      },
    });

    console.tron.log('Erro no cadastro', error);

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/CADASTRO_REQUEST', criarConta),
  takeLatest('persist/REHYDRATE', setToken),
  /*  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_IN_REQUEST', login), */
]);
