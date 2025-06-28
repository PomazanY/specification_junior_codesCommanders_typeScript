import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../redux/auth/auth-slice';
import { postsApi } from './posts/posts-api';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    auth: persistedAuthReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
});


export const persistor = persistStore(store);


//использовать RootState и AppDispatch в других компонентах для типизации useSelector и useDispatch.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
