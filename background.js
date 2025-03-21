chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed - Adding Context Menu");

    chrome.contextMenus.create({
        id: "customButton",
        title: "Open with Freedium",
        contexts: ["link"]
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Error creating context menu:", chrome.runtime.lastError);
        } else {
            console.log("Context menu created successfully.");
        }
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "customButton") {
        console.log("Freedium Link Clicked! URL:", info.linkUrl);
        const linkNew = "https://freedium.cfd/" + info.linkUrl
        chrome.tabs.create({ url: linkNew });
    }
});
