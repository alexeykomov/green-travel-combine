import {call, put, select, all} from 'redux-saga/effects';
import {
  getSettlementsDataRequest,
  getPaginationSettlementsDataRequest,
  getSearchSettlementsDataRequest,
} from 'core/actions';
import {graphQLAPI} from 'api/graphql';
import {selectSettlementsData} from 'selectors';
import {SettlementsQueryParams} from 'api/graphql/types';
import {filter} from 'lodash';
import {RequestError} from 'core/errors';

export function* getSettlementsDataSaga({
  meta: {failureAction, successAction},
  payload,
  type,
}: ReturnType<
  | typeof getSettlementsDataRequest
  | typeof getPaginationSettlementsDataRequest
  | typeof getSearchSettlementsDataRequest
>) {
  try {
    let newToken = '';
    if (type === getPaginationSettlementsDataRequest.type) {
      const {nextToken: prevNextToken} = yield select(selectSettlementsData);
      newToken = prevNextToken;
    }

    const params: SettlementsQueryParams = {
      limit: 75,
      nextToken: newToken,
      filter: {
        value: {
          matchPhrasePrefix: payload?.searchValue || undefined,
        },
      },
      sort: {
        field: 'value',
        direction: 'asc',
      },
    };

    const [{items, nextToken, total}] = yield all([
      call([graphQLAPI, graphQLAPI.getSettlements], params),
    ]);

    //TODO: Filtering invalid values ​​(Most likely not relevant for prod)
    const filteredData = filter(items, item => /[а-яА-ЯЁё]/.test(item.value));

    yield put(
      successAction({
        data: filteredData,
        requestedItemsCount: items.length,
        nextToken,
        total,
      }),
    );
  } catch (e) {
    yield put(failureAction(e as RequestError));
  }
}
