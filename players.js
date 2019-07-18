


 /*
 *
 *
 *Start Get Fixture of Galatasaray with FootBall-API 
 * 
 * 
 */
var getPlayersData = new Request('https://api-football-v1.p.rapidapi.com/v2/players/team/645/2018-2019', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
  })
  //https://api-football-v1.p.rapidapi.com/v2/players/team/645/114
});
fetch(getPlayersData)
  .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  return response.json();
})
.then(function(responseAsJson) {
  console.log("API Data: ", responseAsJson);
  // I get playersData from API But some data are same with each other. such as in array a players was written 4 times 
  //Because he played multiple leauge like Turk Super Lig, UEFA LIG, Champions Leauge etc. So I need only Super Lig.
  // I filtered this array with player data who played Super Lig and I stored these data in new array in below codes.
  //After that I used PlayersArray with Promises so I got rid of API Array and created my own array to prevent repetation of playersData.
  var PlayersArray = [];
  for(let i= 0 ; i<responseAsJson.api.players.length; i++ ){
    if(responseAsJson.api.players[i].league === "Süper Lig"){
      PlayersArray.push(responseAsJson.api.players[i]);
      
    }
  }
  return PlayersArray;
}).then(function(PlayersArray){
  console.log("My New Players Array:" , PlayersArray);
  //Loop for getting last 34 match.
  /* for (let i = 0 ; i < responseAsJson.api.fixtures.length; i++) {
    var table = document.getElementById("fixture.js");
    var homeTeam = document.createTextNode(responseAsJson.api.players[i].homeTeam.team_name);
    var awayTeam = document.createTextNode(responseAsJson.api.players[i].awayTeam.team_name);
    var score = document.createTextNode(responseAsJson.api.players[i].score.fulltime); 
    var status = document.createTextNode(responseAsJson.api.players[i].status); 
    var tr = document.createElement("tr");
    //Store td elements.
    var td = [];
    //Store Api data
    var dataFixture = [];
    dataFixture.push(homeTeam);
    dataFixture.push(score);
    dataFixture.push(awayTeam);
    dataFixture.push(status);
    //Create td element and add to array and add 4 td elements to tr.
    for(let z = 0; z < 4; z++){
       td[z] = document.createElement("td");
       tr.append(td[z]);
    }
    //Append every data to related td.
    for(let y=0; y<4; y++){
      td[y].appendChild(dataFixture[y]);  
     }  
    table.append(tr);
  }
 */
});
 /*
 *
 *End of Fixture Part
 *  
 */
 


