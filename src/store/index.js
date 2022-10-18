import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducer/users'

const persistConfig = {
    key: 'vehicles-reactjs',
    storage,
  }
  
const reducer = combineReducers({
    users: userReducer
})
const persistReducers = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistReducers,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})