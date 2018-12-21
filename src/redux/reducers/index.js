import people_reducer from './people'
import detail_people from './detail_people'
import {combineReducers} from 'redux'
export default combineReducers({
   people_reducer,
   detail_people
})