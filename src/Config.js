import { isNullOrEmpty } from "./utils/appUtil";

let THEME_ID_KB = "kb";
let THEME_ID_KZ = "kz";
let THEME_ID_DT = "dt";

export const ENV_STAGE = "stage";
export const ENV_DEV = "dev";
export const ENV_UAT = "uat";
export const ENV_PROD = "prod";
export const ENV_PROD_BLUE = "prod_blue";

//backend environment
export const env = ENV_STAGE;

let backendUrlMap = {};
backendUrlMap[ENV_PROD] = "https://svc.digitap.ai/ecomm-data";
backendUrlMap[ENV_PROD_BLUE] = "https://svc.digitap.ai/ecomm-data";
backendUrlMap[ENV_STAGE] = "https://svcstage.digitap.work/ecom-data";
backendUrlMap[ENV_UAT] = "https://svcdemo.digitap.work/ecomm-data";
backendUrlMap[ENV_DEV] = "https://digitap-backend-dev.digitap.work/ecomm-data";

export const controllerUrl = backendUrlMap[env];;

//clientId
export const getThemeId = () => {
    let themeId = sessionStorage.getItem("theme_id");
    if (isNullOrEmpty(themeId)) {
        return THEME_ID_DT;
    }
    else{
        return themeId;
    }
}

//colors
let primaryBtnBgColorMap = {};
primaryBtnBgColorMap[THEME_ID_DT] = "#52a3c5";
primaryBtnBgColorMap[THEME_ID_KB] = "#fdd535";
primaryBtnBgColorMap[THEME_ID_KZ] = "#4747b4";

let primaryBtnTextColorMap = {};
primaryBtnTextColorMap[THEME_ID_DT] = "#ffffff";
primaryBtnTextColorMap[THEME_ID_KB] = "#000000";
primaryBtnTextColorMap[THEME_ID_KZ] = "#ffffff";

let loaderColorMap = {};
loaderColorMap[THEME_ID_DT] = "#52a3c5";
loaderColorMap[THEME_ID_KB] = "#fdd535";
loaderColorMap[THEME_ID_KZ] = "#52a3c5";

let infoTitleTextColorMap = {};
infoTitleTextColorMap[THEME_ID_DT] = "#52a3c5";
infoTitleTextColorMap[THEME_ID_KB] = "#f2b100";
infoTitleTextColorMap[THEME_ID_KZ] = "#4747b4";

export const getPrimaryBtnBgColor = () => {
    return primaryBtnBgColorMap[getThemeId()];
}

export const getPrimaryBtnTextColor = () => {
    return primaryBtnTextColorMap[getThemeId()]
}

export const getLoaderColor = () => {
    return loaderColorMap[getThemeId()]
}

export const getInfoTitleTextColor = () => {
    return infoTitleTextColorMap[getThemeId()]
}

//title
let titleMap = {};
titleMap[THEME_ID_DT] = "Digitap";
titleMap[THEME_ID_KB] = "KreditBee";
titleMap[THEME_ID_KZ] = "Kreditzy";

export const getTitle = () => {
    return titleMap[getThemeId()]
}

//images
export const getImagesPath = () => {
    return './static/images/' + getThemeId();
}

export const getClientNameIconPath = () => {
    return require(getImagesPath() + '/username_icon.png');
}

export const getTokenIconPath = () => {
    return require(getImagesPath() + '/password_icon.png');
}

export const getErrorIconPath = () => {
    return require(getImagesPath() + '/error_icon.png');
}

export const getLogoPath = () => {
    return require(getImagesPath() + '/logo.png');
}

//fonts
let fontMap = {};
fontMap[THEME_ID_DT] = "roboto";
fontMap[THEME_ID_KB] = "montserrat";
fontMap[THEME_ID_KZ] = "poppins";

export const getFontRegular = () => {
    return fontMap[getThemeId()] + "regular";
}

export const getFontMedium = () => {
    return fontMap[getThemeId()] + "medium";
}

export const getFontBold = () => {
    return fontMap[getThemeId()] + "bold";
}