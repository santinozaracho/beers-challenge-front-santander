const size = {
  xs: '575px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

const inputBg = '#EC0000'
const primaryColor = '#EC0000'
const secondaryColor = '#EC0000'
const secondaryColor30 = '#E6E3FF'
const secondaryColor50 = '#C8C4FF'
const primaryLight = '#9E97B4'
const gray = '#4F4F4F'
const bgLight = '#FAFBFF'
const pinkDark = '#FFA7FE'
const lightBlue = '#00B6FF'
const white = '#FFFFFF'
const grayDark = '#E7EBF8'

const theme = {
  '@primary-color': primaryColor,
  '@input-bg': inputBg,
  '@border-radius-base': '5px',
  '@input-color': primaryLight,
  '@layout-body-background': '#E5E5E5',
  '@select-background': inputBg,
  '@picker-bg': inputBg,
  '@slider-rail-background-color': inputBg,
  '@slider-track-background-color': secondaryColor,
  '@slider-handle-background-color': secondaryColor,
  '@slider-handle-color': secondaryColor,
  '@slider-handle-color-tooltip-open': secondaryColor,
  '@slider-dot-border-color-active': secondaryColor,
  '@tooltip-color': gray,
  '@tooltip-bg': white,
  '@btn-border-radius-base': '40px',
  '@steps-icon-size': '45px',
  '@steps-vertical-icon-width': '20px',
  '@progress-steps-item-bg': primaryLight,
  '@progress-remaining-color': primaryLight,
  primaryColor,
  secondaryColor,
  secondaryColor30,
  secondaryColor50,
  inputBg,
  gray,
  bgLight,
  pinkDark,
  lightBlue,
  white,
  grayDark,
  primaryLight,
  selectColor: primaryLight,
  facebookColor: '#3b5998',
  xs: `(max-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
}

module.exports = { theme }
