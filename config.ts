import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("appbuilder_sample");

config.google_drive.sheets_folder_ids =  ["1PbUw_sGiEBRWZMMZm_k_RCB_e0fYvvAO"];
config.google_drive.assets_folder_ids = ["1F9YBehu81c3OF86tQcs12OCOHF9OOOO7"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/santiago-game.git",
  content_tag_latest: "0.0.1",
};

config.web.favicon_asset = "images/logos/bird_on_light.svg";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Santiago Game";
config.app_config.APP_HEADER_DEFAULTS.title = "Santiago Game";
config.app_config.NOTIFICATION_DEFAULTS.title = "Santiago Game";
config.app_config.NOTIFICATION_DEFAULTS.text = "Santiago Game";

export default config;
