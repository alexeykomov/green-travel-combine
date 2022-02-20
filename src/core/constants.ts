export const enum ACTIONS {
  BOOTSTRAP_START = 'BOOTSTRAP_START',
  BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH',

  GET_INITIAL_HOME_DATA_REQUEST = 'GET_INITIAL_HOME_DATA_REQUEST',
  GET_INITIAL_HOME_DATA_SUCCESS = 'GET_INITIAL_HOME_DATA_SUCCESS',
  GET_INITIAL_HOME_DATA_FAILURE = 'GET_INITIAL_HOME_DATA_FAILURE',

  GET_HOME_DATA_UPDATES_REQUEST = 'GET_HOME_DATA_UPDATES_REQUEST',
  GET_HOME_DATA_UPDATES_SUCCESS = 'GET_HOME_DATA_UPDATES_SUCCESS',
  GET_HOME_DATA_UPDATES_FAILURE = 'GET_HOME_DATA_UPDATES_FAILURE',

  GET_HOME_DATA_UPDATE_AVAILABLE_REQUEST = 'GET_HOME_DATA_UPDATE_AVAILABLE_REQUEST',
  GET_HOME_DATA_UPDATE_AVAILABLE_SUCCESS = 'GET_HOME_DATA_UPDATE_AVAILABLE_SUCCESS',
  GET_HOME_DATA_UPDATE_AVAILABLE_FAILURE = 'GET_HOME_DATA_UPDATE_AVAILABLE_FAILURE',

  GET_HOME_DATA = 'GET_HOME_DATA',

  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE',

  SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE',
  ADD_OBJECT_TO_SEARCH_HISTORY = 'ADD_OBJECT_TO_SEARCH_HISTORY',
  DELETE_OBJECT_FROM_SEARCH_HISTORY = 'DELETE_OBJECT_FROM_SEARCH_HISTORY',
  DELETE_All_FROM_SEARCH_HISTORY = 'DELETE_ALL_FROM_SEARCH_HISTORY',

  SHOW_OBJECT_DETAILS_MAP_DIRECTION_REQUEST = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_REQUEST',
  SHOW_OBJECT_DETAILS_MAP_DIRECTION_SUCCESS = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_SUCCESS',
  SHOW_OBJECT_DETAILS_MAP_DIRECTION_FAILURE = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_FAILURE',

  CLEAR_OBJECT_DETAILS_MAP_DIRECTION = 'CLEAR_OBJECT_DETAILS_MAP_DIRECTION',

  SET_OBJECT_DETAILS_MAP_OBJECTS = 'SET_OBJECT_DETAILS_MAP_OBJECTS',
}

export const DEFAULT_BOUNDS = {
  ne: [110.07385416701771, 85.05112862791776],
  sw: [-110.07385416703308, -85.05112862791907],
  paddingLeft: 30,
  paddingRight: 30,
};

export const enum MAP_PINS {
  BICYCLE_ROUTE = 'bicycle-route',
  OBJECT = 'object',
  HISTORICAL_PLACE = 'historical-place',
  EXCURSION_PIN = 'excursion-pin',
  WALKING_ROUTES = 'walking-routes',
  WATER_ROUTE = 'water-route',
  CASTLES = 'castles',
  MUSEUMS = 'museums',
  NATURE_MONUMENTS = 'nature-monuments',
  OTHER_MONUMENTS = 'other-monuments',
  WAR_MONUMENTS = 'war-monuments',
  EMPTY_BIG = 'empty-big',
  EMPTY = 'empty',
  SELECTED_POSTFIX = '-black',
}

export const PADDING_HORIZONTAL = 16;

import {IconsNames} from 'atoms/Icon/IconsNames';

export const ICONS_MATCHER = {
  [MAP_PINS.BICYCLE_ROUTE]: 'strokeBike' as IconsNames,
  [MAP_PINS.HISTORICAL_PLACE]: 'strokeChurch' as IconsNames,
  [MAP_PINS.WALKING_ROUTES]: 'strokeFootprint' as IconsNames,
  [MAP_PINS.EXCURSION_PIN]: 'strokeFlag' as IconsNames,
  [MAP_PINS.OBJECT]: 'strokeForest' as IconsNames,
  [MAP_PINS.WATER_ROUTE]: 'strokeWaterRoute' as IconsNames,
  [MAP_PINS.CASTLES]: 'strokeCastles' as IconsNames,
  [MAP_PINS.MUSEUMS]: 'strokeMuseums' as IconsNames,
  [MAP_PINS.NATURE_MONUMENTS]: 'strokeNatureMonuments' as IconsNames,
  [MAP_PINS.OTHER_MONUMENTS]: 'strokeOtherMonuments' as IconsNames,
  [MAP_PINS.WAR_MONUMENTS]: 'strokeWarMonuments' as IconsNames,
};

export const DARK_ICONS_MATCHER = {
  [MAP_PINS.BICYCLE_ROUTE]: 'strokeBikeDark' as IconsNames,
  [MAP_PINS.HISTORICAL_PLACE]: 'strokeChurchDark' as IconsNames,
  [MAP_PINS.WALKING_ROUTES]: 'strokeFootprintDark' as IconsNames,
  [MAP_PINS.EXCURSION_PIN]: 'strokeFlagDark' as IconsNames,
  [MAP_PINS.OBJECT]: 'strokeForestDark' as IconsNames,
  [MAP_PINS.WATER_ROUTE]: 'strokeWaterRouteDark' as IconsNames,
  [MAP_PINS.CASTLES]: 'strokeCastlesDark' as IconsNames,
  [MAP_PINS.MUSEUMS]: 'strokeMuseumsDark' as IconsNames,
  [MAP_PINS.NATURE_MONUMENTS]: 'strokeNatureMonumentsDark' as IconsNames,
  [MAP_PINS.OTHER_MONUMENTS]: 'strokeOtherMonumentsDark' as IconsNames,
  [MAP_PINS.WAR_MONUMENTS]: 'strokeWarMonumentsDark' as IconsNames,
};

export const MAP_BOTTOM_MENU_HEIGHT = 185;

export const DEFAULT_LOCALE = 'ru';
