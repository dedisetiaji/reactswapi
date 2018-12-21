import {put,call,takeLatest} from 'redux-saga/effects'
import axios from 'axios'
const url="https://swapi.co/api/"
export function* people()
{
   
    yield takeLatest("GET_PEOPLE_REQUEST",workerSaga)
}
function fetchPeople()
{
    return axios({
        method:"GET",
        url:`${url}people/`
    })
}
function* workerSaga()
{
    
    try
    {
        const response=yield call(fetchPeople)
        const results=response.data.results
        yield put({type:"GET_PEOPLE_SUCCESS",results})
    }
    catch(error)
    {
       yield put({type:"GET_PEOPLE_ERROR",error})
    }
}