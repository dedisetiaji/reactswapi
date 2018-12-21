import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'
import MainRoute from './Route'
import reducer from './redux/reducers/'
import rootSaga from './redux/sagas/'
const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
ReactDOM.render(<Provider store={store}>
    <MainRoute/>
</Provider>,document.getElementById("root"))