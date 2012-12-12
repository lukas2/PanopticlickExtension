// this runs everytime a matching site is loaded.
console.log("Plugin is enabled...");

// inject script into page that nulls the navigator.plugins array
// .. and removes all flash-embeds

var a = document.createElement("script");
a.type = "text/javascript";
a.innerText += "var myNav = new function() {};";
// make sure all other exist in new navigator
a.innerText += "for (x in navigator) {";
a.innerText += 'eval("myNav." + x + " = navigator." + x + ";");';
a.innerText += 'console.log(x);';
a.innerText += "}";
a.innerText += 'myNav.plugins = null;';
a.innerText += "window.navigator = myNav;";
a.innerText += 'var embeds = document.getElementsByTagName("embed");';
a.innerText += 'while(embeds.length) embeds[0].parentNode.removeChild(embeds[0]);';
document.documentElement.insertBefore(a)
