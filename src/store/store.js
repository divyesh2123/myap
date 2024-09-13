import {configureStore} from '@reduxjs/toolkit'
import counterslice from '../slice/counterslice'
import createSagaMiddleware  from 'redux-saga'
import { rootSaga } from '../saga/rootsaga';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({

    reducer : {

        counter: counterslice
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
export default store;