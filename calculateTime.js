// import data from './data.json' assert {type:'json'};
// console.log(data.teamMembers);
    
function onLoadFunction(){
    // var nameArr=["Test One", "Test Two", "Test Three"];
    // var timeArr=[5.5, 5.5, -8.5];
    // var startTime=["12:00:00", "10:00:00", "08:00:00"];
    // var endTime=["21:00:00", "19:00:00", "17:00:00"];

    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data.teamMembers[1].name)
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

function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * offset));
    return nd.toLocaleString('en-GB');
}
