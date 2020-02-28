
// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function () {
  var context = "selection";
  var title = "Hae valittu teksti Digi.kansalliskirjasto.fi:stä";
  var id = chrome.contextMenus.create({
    "title": title, "contexts": [context],
    "id": "context" + context
  });
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = '"' + info.selectionText + '"';
  var url = "https://digi.kansalliskirjasto.fi/search?formats=NEWSPAPER&query=" + encodeURIComponent(sText);
  window.open(url, '_blank');
};