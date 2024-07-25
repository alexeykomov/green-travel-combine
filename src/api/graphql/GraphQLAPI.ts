import {
  AppMapObjectsTotalCountResponseDTO,
  AppMapObjectsResponseDTO,
  CategoriesAggregationsByObjectsResponseDTO,
  ListCategoriesResponseDTO,
  ListShortObjectsResponseDTO,
  ObjectsForCategoriesResponseDTO,
  RegionsListResponseDTO,
  FiltersParams,
  ObjectFiltersDataResponseDTO,
} from 'core/types/api';
import {GraphQLAPIEngine} from './GraphQLAPIEngine';
import {SearchSpotsParams} from './types';
import {
  getCategoriesAggregationsByObjectsQuery,
  getAppMapObjectsQuery,
  searchCategoriesQuery,
  searchObjectsQuery,
} from './queries';
import {generateListObjectsShortQuery} from './queries/homePage';
import {
  AppMapObjectsQueryParams,
  CategoriesListQueryParams,
  ObjectsListQueryParams,
} from 'api/graphql/types';
import {getObjectsTotalCountQuery} from './queries/common';
import {searchSpotsQuery, filterObjects} from './queries/filters';

class GraphQLAPI extends GraphQLAPIEngine {
  async getCategoriesList(
    params: CategoriesListQueryParams,
  ): Promise<ListCategoriesResponseDTO> {
    const response = await this.executeQuery({
      query: searchCategoriesQuery,
      params,
    });

    return response.searchCategories;
  }
  async getObjectsForCategories(
    categoryIds: string[],
  ): Promise<ObjectsForCategoriesResponseDTO> {
    return this.executeQuery({
      query: generateListObjectsShortQuery(categoryIds),
    });
  }

  async getCategoriesAggregationsByObjects(): Promise<CategoriesAggregationsByObjectsResponseDTO> {
    const response = await this.executeQuery({
      query: getCategoriesAggregationsByObjectsQuery,
    });
    return response.filterLandingObjects?.aggregations?.categories?.facets
      ?.buckets;
  }

  async getRegions(): Promise<RegionsListResponseDTO> {
    const response = await this.executeQuery({
      query: searchSpotsQuery,
      params: {
        limit: 100,
        filter: {
          type: {
            eq: 'REGION',
          },
        },
      } as SearchSpotsParams,
    });

    return response.searchSpots.items;
  }

  async getFilterObjects(
    params: FiltersParams,
  ): Promise<ObjectFiltersDataResponseDTO> {
    const response = await this.executeQuery({
      query: filterObjects,
      params: {
        filter: {statuses: ['published'], ...params.filter},
      },
    });

    return response.filterLandingObjects;
  }

  async getObjectsTotalCount(): Promise<AppMapObjectsTotalCountResponseDTO> {
    const response = await this.executeQuery({
      query: getObjectsTotalCountQuery,
    });

    return response.searchObjects;
  }

  async getAppMapObjects(
    params: AppMapObjectsQueryParams,
  ): Promise<AppMapObjectsResponseDTO> {
    const response = await this.executeQuery({
      query: getAppMapObjectsQuery,
      params,
    });

    return response.searchObjects;
  }

  async getObjectsList(
    params: ObjectsListQueryParams,
  ): Promise<ListShortObjectsResponseDTO> {
    const response = await this.executeQuery({
      query: searchObjectsQuery,
      params,
    });

    return response.searchObjects;
  }
}

export const graphQLAPI = new GraphQLAPI();
