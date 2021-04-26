import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {authReducer} from "./reducers/authReducer";
//import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {settingsReducer} from "./reducers/settingsReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    settings: settingsReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer,
    compose(applyMiddleware(thunk)))

//const logger = createLogger()

// export let store = createStore(persistedReducer,
//     compose(applyMiddleware(thunk),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())),)

export let persistor = persistStore(store)