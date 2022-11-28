fetch('https://worldcupjson.net/teams')
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
var mainContainer = document.getElementById("groups");
for (var i = 0; i < data.groups.length; i++) {
    var a = data.groups[i];
    var div = document.createElement("div");
    div.innerHTML = '<h4>Group ' + a.letter + '</h4>';
    cont1 = mainContainer.appendChild(div);
    var gro = Object.assign(document.createElement("table"),{className:'table table-bordered'});
    cont1.append(gro);
    var gro2 = Object.assign(document.createElement("thead"),{className:'table-dark '});
    gro2.innerHTML = '<tr><td>Country</td><td>Games Played</td><td>Win</td><td>Draw</td><td>Lose</td><td>Goals For</td><td>Goals Against</td><td>Goals Differential</td><td>Points</td></tr>'
    gro.append(gro2);
    for(var j=0; j < a.teams.length; j++){
        var aa = document.createElement("tr");
        var ab = a.teams;
        ab.sort((a,b) => {
            let o1 = a.group_points;
            let o2 = b.group_points;
            
            let n1 = a.goal_differential;
            let n2 = b.goal_differential;

            if(o1 < o2) return 1;
            if(o1 > o2) return -1;
            if(n1 < n2) return 1;
            if(n1 > n2) return -1;

            return 0;
        });
        aa.innerHTML = '<td>' + ab[j].name + '</td><td>' + ab[j].games_played + '</td><td>' + ab[j].wins + '</td><td>' + ab[j].draws + '</td><td>' + ab[j].losses + '</td><td>' + ab[j].goals_for + '</td><td>' + ab[j].goals_against + '</td><td>' + ab[j].goal_differential + '</td><td>' + ab[j].group_points + '</td>';
        gro.appendChild(aa);
    }
}
}