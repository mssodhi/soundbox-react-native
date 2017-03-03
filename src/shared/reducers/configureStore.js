import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './index'

const enhancer = applyMiddleware(thunk)

export default configureStore = (data={}) => {
    return createStore(rootReducer, data, enhancer)
}
