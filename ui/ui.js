var createTab = function(url) {
  this.tabbar = document.querySelector(".tabs");
  this.webviews = document.querySelector(".webviews");
  this.newtab = document.createElement("div");
  this.webview = document.createElement("webview");
  this.webview.setAttribute("src", url);
  this.webview.setAttribute("id", createTab.i);
  this.webview.setAttribute("class", "webview");
  this.webview.setAttribute("style", "display: none;");
  this.newtab.innerhtml = "google";
  this.newtab.setAttribute("id", createTab.i);
  this.newtab.setAttribute("class", "tab");
  this.newtab.setAttribute("style", "width: " + 80 / document.querySelectorAll(".tab").length);
  this.newtab.setAttribute("onClick", "focusTab(this)");
  this.tabbar.appendChild(this.newtab);
  for (this.i2 = 0; this.i2 < document.querySelectorAll(".tab").length; this.i2++) {
    document.querySelectorAll(".tab")[this.i2].setAttribute("style", "display: inline-block; width: " + 80 / document.querySelectorAll(".tab").length)
};
  this.webviews.appendChild(this.webview);
  this.i++;
};
createTab.i = 0;
var focusTab = function(dom) {
  try {
    this.oldtab = document.querySelector(".focusedtab");
    this.oldwebview = document.querySelector(".focusedwebview");
    this.oldwebview.css = "display: none;";
    this.oldwebview.class = "webview";
    this.oldtab.class = "tab";
} catch (e) {};
  this.tab = document.getElementById(dom.getAttribute("id"))
  this.webview = document.querySelector("#" + dom.getAttribute("id") + ".webview");
  this.webview.style = "display: inline;";
  this.webview.class = "webview focusedwebview";
  this.tab.class = "tab focusedtab";
  var focusedTab = {"id": dom.id, "webview": this.webview};
};
createTab("http://google.com");
focusTab(0)
var remote = require('remote');
remote.getCurrentWindow().openDevTools();
