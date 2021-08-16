import React, {memo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ObjectCard, CategoryCard} from 'molecules';
import {themeStyles, cardWidth} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import {IObject, ITransformedCategory} from 'core/types';
import {isEmpty} from 'lodash';
import {useCategories, useObjects, useThemeStyles} from 'core/hooks';

interface Props {
  item: ITransformedCategory;
  onAllObjectsPress: (options: {categoryId: string; title: string}) => void;
  onAllCategoriesPress: (options: {categoryId: string; title: string}) => void;
  onObjectPress: (options: IObject) => void;
  onCategoryPress: (
    options: ITransformedCategory,
    parentCategoryName: string,
  ) => void;
  onObjectCardIsFavoriteChanged: (
    options: IObject,
    nextIsFavorite: boolean,
  ) => void;
}

export const HomeSectionBar = memo(
  ({
    onAllObjectsPress,
    onAllCategoriesPress,
    onObjectPress,
    onCategoryPress,
    onObjectCardIsFavoriteChanged,
    item,
  }: Props) => {
    const {t} = useTranslation('home');
    const styles = useThemeStyles(themeStyles);
    const {id: categoryId, name: sectionTitle, objects, children} = item;

    const isLessThenTwoItems = objects.length < 2 && children.length < 2;
    const isCategoriesList = isEmpty(objects);

    const objectsData = useObjects(objects);
    const childrenData = useCategories(children);

    const onAllPressHandler = useCallback(() => {
      if (isCategoriesList) {
        onAllCategoriesPress({categoryId, title: sectionTitle});
      } else {
        onAllObjectsPress({categoryId, title: sectionTitle});
      }
    }, [
      isCategoriesList,
      onAllCategoriesPress,
      categoryId,
      sectionTitle,
      onAllObjectsPress,
    ]);

    const onObjectPressHandler = useCallback(
      (object: IObject) => {
        onObjectPress(object);
      },
      [onObjectPress],
    );

    const onCategoryPressHandler = useCallback(
      (category: ITransformedCategory) => {
        onCategoryPress(category, sectionTitle);
      },
      [onCategoryPress, sectionTitle],
    );

    return (
      <View>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          {!isLessThenTwoItems ? (
            <TouchableOpacity activeOpacity={0.8} onPress={onAllPressHandler}>
              <Text style={styles.all}>{t('all')}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {isCategoriesList ? (
          <FlatList
            keyExtractor={({id}) => id}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={childrenData}
            horizontal
            renderItem={({item: category}) => (
              <CategoryCard
                containerStyle={styles.objectCardContainer}
                width={cardWidth}
                onPress={onCategoryPressHandler}
                data={category}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <FlatList
            keyExtractor={({id}) => id}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={objectsData}
            horizontal
            renderItem={({item: object}) => (
              <ObjectCard
                containerStyle={styles.objectCardContainer}
                width={cardWidth}
                onPress={onObjectPressHandler}
                data={object}
                onFavoriteChanged={onObjectCardIsFavoriteChanged}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    );
  },
);
