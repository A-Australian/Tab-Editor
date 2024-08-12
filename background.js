chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "setTitle",
    title: "Set Document Title",
    contexts: ["all"]
  });
  chrome.contextMenus.create({
    id: "setFavicon",
    title: "Set Tab Icon",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "setTitle") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }, () => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => setTitle()
      });
    });
  } else if (info.menuItemId === "setFavicon") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }, () => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => setFavicon()
      });
    });
  }
});
