var umVersion="0.2"
    var hash = window.location.hash;
    var language = hash.split("#")[1];
    alert(language)
    var langArr=["en","fr","es","es-rES","es-rMX","es-419"];
    if($.inArray(language, langArr) === -1) {
      language = "en";
    }

    if(language=="es-rES"||language=="es-rMX"||language=="es-419"){
      language="es";
    }
    window.location.replace("http://www.alcatel-move.com/tracker/help/um/GPS_Tracker_UM_"+language+".pdf?"+umVersion)
