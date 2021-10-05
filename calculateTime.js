function onLoadFunction(){

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            fillTable(data)
        });
}

function fillTable(data){
    var dataString = "";
    dataString+="<table class='table'>";
    dataString+="<tr><th>Name</th><th>Current Date</th><th>Current Time</th></tr>";

    for(var i=0;i<data.teamMembers.length;i++){
        var t=calcTime(data.teamMembers[i].timeDifferential);
        var d1=((t.split(" ")[0]).split(",")[0]);
        var t1=(t.split(" ")[1]);
        if(t1>data.teamMembers[i].startTime && t1<data.teamMembers[i].endTime){
            dataString+="<tr class='table-success'>";
        }
        else{
            dataString+="<tr class='table-danger'>";
        }
        dataString+="<td>";
        dataString+=data.teamMembers[i].name;
        dataString+="</td>";
        dataString+="<td>";
        dataString+=d1;
        dataString+="</td>";
        dataString+="<td>";
        dataString+=t1;
        dataString+="</td>";
        dataString+="</tr>";
    }

    dataString+="</table>";
    
    document.getElementById('exp').innerHTML=dataString;
}

function calcTime(offsetValue) {
    dateValue = new Date();
    utcValue = dateValue.getTime() + (dateValue.getTimezoneOffset() * 60000);
    newDate = new Date(utcValue + (3600000 * offsetValue));
    return newDate.toLocaleString('en-GB');
}
