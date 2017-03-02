var umVersion = "0.2"
//var testUrl = "http://www.alcatel-move.com/tracker/help/index.html&version=latam#en"
var href = window.location.href;
var isLatamVersion = true;
if (href.indexOf("version=general") > -1) {
  isLatamVersion = false;
}
var hash = window.location.hash;
var language = hash.split("#")[1];
var langArr = ["en", "fr", "es", "es-rES", "es-rMX", "es-419", "hu", "en_US", "ro", "sk"];
if ($.inArray(language, langArr) === -1) {
  language = "en";
}

if (language == "es-rES" || language == "es-rMX" || language == "es-419") {
  language = "es";
}
var domainUrl = "http://www.alcatel-move.com/tracker/help";
//var domainUrl = "http://127.0.0.1:9096";
if(isLatamVersion){
  window.location.replace(domainUrl + "/latam.html"+hash);  
}else{
  window.location.replace(domainUrl + "/html/" + language + "/" + language + ".html?" + umVersion);  
}    

