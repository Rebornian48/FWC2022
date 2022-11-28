fetch('https://worldcupjson.net/matches')
    .then(function (response) {
        if(response.ok) {
            return response.json();
        }
        else {
            throw new Error("Jaringan Internet Sedang Bermasalah");
        }
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    data = data.filter(function(data){
        return (data.status!=='completed');
    });
    var mainContainer = document.getElementById("compmatch");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("tr");
        var d = new Date(data[i].datetime);
        var monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var dateFormatted =  d.getDate() + ' ' + monthArray[d.getMonth()] + ' ' + d.getFullYear();
        if(d.getHours()<10){
            var h = "0" + d.getHours()
        }
        else{
            h = d.getHours()
        }
        if(d.getMinutes()<10){
            var m = "0" + d.getMinutes()
        }
        else{
            m = d.getMinutes()
        }
        var timeFormatted = h + ':' + m;
        div.innerHTML = '<div class="col"><div class="card text-center"><div class="card-header">' + dateFormatted + ' ' + timeFormatted + ' WIB<br />Stadium : ' + data[i].venue + ', ' + data[i].location + ' </div><div class="card-body">' + '<img border="1px" src="https://countryflagsapi.com/svg/' + data[i].home_team.name + '" alt="' + data[i].home_team.name + '" width=48 /><br />' + data[i].home_team.name + '<h6>vs</h6>' + '<img border="1px" src="https://countryflagsapi.com/svg/' + data[i].away_team.name + '" alt="' + data[i].away_team.name + '" width=48 /><br />' + data[i].away_team.name + '   </div></div><div>&nbsp;</div></div>';
        mainContainer.appendChild(div);
    }
}