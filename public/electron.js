const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `http://localhost:8080`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});