chrome.browserAction.onClicked.addListener(function(){
   chrome.tabs.executeScript(null, {file: "play.js"});
});

function playInMpv(info, tab) {
    var playurl = "ytb://" + info.linkUrl;
    chrome.tabs.executeScript(tab.id, {code:'window.location.href="' + playurl + '"'});
}

chrome.contextMenus.create({
    title: "Play in mpv",
    contexts: ["link"],
    onclick: function(info, tab) {
        playInMpv(info, tab);
    }
});
