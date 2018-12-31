import {call,put,takeLatest,all,race} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetch} from './fetch'
export function* films()
{
    yield takeLatest("GET_FILMS",workerSaga)
}
function* workerSaga(payload)
{
    try
    {
        const {response,timeout}=yield race({
            response:call (fetch,payload.url),
            timeout:call (delay,10000)
        })
        if(response)
        {
            const charactersResponse=yield all(response.data.characters.map(x=>call(fetch,x)))
            const planetsReposnse=yield all(response.data.planets.map(x=>call(fetch,x)))
            const characters=charactersResponse.map(x=>({name:x.data.name,url:x.data.url}))
            const planets=planetsReposnse.map(x=>({name:x.data.name,url:x.data.url}))
            const payload={
                characters:
                {
                   ...characters
                },
                planets:
                {
                    ...planets
                }
            }
            console.log(payload)
        }
    }catch(error)
    {

    }
}