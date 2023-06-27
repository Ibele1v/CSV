/**
 * Modified version of Ben Nadel's code.
 * Original code: https://gist.github.com/bennadel/9753411
 * License: MIT Licsense
 */
function CSVArrayTool(strData, config){
    var strDelimiter = config.delimiter || ",";
    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );
    var arrData = [[]];  
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)){
        var strMatchedDelimiter = arrMatches[1];
        if (
            strMatchedDelimiter.length &&
            (strMatchedDelimiter != strDelimiter)
        ){
            arrData.push([]);
        }
        if (arrMatches[2]){
            var strMatchedValue = arrMatches[2].replace(
                new RegExp("\"\"", "g"),
                "\""
            );
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }   
    if(config.categories == true){
      arrData.splice(0,1);
    } else if (config.categories != null){
      console.log("error: Parser Parameters Incorrect");
    }
    return arrData;
}
