import { configureStore } from '@reduxjs/toolkit'
import webReducer from './recuder_slices/webReducer'

export default configureStore({
  reducer: {
    web: webReducer,
  },
})