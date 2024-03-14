import { getPrimaryBtnBgColor, getFontBold, getFontMedium, getFontRegular, getPrimaryBtnTextColor, getLoaderColor, getInfoTitleTextColor } from '../Config';

export const contentStyles = {
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  topBarHeight: 30,
  footerMenuHeight: 50
};

export const appBody = {
  backgroundColor: contentStyles.black(0.00),
  minHeight: "100vh",
  position: "relative"
}

export const hideContent = { display: 'none' };
export const dispContent = { display: 'block' };


export const backgroundTheme = {
  background: getLoaderColor()
}

export const textColorBlack = {
  color: getPrimaryBtnTextColor()
}

export const textColorTheme = {
  color: getInfoTitleTextColor(),
  fontFamily: getFontBold()
}

export const borderColorTheme = {
  borderColor: getPrimaryBtnBgColor(),
  fontFamily: getFontBold()
}

export const backgroundBorderColorTheme = {
  background: getPrimaryBtnBgColor(),
  borderColor: getPrimaryBtnBgColor(),
  color: getPrimaryBtnTextColor(),
  fontFamily: getFontBold()
}

export const fontBold = {
  fontFamily: getFontBold()
}

export const fontMedium = {
  fontFamily: getFontMedium()
}

export const fontRegular = {
  fontFamily: getFontRegular()
}