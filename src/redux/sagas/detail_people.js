import {call,put,takeLatest,race,all} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import axios from 'axios'
import {fetch} from './fetch'
export function* detail_people()
{
    yield takeLatest("GET_DETAIL_PEOPLE",workerSaga)
}
function fetchDetail(url)
{
    return axios({
        method:"GET",
        url:url
    })
}

function* workerSaga(payload)
{
    
    try
    {
        const url=decodeURIComponent(payload.url)
        const {response,timeout}=yield race({
            response:call(fetchDetail,url),
            timeout:call(delay,10000)
        })
        
        if(response)
        {
        
            const results=response.data
            const filmsresponse=yield all(response.data.films.map(x => call(fetch, x)));
            const speciesResponse=yield all(response.data.species.map(x => call(fetch, x)));
            const vehiclesResponse=yield all(response.data.vehicles.map(x => call(fetch, x)));
            const starshipsResponse=yield all(response.data.starships.map(x => call(fetch, x)));
          
            
            const films=filmsresponse.map(x=>({title:x.data.title,url:x.data.url}))
            const species=speciesResponse.map(x=>({name:x.data.name,url:x.data.url}))
            const vehicles=vehiclesResponse.map(x=>({name:x.data.name,url:x.data.url}))
            const starships=starshipsResponse.map(x=>({name:x.data.name,url:x.data.url}))
            const payload={
                films:
                {
                    ...films
                },
                species:
                {
                    ...species
                },
                vehicles:
                {
                    ...vehicles
                },
                starships:
                {
                    ...starships
                },
              
            }
            // console.log(array)
            yield put({type:"GET_DETAIL_PEOPLE_SUCCESS",results,payload})
        }
        else
        {
            yield put({type:"GET_DETAIL_PEOPLE_ERROR",timeout})
        }   
   }
   catch(error)
   {
       yield put({type:"GET_DETAIL_PEOPLE_ERROR",error})
   }
}