import {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {THEME_TYPE} from 'core/constants';

export function useStatusBar(theme: THEME_TYPE) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const entry = StatusBar.pushStackEntry({
        barStyle: theme === 'dark' ? 'light-content' : 'dark-content',
        animated: true,
      });

      return () => {
        StatusBar.popStackEntry(entry);
      };
    }
  }, [isFocused, theme]);
}
