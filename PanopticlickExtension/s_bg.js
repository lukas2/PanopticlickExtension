// this is run once when the extension loads.
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      console.log(details.requestHeaders[i].name);
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value = "";
        break;
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["https://panopticlick.eff.org/*"]},
  ["requestHeaders", "blocking"]
);
