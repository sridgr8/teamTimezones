function onLoadFunction(){
    var nameArr=["Test One","Test Two"];
    var timeArr=[5.5,2.0];
    
    var dataString = "";
    dataString+="<table class='table'>";
    dataString+="<tr><th>Name</th><th>Current Time</th></tr>";

    for(var i=0;i<nameArr.length;i++){
        dataString+="<tr>";
        dataString+="<td>";
        dataString+=nameArr[i];
        dataString+="</td>";
        dataString+="<td>";
        dataString+=calcTime(timeArr[i]);
        dataString+="</td>";
        dataString+="</tr>";
    }

    dataString+="</table>";
    
    document.getElementById('exp').innerHTML=dataString;
}

function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * offset));
    return nd.toLocaleString();
}
