import {call,put,takeLatest} from 'redux-saga/effects'
import axios from 'axios'
var id=""
export function* detail_people()
{
   
    yield takeLatest("GET_DETAIL_PEOPLE",workerSaga)
}
function fetchDetail()
{
    
    return axios({
        method:"GET",
        url:`https://swapi.co/api/people/${id}/`
    })
}
function* workerSaga(payload)
{
    id=payload.id
    try
    {
        const response=yield call(fetchDetail)
        const results=response.data
        yield put({type:"GET_DETAIL_PEOPLE_SUCCESS",results})
    }
    catch(error)
    {
        yield put({type:"GET_DETAIL_PEOPLE_ERROR",error})
    }
}