import {call, put} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';
import {
  confirmNewPasswordRequest,
  confirmNewPasswordSuccess,
  confirmNewPasswordFailure,
} from 'core/reducers';
import {CognitoUserWithAttributes} from '../../types';
import {amplifyApi} from 'api/amplify';
import {syncAndGetFavoritesSaga} from '../favorites/syncAndGetFavoritesSaga';
import {getVisitedSaga} from '../visited/getVisitedSaga';

export function* confirmNewPasswordSaga({
  payload: {email, tempPassword, newPassword},
}: ActionType<typeof confirmNewPasswordRequest>) {
  try {
    const user: CognitoUserWithAttributes = yield call(
      amplifyApi.signIn,
      email,
      tempPassword,
    );

    const {attributes} = user;

    yield call(amplifyApi.changePassword, user, tempPassword, newPassword);
    yield call(syncAndGetFavoritesSaga);
    yield call(getVisitedSaga);

    yield put(confirmNewPasswordSuccess(attributes));
  } catch (e) {
    yield put(confirmNewPasswordFailure(e as Error));
  }
}
