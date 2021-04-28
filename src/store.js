import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/molecules/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})