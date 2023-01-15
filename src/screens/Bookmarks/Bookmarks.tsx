import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';
import {BookmarkItem, SuspenseView} from 'atoms';
import {isEmpty} from 'lodash';
import {BookmarksEmptyView} from 'molecules';
import {useBookmarks} from './hooks';
import {TestIDs} from 'core/types';

export const Bookmarks = () => {
  const {
    bookmarksCategories,
    getHomeData,
    loading,
    error,
    navigateToBookmarksList,
  } = useBookmarks();

  return (
    <SuspenseView
      retryCallback={getHomeData}
      loading={!bookmarksCategories && loading}
      error={bookmarksCategories ? null : error}>
      {isEmpty(bookmarksCategories) ? (
        <BookmarksEmptyView />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.boxContainer}>
            {bookmarksCategories?.map((category, index, items) => {
              const testID = `${TestIDs.FavoritesCard}_${index + 1}`;

              return (
                <BookmarkItem
                  key={category.categoryId}
                  item={category}
                  isOdd={index % 2 === 0}
                  isLast={items.length - 1 === index}
                  count={category.objectsIds.length}
                  testID={testID}
                  onPress={navigateToBookmarksList}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </SuspenseView>
  );
};
