const sizes = {
  mobileS: 320,
  mobileM: 480,
  tabletS: 635,
  tablet: 768,
  laptop: 1025,
  desktop: 1201,
};

export const device = {
  mobileS: `(max-width: ${sizes.mobileS}px)`,
  mobileM: `(max-width: ${sizes.mobileM}px)`,
  tabletS: `(max-width: ${sizes.tabletS}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};
