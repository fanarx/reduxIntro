import { loadState, saveState } from '../helpers';
import { createStore } from 'redux';
import rootReducer from '../reducers';


const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(rootReducer, persistedState);

    store.subscribe(() => {
        saveState({ todos: store.getState().todos });
    });

    return store;
};

export default configureStore;
