import produce from 'immer';

const STATE_INITIAL = {
  user: null,
};

export default function usuario(state = STATE_INITIAL, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;

        break;
      }

      default:
        return state;
    }
  });
}
