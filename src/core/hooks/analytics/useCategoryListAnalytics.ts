import {useCallback} from 'react';
import {analyticsService} from 'services/AnalyticsService';

export function useCategoryListAnalytics() {
  const sendSelectCardEvent = useCallback(
    (cardName: string, categoryName: string) => {
      analyticsService.logEvent('home_card_event', {
        param_card_name: cardName,
        param_card_category: categoryName,
      });
    },
    [],
  );

  return {
    sendSelectCardEvent,
  };
}
