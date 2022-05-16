import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import ListPemasukanSlice from "./ListPemasukanSlice";
import ListPengeluaranSlice from "./ListPengeluaranSlice";

const reducers = combineReducers({
    listPemasukan: ListPemasukanSlice,
    listPengeluaran: ListPengeluaranSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer : persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})
const persistor = persistStore(store)

export { store, persistor }