import {
  CategoryShort,
  CategoryShortDTO,
  HomeSectionBarItem,
  ObjectShort,
  SupportedLocales,
} from 'core/types';
import {
  CategoriesAggregationsByObjectsResponseDTO,
  ObjectsForCategoriesResponseDTO,
  ObjectShortDTO,
} from 'core/types/api';
import {filter, groupBy, isEmpty, map, orderBy, reduce} from 'lodash';
import {
  convertShortCategoryToCardItem,
  convertShortObjectToCardItem,
  translateAndProcessImagesForEntity,
} from './common';
import {GRAPHQL_QUERY_CATEGORY_INDEX} from 'api/graphql';

export function getCategoriesWithObjects(
  categoriesAggreagions: CategoriesAggregationsByObjectsResponseDTO,
) {
  return filter(categoriesAggreagions, category => category.doc_count !== 0);
}

export function getObjectByCategories(
  categoriesAggreagions: CategoriesAggregationsByObjectsResponseDTO,
  objectsForCategoriesResponse: ObjectsForCategoriesResponseDTO,
) {
  return reduce(
    categoriesAggreagions,
    (acc, category, index) => {
      const objects =
        objectsForCategoriesResponse[`${GRAPHQL_QUERY_CATEGORY_INDEX}${index}`]
          ?.items;

      if (objects) {
        acc[category.key] = objects;
      }

      return acc;
    },
    {} as Record<string, Array<ObjectShortDTO>>,
  );
}

export function prepareHomePageData(
  categoriesList: Array<CategoryShort>,
  objectsByCategories: Record<string, Array<ObjectShort>>,
) {
  const sortedCategories = orderBy(categoriesList, ['index'], ['asc']);

  const {null: parentCategories, ...subcategoriesMap} = groupBy(
    sortedCategories,
    'parent',
  );

  return reduce(
    parentCategories,
    (acc, category) => {
      let objects = objectsByCategories[category.id];

      if (objects?.length && !category.parent) {
        acc.push({
          title: category.name,
          items: map(objects, convertShortObjectToCardItem),
          isCategoryItems: false,
          categoryId: category.id,
        });
      } else {
        const subCategories = subcategoriesMap[category.id];
        const subCategoriesWithObjects = filter(subCategories, subCategory => {
          return !isEmpty(objectsByCategories[subCategory.id]);
        });
        if (subCategoriesWithObjects?.length) {
          acc.push({
            title: category.name,
            items: map(
              subCategoriesWithObjects,
              convertShortCategoryToCardItem,
            ),
            isCategoryItems: true,
            categoryId: category.id,
          });
        }
      }

      return acc;
    },
    [] as Array<HomeSectionBarItem>,
  );
}

export const prepareCategoriesListData = (
  locale: SupportedLocales | null,
  data?: Array<CategoryShortDTO>,
) => {
  if (!data) {
    return [];
  }

  const processedData = map(data, category => {
    return translateAndProcessImagesForEntity(category, locale);
  });

  const sortedData = orderBy(processedData, ['index'], ['asc']);

  return map(sortedData, convertShortCategoryToCardItem);
};

export const prepareObjectsListData = (
  locale: SupportedLocales | null,
  data?: Array<ObjectShortDTO>,
) => {
  if (!data) {
    return [];
  }
  const processedData = map(data, category =>
    translateAndProcessImagesForEntity(category, locale),
  );

  return map(processedData, convertShortObjectToCardItem);
};
