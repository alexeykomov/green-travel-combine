import {COLORS} from 'assets';

export const themeStyles = {
  touchIndicator: {
    width: 36,
    height: 4,
    borderRadius: 100,
    backgroundColor: COLORS.alto,
  },

  bgStyle: {
    backgroundColor: {
      light: COLORS.white,
      dark: COLORS.background,
    },
  },
  closeIcon: {
    color: {
      light: COLORS.logCabin,
      dark: COLORS.altoForDark,
    },
  },
  handleStyles: {
    backgroundColor: {
      light: COLORS.white,
      dark: COLORS.background,
    },
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  crossContainer: {
    padding: 16,
    alignItems: 'flex-end',
  },
};
