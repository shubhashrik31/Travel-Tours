import {createStore} from 'redux'
import reducer from './reducer'

export default function setupStore(){
    return createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
