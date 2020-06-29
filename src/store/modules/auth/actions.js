export function sigInRequest(data) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      data,
    },
  };
}

export function sigInSuccess(user, token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      user,
      token,
    },
  };
}

export function cadastroRequest(data) {
  return {
    type: '@auth/CADASTRO_REQUEST',
    payload: {
      data,
    },
  };
}

export function cadastroSuccess() {
  return {
    type: '@auth/CADASTRO_SUCCESS',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
