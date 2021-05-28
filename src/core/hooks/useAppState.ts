import {AppState, AppStateStatus} from 'react-native';
import {useEffect, useRef} from 'react';

export function useAppState(
  callback: (state: AppStateStatus, prevState: AppStateStatus) => void,
) {
  const prevState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const listener = state => {
      callback(state, prevState.current);
      prevState.current = state;
    };

    AppState.addEventListener('change', listener);
    return () => {
      AppState.removeEventListener('change', listener);
    };
  }, [callback]);
}
