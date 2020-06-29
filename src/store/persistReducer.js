import AsyncStorage from '@react-native-community/async-storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'tireitu',
      storage: AsyncStorage,
      whitelist: ['auth', 'usuario'],
    },
    reducers
  );
  return persistedReducer;
};
