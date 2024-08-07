import { defaultDownloadsPath } from "@main/constants";
import { app, ipcMain } from "electron";

import "./catalogue/get-catalogue";
import "./catalogue/get-game-shop-details";
import "./catalogue/get-games";
import "./catalogue/get-how-long-to-beat";
import "./catalogue/get-random-game";
import "./catalogue/search-games";
import "./catalogue/search-game-repacks";
import "./hardware/get-disk-free-space";
import "./library/add-game-to-library";
import "./library/create-game-shortcut";
import "./library/close-game";
import "./library/delete-game-folder";
import "./library/get-game-by-object-id";
import "./library/get-library";
import "./library/open-game";
import "./library/open-game-executable-path";
import "./library/open-game-installer";
import "./library/open-game-installer-path";
import "./library/update-executable-path";
import "./library/remove-game";
import "./library/remove-game-from-library";
import "./misc/open-external";
import "./misc/show-open-dialog";
import "./torrenting/cancel-game-download";
import "./torrenting/pause-game-download";
import "./torrenting/resume-game-download";
import "./torrenting/start-game-download";
import "./user-preferences/get-user-preferences";
import "./user-preferences/update-user-preferences";
import "./user-preferences/auto-launch";
import "./autoupdater/check-for-updates";
import "./autoupdater/restart-and-install-update";
import "./user-preferences/authenticate-real-debrid";
import "./download-sources/get-download-sources";
import "./download-sources/validate-download-source";
import "./download-sources/add-download-source";
import "./download-sources/remove-download-source";
import "./download-sources/sync-download-sources";
import "./auth/sign-out";
import "./auth/open-auth-window";
import "./auth/get-session-hash";
import "./user/get-user";
import "./profile/get-me";
import "./profile/update-profile";

ipcMain.handle("ping", () => "pong");
ipcMain.handle("getVersion", () => app.getVersion());
ipcMain.handle(
  "isPortableVersion",
  () => process.env.PORTABLE_EXECUTABLE_FILE != null
);
ipcMain.handle("getDefaultDownloadsPath", () => defaultDownloadsPath);
