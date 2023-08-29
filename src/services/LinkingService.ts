import {LinkingOptions, getStateFromPath} from '@react-navigation/native';
import {MainNavigatorParamsList} from 'core/types';
import config from 'react-native-ultimate-config';
import {getCurrentTabName} from './NavigationService';

class LinkingService {
  getInitialLinkingData(): LinkingOptions<MainNavigatorParamsList> {
    return {
      prefixes: [`https://${config.DEEP_LINK_DOMAIN}`],
      getStateFromPath: path => {
        return getStateFromPath(path, {
          initialRouteName: 'TabNavigator',
          screens: {
            TabNavigator: {
              screens: {
                HomeNavigator: {
                  screens: {
                    Home: '*',
                  },
                },
                ...this.getObjectLinkingData(),
              },
            },
          },
        });
      },
    };
  }

  getObjectLinkingData() {
    const currentTabName = getCurrentTabName();
    return {
      [currentTabName || ('HomeNavigator' as const)]: {
        initialRouteName: currentTabName
          ? undefined
          : ('Home' as unknown as undefined),
        screens: {
          ObjectDetails: 'object/:objectId',
        },
      },
    };
  }
}

export const linkingService = new LinkingService();
