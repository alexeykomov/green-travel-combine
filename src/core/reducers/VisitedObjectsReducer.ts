import {ActionType, createAction, createReducer} from 'typesafe-actions';
import {
  AddVisitedObjectBody,
  VisitedObjectsData,
  ShareExperienceInitialData,
} from 'core/types';
import {ACTIONS} from '../constants';
import {filter, isEqual} from 'lodash';

export const getVisitedObjectsRequest = createAction(
  ACTIONS.GET_VISITED_OBJECTS_REQUEST,
)();
export const getVisitedObjectsSuccess = createAction(
  ACTIONS.GET_VISITED_OBJECTS_SUCCESS,
)<VisitedObjectsData>();
export const getVisitedObjectsFailure = createAction(
  ACTIONS.GET_VISITED_OBJECTS_FAILURE,
)<Error>();

export const addVisitedObjectRequest = createAction(
  ACTIONS.ADD_VISITED_OBJECT_REQUEST,
)<{
  objectId: string;
  data: AddVisitedObjectBody;
}>();
export const addVisitedObjectSuccess = createAction(
  ACTIONS.ADD_VISITED_OBJECT_SUCCESS,
)();
export const addVisitedObjectFailure = createAction(
  ACTIONS.ADD_VISITED_OBJECT_FAILURE,
)<Error>();

export const deleteVisitedObjectRequest = createAction(
  ACTIONS.DELETE_VISITED_OBJECT_REQUEST,
)<{
  objectId: string;
}>();
export const deleteVisitedObjectSuccess = createAction(
  ACTIONS.DELETE_VISITED_OBJECT_SUCCESS,
)();
export const deleteVisitedObjectFailure = createAction(
  ACTIONS.DELETE_VISITED_OBJECT_FAILURE,
)<Error>();

export const clearVisitedObjects = createAction(
  ACTIONS.CLEAR_VISITED_OBJECTS,
)();

export const scheduleShareExperienceMenu = createAction(
  ACTIONS.SCHEDULE_OPEN_SHARE_EXPERIENCE_MENU,
)<{delayMs: number; data: ShareExperienceInitialData}>();

export const setShareExperienceData = createAction(
  ACTIONS.SET_SHARE_EXPERIENCE_DATA,
)<ShareExperienceInitialData>();

export const clearShareExperienceData = createAction(
  ACTIONS.CLEAR_SHARE_EXPERIENCE_DATA,
)();

interface IDefaultState {
  data: VisitedObjectsData;
  shareExperienceData: ShareExperienceInitialData | null;
}

const defaultState = {
  data: [],
  shareExperienceData: null,
};

const actions = {
  getVisitedObjectsSuccess,
  addVisitedObjectRequest,
  deleteVisitedObjectRequest,
  clearVisitedObjects,
  setShareExperienceData,
  clearShareExperienceData,
};

export const visitedObjectsReducer = createReducer<
  IDefaultState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(getVisitedObjectsSuccess, (state, {payload}) => {
    return {
      ...state,
      data: payload,
    };
  })
  .handleAction(addVisitedObjectRequest, (state, {payload}) => {
    return {
      ...state,
      data: [
        ...state.data,
        {
          id: payload.objectId,
          timestamp: payload.data.timestamp,
        },
      ],
    };
  })
  .handleAction(deleteVisitedObjectRequest, (state, {payload}) => {
    return {
      ...state,
      data: [
        ...filter(state.data, object => !isEqual(object.id, payload.objectId)),
      ],
    };
  })
  .handleAction(clearVisitedObjects, state => ({
    ...state,
    data: [],
  }))
  .handleAction(setShareExperienceData, (state, {payload}) => ({
    ...state,
    shareExperienceData: payload,
  }))
  .handleAction(clearShareExperienceData, state => ({
    ...state,
    shareExperienceData: null,
  }));
