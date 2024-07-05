import {createAsyncAction} from 'core/helpers';
import {createAction} from '@reduxjs/toolkit';
import {RegionsList} from 'core/types/api';

export const getFiltersDataRequest = createAsyncAction<
  void,
  {
    regionsList: RegionsList;
  }
>('GET_FILTERS_DATA');

export const refreshFiltersDataRequest = createAsyncAction<
  void,
  {
    regionsList: RegionsList;
  }
>('REFRESH_FILTERS_DATA');

export const changeRatingGoogle = createAction<string>(
  'filters/changeRatingGoogle',
);
