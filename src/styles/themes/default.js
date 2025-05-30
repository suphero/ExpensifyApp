/* eslint-disable no-unused-vars */
import colors from '../colors';

const darkTheme = {
    // Figma keys
    appBG: colors.greenAppBackground,
    highlightBG: colors.greenHighlightBackground,
    border: colors.greenBorders,
    borderLighter: colors.greenBordersLighter,
    borderFocus: colors.green,
    icon: colors.greenIcons,
    iconMenu: colors.green,
    iconHovered: colors.white,
    iconSuccessFill: colors.green,
    iconReversed: colors.greenAppBackground,
    textSupporting: colors.greenSupportingText,
    text: colors.white,
    link: colors.blueLink,
    linkHover: colors.blueLinkHover,
    buttonDefaultBG: colors.greenDefaultButton,
    buttonDisabledBG: colors.greenDefaultButtonDisabled,
    buttonHoveredBG: colors.greenDefaultButtonHover,
    buttonPressedBG: colors.greenDefaultButtonPressed,
    danger: colors.red,
    dangerHover: colors.redHover,
    dangerPressed: colors.redHover,
    warning: colors.yellow,
    success: colors.green,
    successHover: colors.greenHover,
    successPressed: colors.greenPressed,
    transparent: colors.transparent,
    midtone: colors.green700,
    signInPage: colors.green800,
    dark: colors.midnight,

    // Additional keys
    overlay: colors.greenHighlightBackground,
    inverse: colors.white,
    shadow: colors.black,
    componentBG: colors.greenAppBackground,
    hoverComponentBG: colors.greenHighlightBackground,
    activeComponentBG: colors.greenBorders,
    signInSidebar: colors.green800,
    sidebar: colors.greenHighlightBackground,
    sidebarHover: colors.greenAppBackground,
    heading: colors.white,
    textLight: colors.white,
    textDark: colors.greenAppBackground,
    textReversed: colors.greenAppBackground,
    textBackground: colors.greenHighlightBackground,
    textMutedReversed: colors.greenIcons,
    textError: colors.red,
    offline: colors.greenIcons,
    modalBackdrop: colors.greenHighlightBackground,
    modalBackground: colors.greenAppBackground,
    cardBG: colors.greenHighlightBackground,
    cardBorder: colors.greenHighlightBackground,
    spinner: colors.greenSupportingText,
    unreadIndicator: colors.green,
    placeholderText: colors.greenIcons,
    heroCard: colors.blue,
    uploadPreviewActivityIndicator: colors.greenHighlightBackground,
    dropUIBG: 'rgba(6,27,9,0.92)',
    dropTransparentOverlay: 'rgba(255,255,255,0)',
    checkBox: colors.green,
    pickerOptionsTextColor: colors.white,
    imageCropBackgroundColor: colors.greenIcons,
    fallbackIconColor: colors.green700,
    reactionActive: '#003C73',
};

const oldTheme = {
    shadow: colors.black,
    link: colors.blue,
    linkHover: colors.blueHover,
    componentBG: colors.white,
    hoverComponentBG: colors.gray1,
    activeComponentBG: colors.gray2,
    appBG: colors.white,
    heading: colors.dark,
    sidebar: colors.gray1,
    sidebarHover: colors.white,
    border: colors.gray2,
    borderFocus: colors.blue,
    icon: colors.gray3,
    iconMenu: colors.gray3,
    iconHovered: colors.dark,
    iconSuccessFill: colors.green,
    iconReversed: colors.white,
    textSupporting: colors.gray4,
    text: colors.dark,
    textError: colors.oldRed,
    textBackground: colors.gray1,
    textReversed: colors.white,
    textMutedReversed: colors.gray3,
    buttonDefaultBG: colors.gray2,
    offline: colors.gray3,
    modalBackdrop: colors.gray3,
    modalBackground: colors.gray2,
    buttonDisabledBG: colors.gray2,
    buttonHoveredBG: colors.gray1,
    buttonPressedBG: colors.gray2,
    spinner: colors.gray4,
    unreadIndicator: colors.green,
    placeholderText: colors.gray3,
    heroCard: colors.blue,
    uploadPreviewActivityIndicator: colors.gray1,
    dropUIBG: 'rgba(6,27,9,0.92)',
    dropTransparentOverlay: 'rgba(255,255,255,0)',
    cardBG: colors.gray1,
    cardBorder: colors.gray1,
    checkBox: colors.blue,
    overlay: colors.gray1,

    // Merging new Keys for Dark Mode merge. Delete after new branding is implemented.
    highlightBG: colors.gray1,
    danger: colors.oldRed,
    dangerHover: colors.oldRedHover,
    dangerPressed: colors.oldRedHover,
    dangerDisabled: colors.oldRedDisabled,
    warning: colors.yellow,
    success: colors.green,
    successHover: colors.greenHover,
    successPressed: colors.greenPressed,
    transparent: colors.transparent,
    inverse: colors.dark,
    textLight: colors.white,
    textDark: colors.dark,
};

export default darkTheme;
