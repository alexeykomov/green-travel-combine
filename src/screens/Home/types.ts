import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {
  HomeNavigatorParamsList,
  TabNavigatorParamsList,
  MainNavigatorParamsList,
} from 'core/types';

export type HomeScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeNavigatorParamsList, 'Home'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamsList>,
    StackNavigationProp<MainNavigatorParamsList>
  >
>;

export type HomeScreenRouteProps = RouteProp<HomeNavigatorParamsList, 'Home'>;

export interface IProps {
  navigation: HomeScreenNavigationProps;
  route: HomeScreenRouteProps;
  testID: string;
}

export type ScreenOptions = (
  props: Omit<IProps, 'testID'>,
) => NativeStackNavigationOptions;
