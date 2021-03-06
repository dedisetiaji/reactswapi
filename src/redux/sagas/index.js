import {fork} from 'redux-saga/effects'
import {people} from './people'
import {detail_people} from './detail_people'
import {films} from './films'

export default function* rootSaga()
{
    yield[
        fork(people),
        fork(detail_people),
        fork(films)
    ]
}