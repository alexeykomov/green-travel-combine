import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {BookmarksScreen} from 'screens';

import {getAppHeaderOptions} from '../screenOptions';
import {useColorScheme} from 'core/hooks';
import {BookmarksNavigatorParamsList} from 'core/types';

const Stack = createStackNavigator<BookmarksNavigatorParamsList>();

export function BookmarksNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        ...getAppHeaderOptions({colorScheme}),
        title: 'Закладки',
      }}>
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
    </Stack.Navigator>
  );
}
