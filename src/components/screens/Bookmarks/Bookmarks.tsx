import React, {useCallback} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {BookmarkItem, SuspenseView} from 'atoms';
import {selectBookmarksCardsData} from 'core/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {useRequestError, useRequestLoading} from 'core/hooks';
import {getHomeDataRequest} from 'core/reducers';
import {IProps} from './types';
import {ICategoryWithExtendedObjects} from 'core/types';
import {isEmpty} from 'lodash';

export const Bookmarks = ({navigation}: IProps) => {
  const bookmarksCategories = useSelector(selectBookmarksCardsData);
  const dispatch = useDispatch();

  const getHomeData = useCallback(() => {
    dispatch(getHomeDataRequest());
  }, [dispatch]);

  const loading = useRequestLoading(getHomeDataRequest);
  const {error} = useRequestError(getHomeDataRequest);

  const navigateToBookmarksList = useCallback(
    ({_id, name, objects}: ICategoryWithExtendedObjects) => {
      if (!isEmpty(objects)) {
        navigation.navigate('BookmarksList', {
          categoryId: _id,
          title: name,
        });
      }
    },
    [navigation],
  );

  return (
    <SuspenseView
      retryCallback={getHomeData}
      loading={!bookmarksCategories && loading}
      error={bookmarksCategories ? null : error}>
      {bookmarksCategories ? (
        <ScrollView style={styles.container}>
          <Text style={[styles.title]}>{'Закладки'}</Text>
          <View style={styles.boxContainer}>
            {bookmarksCategories.map((category, index, items) => (
              <BookmarkItem
                item={category}
                isOdd={index % 2 === 0}
                isLast={items.length - 1 === index}
                count={category.objects.length}
                onPress={navigateToBookmarksList}
              />
            ))}
          </View>
        </ScrollView>
      ) : null}
    </SuspenseView>
  );
};
