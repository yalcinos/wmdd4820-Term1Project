/*
 *
 *
 * Get Transfer of Galatasaray with FootBall-API 
 * 
 * 
 */
var getAllFixtureData = new Request('https://api-football-v1.p.rapidapi.com/v2/transfers/team/645 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
fetch(getAllFixtureData)
  .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  return response.json();
})
.then(function(responseAsJson) {
  console.log(responseAsJson);
  //Loop for getting last 34 match.
  for (let i = 0 ; i < responseAsJson.api.transfers.length; i++) {
    var table = document.getElementById("transfer-table");
    var playerName = document.createTextNode(responseAsJson.api.transfers[i].player_name);
    var teamIn = document.createTextNode(responseAsJson.api.transfers[i].team_in.team_name);
    var teamOut = document.createTextNode(responseAsJson.api.transfers[i].team_out.team_name); 
    var transferDate = document.createTextNode(responseAsJson.api.transfers[i].transfer_date); 
    var tr = document.createElement("tr");
    //Store td elements.
    var td = [];
    //Store Api data
    var dataTransfer = [];
    dataTransfer.push(playerName);
    dataTransfer.push(teamOut);
    dataTransfer.push(teamIn);
    dataTransfer.push(transferDate);
    //Create td element and add to array ,add 4 td elements to tr.
    for(let z = 0; z < 4; z++){
       td[z] = document.createElement("td");
      //Append every data to related td.
       td[z].append(dataTransfer[z]); 
       tr.append(td[z]);
    }
    table.append(tr);
    
  }
 
});
 /*
 *
 *End of Transfer Part
 *  
 */

var getLiveData = new Request('https://api-football-v1.p.rapidapi.com/v2/fixtures/live/114-115-110 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
fetch(getLiveData)
  .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  console.log(response);
  return response.json();
})

