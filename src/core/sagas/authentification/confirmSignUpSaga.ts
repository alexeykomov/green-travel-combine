import {all, call, put, take, fork, takeEvery} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';
import {Auth} from 'aws-amplify';
import {
  confirmSignUpRequest,
  confirmSignUpSuccess,
  confirmSignUpFailure,
} from 'core/reducers';
import {createAuthHubChannel} from './createAuthHubChannel';
import {CognitoUser, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { CognitoUserWithAttributes } from 'core/types';

export function* confirmSignUpSaga({
  payload: {email, code},
}: ActionType<typeof confirmSignUpRequest>) {
  try {
    const channel = createAuthHubChannel();
   

    const [userData]: [CognitoUserWithAttributes | null] = yield all([
      call(function* () {
        while (true) {
          const data = yield take(channel);
          console.log('data', data)
          if (
            data?.payload?.event === 'autoSignIn' ||
            data?.payload?.event === 'autoSignIn_failure'
          ) {
            return data?.payload?.data;
          }
        }
      }),
      call([Auth, Auth.confirmSignUp], email, code),
    ]);

   
    yield put(confirmSignUpSuccess(userData?.attributes || null));
  } catch (e) {
    yield put(confirmSignUpFailure(e as Error));
  }
}
