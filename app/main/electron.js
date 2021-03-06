const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
    const mainWindow = new BrowserWindow({ width: 1200, height: 800, webPreference: { nodeIntegration: true, }, });

    mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})
