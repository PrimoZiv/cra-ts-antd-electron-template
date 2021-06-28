const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const packageInfo = require('../package.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800
  });

  if (isDev) {
    win.loadURL(`http://localhost:${packageInfo.port}`);
  } else {
    win.loadFile('./build/index.html');
  }
}

module.exports = createWindow;
