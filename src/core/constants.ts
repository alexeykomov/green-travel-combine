export const enum ACTIONS {
  BOOTSTRAP_REQUEST = 'BOOTSTRAP_REQUEST',
  BOOTSTRAP_SUCCESS = 'BOOTSTRAP_SUCCESS',
  BOOTSTRAP_FAILURE = 'BOOTSTRAP_FAILURE',

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

  SHOW_OBJECT_DETAILS_MAP_DIRECTION_REQUEST = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_REQUEST',
  SHOW_OBJECT_DETAILS_MAP_DIRECTION_SUCCESS = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_SUCCESS',
  SHOW_OBJECT_DETAILS_MAP_DIRECTION_FAILURE = 'SHOW_OBJECT_DETAILS_MAP_DIRECTION_FAILURE',

  CLEAR_OBJECT_DETAILS_MAP_DIRECTION = 'CLEAR_OBJECT_DETAILS_MAP_DIRECTION',

  SET_OBJECT_DETAILS_MAP_OBJECTS = 'SET_OBJECT_DETAILS_MAP_OBJECTS',

  CLEAR_USER_DATA = 'CLEAR_USER_DATA',

  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'SIGNUP_FAILURE',

  CONFIRM_SIGNUP_REQUEST = 'CONFIRM_SIGNUP_REQUEST',
  CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS',
  CONFIRM_SIGNUP_FAILURE = 'CONFIRM_SIGNUP_FAILURE',
  CONFIRM_SIGNUP_CANCEL = 'CONFIRM_SIGNUP_CANCEL',

  RESEND_SIGNUP_CODE_REQUEST = 'RESEND_SIGNUP_CODE_REQUEST',
  RESEND_SIGNUP_CODE_SUCCESS = 'RESEND_SIGNUP_CODE_SUCCESS',
  RESEND_SIGNUP_CODE_FAILURE = 'RESEND_SIGNUP_CODE_FAILURE',

  SIGNIN_REQUEST = 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE = 'SIGNIN_FAILURE',

  SIGNOUT_REQUEST = 'SIGNOUT_REQUEST',
  SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS',
  SIGNOUT_FAILURE = 'SIGNOUT_FAILURE',

  DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',

  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE',

  CONFIRM_NEW_PASSWORD_REQUEST = 'CONFIRM_NEW_PASSWORD_REQUEST',
  CONFIRM_NEW_PASSWORD_SUCCESS = 'CONFIRM_NEW_PASSWORD_SUCCESS',
  CONFIRM_NEW_PASSWORD_FAILURE = 'CONFIRM_NEW_PASSWORD_FAILURE',

  CHECK_USER_EMAIL_REQUEST = 'CHECK_USER_EMAIL_REQUEST',
  CHECK_USER_EMAIL_SUCCESS = 'CHECK_USER_EMAIL_SUCCESS',
  CHECK_USER_EMAIL_FAILURE = 'CHECK_USER_EMAIL_FAILURE',

  FORGOT_PASSWORD_CODE_SUBMIT_REQUEST = 'FORGOT_PASSWORD_CODE_SUBMIT_REQUEST',
  FORGOT_PASSWORD_CODE_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_CODE_SUBMIT_SUCCESS',
  FORGOT_PASSWORD_CODE_SUBMIT_FAILURE = 'FORGOT_PASSWORD_CODE_SUBMIT_FAILURE',

  CHANGE_LANGUAGE_REQUEST = 'CHANGE_LANGUAGE_REQUEST',
  CHANGE_LANGUAGE_SUCCESS = 'CHANGE_LANGUAGE_SUCCESS',
  CHANGE_LANGUAGE_FAILURE = 'CHANGE_LANGUAGE_FAILURE',

  CLEAR_CACHE_REQUEST = 'CLEAR_CACHE_REQUEST',
  CLEAR_CACHE_SUCCESS = 'CLEAR_CACHE_SUCCESS',
  CLEAR_CACHE_FAILURE = 'CLEAR_CACHE_FAILURE',

  SET_THEME = 'SET_THEME',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_IS_SYSTEM_LANGUAGE = 'SET_IS_SYSTEM_LANGUAGE',

  IN_APP_BROWSER_SUCCESS_OPERATION = 'IN_APP_BROWSER_SUCCESS_OPERATION',
  IN_APP_BROWSER_CANCEL_OPERATION = 'IN_APP_BROWSER_CANCEL_OPERATION',

  SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA',

  CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE',
  RESET_USER_AUTH_DATA = 'RESET_USER_AUTH_DATA',

  GET_VISITED_OBJECTS_REQUEST = 'GET_VISITED_OBJECTS_REQUEST',
  GET_VISITED_OBJECTS_SUCCESS = 'GET_VISITED_OBJECTS_SUCCESS',
  GET_VISITED_OBJECTS_FAILURE = 'GET_VISITED_OBJECTS_FAILURE',

  ADD_VISITED_OBJECT_REQUEST = 'ADD_VISITED_OBJECT_REQUEST',
  ADD_VISITED_OBJECT_SUCCESS = 'ADD_VISITED_OBJECT_SUCCESS',
  ADD_VISITED_OBJECT_FAILURE = 'ADD_VISITED_OBJECT_FAILURE',

  DELETE_VISITED_OBJECT_REQUEST = 'DELETE_VISITED_OBJECT_REQUEST',
  DELETE_VISITED_OBJECT_SUCCESS = 'DELETE_VISITED_OBJECT_SUCCESS',
  DELETE_VISITED_OBJECT_FAILURE = 'DELETE_VISITED_OBJECT_FAILURE',

  CLEAR_VISITED_OBJECTS = 'CLEAR_VISITED_OBJECTS',

  SCHEDULE_OPEN_SHARE_EXPERIENCE_MENU = 'SCHEDULE_OPEN_SHARE_EXPERIENCE_MENU',
  SET_SHARE_EXPERIENCE_DATA = 'SET_SHARE_EXPERIENCE_DATA',
  CLEAR_SHARE_EXPERIENCE_DATA = 'CLEAR_SHARE_EXPERIENCE_DATA',

  UPDATE_VISITED_OBJECT_REQUEST = 'UPDATE_VISITED_OBJECT_REQUEST',
  UPDATE_VISITED_OBJECT_SUCCESS = 'UPDATE_VISITED_OBJECT_SUCCESS',
  UPDATE_VISITED_OBJECT_FAILURE = 'UPDATE_VISITED_OBJECT_FAILURE',

  SEND_INACCURACIES_EMAIL_REQUEST = 'SEND_INACCURACIES_EMAIL_REQUEST',
  SEND_INACCURACIES_EMAIL_SUCCESS = 'SEND_INACCURACIES_EMAIL_SUCCESS',
  SEND_INACCURACIES_EMAIL_FAILURE = 'SEND_INACCURACIES_EMAIL_FAILURE',

  SEND_ADD_INFO_EMAIL_REQUEST = 'SEND_ADD_INFO_EMAIL_REQUEST',
  SEND_ADD_INFO_EMAIL_SUCCESS = 'SEND_ADD_INFO_EMAIL_SUCCESS',
  SEND_ADD_INFO_EMAIL_FAILURE = 'SEND_ADD_INFO_EMAIL_FAILURE',
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
import {KeyboardEventName, Platform} from 'react-native';
import {} from './types/analytics';
import {
  NavigationRoutes,
  AnalyticsNavigationScreenNames,
  AnalyticsAddInfoFieldsNames,
} from './types';

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

export type THEME_TYPE = 'light' | 'dark';

export const RADZIMA_URL = 'https://radzima.app';

export const EPAM_PRIVACY_POLICY_URL = 'https://www.epam.com/privacy-policy';

export const KEYBOARD_SHOW_EVENT: KeyboardEventName =
  Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
export const KEYBOARD_HIDE_EVENT: KeyboardEventName =
  Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
export const KEYBOARD_FRAME_CHANGE_EVENT: KeyboardEventName =
  Platform.OS === 'ios' ? 'keyboardWillChangeFrame' : 'keyboardDidChangeFrame';

export enum ObjectField {
  upcomingEvents = 'upcomingEvents',
  phoneNumber = 'phoneNumber',
  address = 'address',
  name = 'name',
  location = 'location',
  dinnerPlaces = 'dinnerPlaces',
  accommodationPlace = 'accommodationPlace',
  url = 'url',
  length = 'length',
  duration = 'duration',
  workingHours = 'workingHours',
  permissions = 'permissions',
  childServices = 'childServices',
  renting = 'renting',
  notes = 'note',
  author = 'author',
  description = 'description',
  belongsTo = 'belongsTo',
  include = 'include',
  area = 'area',
  origins = 'origins',
  attendanceTime = 'attendanceTime',
  googlePlaceId = 'googlePlaceId ',
  googleRating = 'googleRating',
  googleRatingsTotal = 'googleRatingsTotal',
  routes = 'routes',
}

export const OBJECT_ALLOWED_EDIT_FIELDS = [
  ObjectField.phoneNumber,
  ObjectField.accommodationPlace,
  ObjectField.attendanceTime,
  ObjectField.childServices,
  ObjectField.dinnerPlaces,
  ObjectField.renting,
  ObjectField.upcomingEvents,
  ObjectField.workingHours,
] as const;

// export const OBJECT_ALLOWED_EDIT_FIELDS = new Set(
//   OBJECT_ALLOWED_EDIT_FIELDS_ARRAY,
// );

export const AnalyticScreensNames: Partial<
  Record<NavigationRoutes, AnalyticsNavigationScreenNames>
> = {
  ObjectDetails: 'ObjectScreen',
  Home: 'HomeScreen',
  BookmarksList: 'BookmarksListScreen',
  ObjectsList: 'ObjectListScreen',
  Search: 'SearchScreen',
  AppMap: 'AppMapScreen',
};

export const AnalyticsAllowedEditFields: Record<
  (typeof OBJECT_ALLOWED_EDIT_FIELDS)[number],
  AnalyticsAddInfoFieldsNames
> = {
  [ObjectField.phoneNumber]: 'phone',
  [ObjectField.accommodationPlace]: 'sleep_place',
  [ObjectField.attendanceTime]: 'avg_visit_time',
  [ObjectField.childServices]: 'child_service',
  [ObjectField.dinnerPlaces]: 'eat_place',
  [ObjectField.renting]: 'rent_service',
  [ObjectField.upcomingEvents]: 'upcoming_events',
  [ObjectField.workingHours]: 'work_hours',
};

export const TIME_PICKER_FIELDS = new Set([ObjectField.attendanceTime]);

export const DEFAULT_DISTANCE_FILTER_VALUE = 5;
