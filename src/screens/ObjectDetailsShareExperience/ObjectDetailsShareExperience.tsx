import {BottomMenu, SnackBar, Backdrop} from 'atoms';
import {useColorScheme, useOnRequestSuccess, useTranslation} from 'core/hooks';
import {TestIDs} from 'core/types/common';
import {
  ObjectShareExperienceMenu,
  ObjectReportinaccuraciesMenu,
  ObjectSuccessMenu,
} from 'molecules';
import React, {useCallback, useMemo} from 'react';
import {useShareExperienceMenu, useShareExperienceData} from './hooks';

import {
  sendInaccuraciesEmailRequest,
  updateVisitedObjectRequest,
} from 'core/reducers';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ObjectDetailsShareExperience = () => {
  const {t} = useTranslation('objectDetails');
  const {top} = useSafeAreaInsets();
  const theme = useColorScheme();

  const {
    onSendPress,
    onSubmitPress,
    sendLoading,
    sumbitLoading,
    isReportSent,
    clearInitialData,
    snackBarProps,
    onMissedDetailsPress,
    isMissedDetailsButtonVisible,
    onReportInnacuranceFieldValueChange,
    sendReportInaccuranceCloseEvent,
    sendVisitedModalCloseEvent,
    saveRangeForAnalytics,
  } = useShareExperienceData();

  const {
    backToInitialMenu,
    openInnacurateInfoMenu,
    rating,
    setRating,
    shareExperienceMenuProps,
    reportInnacurateInfoMenuProps,
    reportInnacurateInfoSuccessMenuProps,
    openInnacurateInfoSuccessMenu,
    getIsAllMenusClosed,
    innaccuraciesMenuRef,
    backdropAnimatedIndex,
    shareExperienceMenuAnimatedIndex,
    shareExperienceSuccessMenuAnimatedIndex,
    onBackdropPress,
  } = useShareExperienceMenu();

  useOnRequestSuccess(
    updateVisitedObjectRequest,
    openInnacurateInfoSuccessMenu,
  );

  useOnRequestSuccess(sendInaccuraciesEmailRequest, backToInitialMenu);

  const onHideEnd = useCallback(() => {
    if (getIsAllMenusClosed()) {
      clearInitialData();
      sendVisitedModalCloseEvent(rating);
    }
  }, [
    clearInitialData,
    getIsAllMenusClosed,
    rating,
    sendVisitedModalCloseEvent,
  ]);

  const onReportInnacuranceMenuHide = useCallback(() => {
    sendReportInaccuranceCloseEvent();
    onHideEnd();
  }, [onHideEnd, sendReportInaccuranceCloseEvent]);
  const header = useMemo(
    () => ({
      title: t('markAsVisitedMenuTitle'),
      subtitle: t('markAsVisitedMenuSubtitle'),
    }),
    [t],
  );

  const reportInnacuraciesHeader = useMemo(
    () => ({
      onBackPress: backToInitialMenu,
      title: t('reportInaccuraciesMenuTitle'),
    }),
    [backToInitialMenu, t],
  );

  return (
    <>
      <Backdrop
        animatedIndex={backdropAnimatedIndex}
        onPress={onBackdropPress}
      />

      <BottomMenu
        onHideEnd={onHideEnd}
        initialIndex={0}
        animatedIndex={shareExperienceMenuAnimatedIndex}
        testID={TestIDs.ObjectShareExperienceMenu}
        {...shareExperienceMenuProps}
        header={header}>
        <ObjectShareExperienceMenu
          testID={TestIDs.ObjectShareExperienceMenuContent}
          onSubmitPress={onSubmitPress}
          rating={rating}
          onRatingChange={setRating}
          isSubmitButtonLoading={sumbitLoading}
          onReportInformationPress={openInnacurateInfoMenu}
          isReportSending={sendLoading}
          isReportSent={isReportSent}
          onSkipPress={shareExperienceMenuProps.closeMenu}
          onMissedDetailsPress={onMissedDetailsPress}
          isMissedDetailsButtonVisible={isMissedDetailsButtonVisible}
          onRangeChange={saveRangeForAnalytics}
        />
      </BottomMenu>

      <BottomMenu
        onHideEnd={onHideEnd}
        animatedIndex={shareExperienceSuccessMenuAnimatedIndex}
        testID={TestIDs.ObjectShareExperienceSuccessMenu}
        {...reportInnacurateInfoSuccessMenuProps}>
        <ObjectSuccessMenu
          testID={TestIDs.ObjectShareExperienceSuccessMenuContent}
          title={t('shareExperienceSuccessTitle')}
          subtitle={t('shareExperienceSuccessSubtitle')}
          buttonText={t('gotIt')}
          onPress={reportInnacurateInfoSuccessMenuProps.closeMenu}
          imageAsset={
            theme === 'light' ? 'imageRatingLight' : 'imageRatingDark'
          }
        />
      </BottomMenu>

      <BottomMenu
        onHideEnd={onReportInnacuranceMenuHide}
        testID={TestIDs.ObjectReportinaccuraciesMenu}
        {...reportInnacurateInfoMenuProps}
        header={reportInnacuraciesHeader}>
        <ObjectReportinaccuraciesMenu
          ref={innaccuraciesMenuRef}
          onSendPress={onSendPress}
          onInputValueChange={onReportInnacuranceFieldValueChange}
          autoHandleKeyboard
          isSendLoading={sendLoading}
          testID={TestIDs.ObjectReportinaccuraciesMenuContent}
        />
      </BottomMenu>

      <SnackBar offset={-top} isOnTop {...snackBarProps} />
    </>
  );
};
