import { createStore } from '../custom/redux';
import rootReducer from '../reducers';

export const store = createStore(rootReducer);