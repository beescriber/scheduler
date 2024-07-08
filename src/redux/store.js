import {configureStore} from '@reduxjs/toolkit';
import allreducers from './reducers';

const store = configureStore({reducer: allreducers});
//window.store = store;
export default store;