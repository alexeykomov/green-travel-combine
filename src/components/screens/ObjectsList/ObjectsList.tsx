import React, {useLayoutEffect, useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';
import {ObjectCard, SuspenseView} from 'atoms';
import {styles} from './styles';
import {IProps} from './types';
import {find} from 'lodash';
import {selectAllCategoriesWithObjects} from 'core/selectors';
import {
  addToBookmarksRequest,
  getObjectsForBookmarkRequest,
} from 'core/reducers';
import {useSelector, useDispatch} from 'react-redux';
import {useRequestError, useRequestLoading} from 'core/hooks';

export const ObjectsList = ({route, navigation: {setOptions}}: IProps) => {
  const {
    params: {categoryId, title},
  } = route;

  const loading = useRequestLoading(getObjectsForBookmarkRequest);
  const {error} = useRequestError(getObjectsForBookmarkRequest);

  const dispatch = useDispatch();
  const categoriesWithObjects = useSelector(selectAllCategoriesWithObjects);

  const listData = useMemo(
    () => find(categoriesWithObjects, ({_id}) => _id === categoryId)?.objects,
    [categoryId, categoriesWithObjects],
  );

  useLayoutEffect(() => {
    setOptions({
      title: title,
    });
  }, [setOptions, title]);

  const addToFavorite = useCallback(
    (args) => {
      dispatch(addToBookmarksRequest(args));
    },
    [dispatch],
  );

  return (
    <SuspenseView error={error} loading={loading}>
      {listData ? (
        <FlatList
          data={listData}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <ObjectCard
              onIsFavoriteChange={addToFavorite}
              containerStyle={styles.cardContainer}
              data={item}
            />
          )}
        />
      ) : null}
    </SuspenseView>
  );
};
