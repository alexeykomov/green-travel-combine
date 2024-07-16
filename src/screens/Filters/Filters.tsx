import React, {useMemo} from 'react';
import {Text, View, Switch, TouchableOpacity} from 'react-native';
import {Chip, Multiswitch, SuspenseView, Button, Icon} from 'atoms';
import {useThemeStyles, useTranslation} from 'core/hooks';
import {ButtonsGroup} from 'molecules';
import {screenOptions} from './screenOptions';
import {themeStyles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useFilters} from './hooks';
import {FilterContainer, LineItemContainer} from './components';
import {TestIDs} from 'core/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Filters = () => {
  const styles = useThemeStyles(themeStyles);
  const {t} = useTranslation('filters');
  const {
    caregoriesData,
    googleRatings,
    regions,
    activeRating,
    activeCategories,
    getFiltersData,
    updateRatings,
    chooseCategory,
    loading,
    errorTexts,
    total,
  } = useFilters();
  const {bottom} = useSafeAreaInsets();

  const buttons = useMemo(() => {
    return [
      {
        onPress: () => {},
        theme: 'secondary',
        text: t('clear'),
      },
      {
        onPress: () => {},
        theme: 'primary' as const,
        text: t('showFiltered', {amount: total}),
      },
    ];
  }, [t, total]);

  return (
    <View style={styles.container}>
      <SuspenseView
        loading={loading}
        error={errorTexts}
        retryCallback={getFiltersData}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{t('title')}</Text>
          <FilterContainer filterName="allCategories">
            <View style={styles.categoryList}>
              {caregoriesData?.map(category => (
                <Chip
                  active={activeCategories?.includes(category.id)}
                  onPress={() => chooseCategory(category.id)}
                  key={category.id}
                  testID={category.name}
                  text={category.name}
                  style={styles.chipContainer}
                />
              ))}
            </View>
          </FilterContainer>
          <FilterContainer filterName="whereToLook">
            <Text style={styles.subFilterName}>{t('regions')}</Text>
            <View style={styles.categoryList}>
              {regions?.map(region => (
                <Chip
                  key={region.id}
                  testID={region.id}
                  text={region.value}
                  style={styles.chipContainer}
                />
              ))}
            </View>
            <LineItemContainer itemName="settlements">
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.settlementsContainer}>
                <Text style={styles.settlementsLabel}>{t('any')}</Text>
                <Icon
                  name="chevronMediumRight"
                  size={24}
                  style={styles.settlementsLabel}
                />
              </TouchableOpacity>
            </LineItemContainer>
            <LineItemContainer itemName="geolocation">
              <Button
                text={t('choose')}
                theme="quarterly"
                testID={TestIDs.FiltersChooseButton}
                style={styles.chooseButtonContainer}
                labelAnimatedStyle={styles.chooseButtonLabel}
                icon={textStyle => (
                  <Icon name="marker" size={20} style={textStyle} />
                )}
              />
            </LineItemContainer>
            <LineItemContainer itemName="considerDistance">
              <Switch />
            </LineItemContainer>
          </FilterContainer>
          <FilterContainer filterName="ratingGoogle">
            <Multiswitch
              activeItem={activeRating}
              multiswitchItems={googleRatings}
              defaultValue={{key: 'Any', value: t('any')}}
              onItemPress={updateRatings}
              testID={TestIDs.FiltersMultySwitch}
            />
          </FilterContainer>
          <LineItemContainer
            itemName="hideVisit"
            style={styles.hideVisitContainer}>
            <Switch />
          </LineItemContainer>
          <ButtonsGroup
            buttons={buttons}
            bottomInset={bottom}
            containerStyle={styles.buttonsGroupContainer}
          />
        </ScrollView>
      </SuspenseView>
    </View>
  );
};

Filters.screenOptions = screenOptions;
