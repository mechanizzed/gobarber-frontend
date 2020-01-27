import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

// actions
import { signInSuccess, signFailure, signUpSuccess } from './actions';

/**
 * SignIn - Login
 */
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('Usuário inválido.');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.success('Login realizado com successo!');
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao realizar login');
    yield put(signFailure());
  }
}

/**
 * SignUp - Register
 */
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    toast.success(
      'Cadastro realizado com successo! Faça login com seus dados para continuar'
    );
    yield put(signUpSuccess());
    history.push('/');
  } catch (error) {
    toast.error('Erro ao realizar cadastro');
    yield put(signFailure());
  }
}

/**
 * Set token for header
 */

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  toast.success('Deslogado com sucesso!');
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
