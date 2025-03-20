import { randomUUID } from "node:crypto";
import { platform } from "@electron-toolkit/utils";
import { app } from "electron";
import Store from "electron-store";
import type { Config } from "./types";

export const config = new Store<Config>({
	defaults: {
		accounts: [{ id: randomUUID(), label: "Personal", selected: true }],
		lastWindowState: {
			bounds: {
				width: 1280,
				height: 800,
				x: undefined,
				y: undefined,
			},
			fullscreen: false,
			maximized: false,
		},
		hardwareAccelerationEnabled: true,
		autoHideMenuBar: false,
		launchMinimized: false,
		trayIconEnabled: !platform.isMacOS,
		titleBarStyle: "app",
		"app.confirmExternalLink": true,
		"app.launchMinimized": false,
		"app.launchAtLogin": false,
		"app.hardwareAcceleration": false,
		"gmail.zoomFactor": 1,
		"downloads.saveAs": false,
		"downloads.openFolderWhenDone": false,
		"downloads.location": app.getPath("downloads"),
		"notifications.enabled": true,
		"notifications.showSender": true,
		"notifications.showSubject": true,
		"notifications.showSummary": true,
		"notifications.playSound": true,
		"trayIcon.enabled": true,
		"blocker.enabled": true,
		"blocker.ads": true,
		"blocker.analytics": true,
		"blocker.trackers": true,
		"updates.autoCheck": true,
		"updates.notifyWhenDownloaded": true,
	},
});
