// para crear el store
import { createStore, applyMiddleware } from 'redux' 
//Persistir los datos del store
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './redux/reducer/index'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        '',
    ]
}

const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persisterReducer, applyMiddleware(logger, thunk));
const persistor = persistStore(store);

export { store, persistor }