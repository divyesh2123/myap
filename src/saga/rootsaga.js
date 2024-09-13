import {all}  from 'redux-saga/effects'
import { counterasync } from './countersaga';

export function* rootSaga()
{

    return yield all([counterasync()]);
}