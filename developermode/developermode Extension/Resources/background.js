// background.js
browser.webNavigation.onCompleted.addListener((details) => {
    let url = new URL(details.url);
    if (url.pathname.startsWith('/web') && !url.searchParams.has('debug')) {
        url.searchParams.append('debug', '1');
        browser.tabs.update(details.tabId, { url: url.toString() });
    }
}, { url: [{ urlMatches: ".*" }] });
