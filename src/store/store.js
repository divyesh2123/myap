import {configureStore} from '@reduxjs/toolkit'
import counterslice from '../slice/counterslice'


const store = configureStore({

    reducer : {

        counter: counterslice
        
    }
})

export default store;