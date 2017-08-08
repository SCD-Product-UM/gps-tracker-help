var umVersion = "0.2"

//var testUrl = "http://www.alcatel-move.com/tracker/help/index.html&version=latam#en"

var href = window.location.href;
var isLatamVersion = true;
if (href.indexOf("version=general") > -1) {
  isLatamVersion = false;
}
var hash = window.location.hash;
var language = hash.split("#")[1];
var langArr = ["en", "fr", "es", "es-rES", "es-rMX", "es-419", "hu", "ro", "sk", "tr", "cz","cs","ru","sr","de","it","pt"]; //通用版本;cs、cz为捷克语
var latamCurrentList = ["en", "es", "es-rES", "es-rMX", "es-419", "en_US", "en-US", "en-us", "en_us"]; //latam版本

if ($.inArray(language, isLatamVersion ? latamCurrentList : langArr) == -1) {
  if (language.indexOf("_") != -1) {
    language = language.split("_")[0]
  } else if (language.indexOf("-") != -1) {
    language = language.split("-")[0]
  }else{
    language = "en";
  }
}

if (language == "es-rES" || language == "es-rMX" || language == "es-419") {
  language = "es";
}
var domainUrl = "http://www.alcatel-move.com/tracker/help";
//var domainUrl = "http://127.0.0.1:9096";
if (isLatamVersion) {
  if (language == "en_US" || language == "en-US" || language == "en-us" || language == "en_us" || language == "en" || language == "en-rUS") {
    window.location.replace(domainUrl + "/html/en_US/en_US.html?" + umVersion);
  } else {
    window.location.replace(domainUrl + "/latam.html" + hash);
  }
} else {
  window.location.replace(domainUrl + "/html/" + language + "/" + language + ".html?" + umVersion);
}
