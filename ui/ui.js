var createTab = function(url) {
  this.tabbar = document.getElementById("tabbar");
  this.webviews = document.getElementById("webviews");
  this.newtab = document.createElement("span");
  this.webview = document.createElement("webview");
  this.webview.setAttribute("src", url);
  this.webview.setAttribute("id", "webview" + createTab.i.toString());
  this.webview.setAttribute("class", "webview");
  this.webview.setAttribute("style", "display: none;");
  this.newtab.setAttribute("id", createTab.i.toString());
  this.newtab.setAttribute("class", "tab");
  this.newtab.setAttribute("style", "width: " + 80 / document.querySelectorAll(".tab").length + ";height: 32px;");
  this.newtab.setAttribute("onClick", "focusTab(this)");
  this.tabbar.appendChild(this.newtab);
  this.webviews.appendChild(this.webview);
  try { this.newtab.innerhtml = webview.getTitle();} catch(e) { this.newtab.innerhtml = url; };
  for (this.i2 = 0; this.i2 < document.querySelectorAll(".tab").length; this.i2++) {
    document.querySelectorAll(".tab")[this.i2].setAttribute("style", "height: 34px; width: " + 80 / document.querySelectorAll(".tab").length + "%;")
};
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
  this.tab = document.getElementById(dom.id)
  this.webview = document.getElementById("webview" + dom.id);
  this.webview.style = "";
  this.webview.class = "webview focusedwebview";
  this.tab.class = "tab focusedtab";
  var focusedTab = {"id": dom.id, "webview": this.webview};
};
window.onload = function(){
  createTab("http://google.com");
  focusTab(document.getElementById("0"));
}
var remote = require('remote');
remote.getCurrentWindow().openDevTools();
