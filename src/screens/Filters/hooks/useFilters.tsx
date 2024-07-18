import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect} from 'react';

import {selectCategories, selectFilters} from 'core/selectors';

import {useRequestLoading} from 'react-redux-help-kit';
import {
  getFiltersDataRequest,
  getFiltersDataRequestDuringFirstLoad,
} from 'core/actions';
import {
  changeCategory,
  changeRatingGoogle,
  changeRegion,
  clearFilters as clearFiltersAction,
} from 'core/reducers';

export const useFilters = () => {
  const dispatch = useDispatch();

  const caregoriesData = useSelector(selectCategories);
  const {
    googleRatings,
    regionsList,
    activeRating,
    total,
    activeCategories,
    activeRegions,
    countOfItemsForCategories,
    countOfItemsForRegions,
  } = useSelector(selectFilters);

  const {loading} = useRequestLoading(getFiltersDataRequestDuringFirstLoad);

  const getFiltersData = useCallback(() => {
    dispatch(
      getFiltersDataRequest({
        filter: {
          googleRating: activeRating,
          categories: activeCategories,
          regions: activeRegions,
        },
      }),
    );
  }, [dispatch, activeRating, activeCategories, activeRegions]);

  const updateRatings = useCallback(
    (newRating: string) => {
      dispatch(changeRatingGoogle(newRating === 'Any' ? null : newRating));
    },
    [dispatch],
  );

  const chooseCategory = useCallback(
    (categoryID: string) => {
      dispatch(changeCategory(categoryID));
    },
    [dispatch],
  );

  const chooseRegion = useCallback(
    (regionID: string) => {
      dispatch(changeRegion(regionID));
    },
    [dispatch],
  );

  const clearFilters = useCallback(() => {
    dispatch(clearFiltersAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getFiltersDataRequestDuringFirstLoad({
        filter: {
          googleRating: activeRating,
          categories: activeCategories,
          regions: activeRegions,
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFiltersData();
  }, [dispatch, activeRating, activeCategories, activeRegions, getFiltersData]);

  return {
    caregoriesData,
    googleRatings,
    getFiltersData,
    chooseRegion,
    clearFilters,
    loading,
    errorTexts: null,
    regions: regionsList,
    activeRating,
    activeRegions,
    activeCategories,
    updateRatings,
    chooseCategory,
    total,
    countOfItemsForCategories,
    countOfItemsForRegions,
  };
};
