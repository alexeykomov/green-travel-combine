import {IState} from 'core/store';
import {createSelector} from 'reselect';
import {Bookmarks} from 'core/types';
import {isEmpty} from 'lodash';

export const selectSearchHistoryObjectsIds = (state: IState) =>
  state.user.historyIds;

export const selectIsUserHasSavedSearchHistory = createSelector(
  selectSearchHistoryObjectsIds,
  ids => !isEmpty(ids),
);

export const selectBookmarksData = (state: IState) => state.user.bookmarks;

export const selectBookmarksIds = createSelector(
  selectBookmarksData,
  (bookmarks: Bookmarks) =>
    Object.keys(bookmarks).filter(key => bookmarks[key][0]),
);

export const selectUserLocation = (state: IState) => state.user.location;
