browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "setTitle",
    title: "Set Tab Name",
    contexts: ["all"]
  });
  browser.contextMenus.create({
    id: "setFavicon",
    title: "Set Tab icon",
    contexts: ["all"]
  });
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "setTitle") {
    browser.tabs.executeScript(tab.id, {
      file: 'content.js'
    }).then(() => {
      browser.tabs.executeScript(tab.id, {
        code: 'setTitle();'
      });
    });
  } else if (info.menuItemId === "setFavicon") {
    browser.tabs.executeScript(tab.id, {
      file: 'content.js'
    }).then(() => {
      browser.tabs.executeScript(tab.id, {
        code: 'setFavicon();'
      });
    });
  }
});
