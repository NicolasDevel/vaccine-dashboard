import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./rootReducer";

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["dashboard"],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };