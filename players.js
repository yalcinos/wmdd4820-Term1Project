
 /*
 *
 *
 *Start Get Player Informations of Galatasaray with FootBall-API 
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
  
  //Loop for getting every players informations.
   for (let i = 0 ; i < PlayersArray.length; i++) {

    var table = document.getElementById("player-table");
    var playerName = document.createTextNode(PlayersArray[i].player_name);
    var position = document.createTextNode(PlayersArray[i].position);
    var age = document.createTextNode(PlayersArray[i].age);
    var height = document.createTextNode(PlayersArray[i].height);
    var weight = document.createTextNode(PlayersArray[i].weight);
    var goals = document.createTextNode(PlayersArray[i].goals.total);
    var assists = document.createTextNode(PlayersArray[i].goals.assists);   
    var playedGames = document.createTextNode(PlayersArray[i].games.appearences); 
    var nationality = document.createTextNode(PlayersArray[i].nationality)
    var notDeclared = "Not Declared";
    var tr = document.createElement("tr");
  
    //Store td elements.
    var td = [];
    //Store Api Player Data in an array and append to the td as a child node.
    var dataPlayer = [];
    dataPlayer.push(playerName);
    dataPlayer.push(position);
    dataPlayer.push(age);
    dataPlayer.push(height);
    dataPlayer.push(weight);
    dataPlayer.push(goals);
    dataPlayer.push(assists);
    dataPlayer.push(playedGames);
    dataPlayer.push(nationality);
    //Create td element and add to array and add 4 td elements to tr.
    for(let z = 0; z < 9; z++){
       td[z] = document.createElement("td");
       tr.append(td[z]);
    }
     //BURADA KALINDI
    //Append every data to related td.
    
    for(let y=0; y<9; y++){
      //Check if there is null elements on the dataplayer array assign not declared value.
      if(dataPlayer[y].wholeText === "null"){
        
        td[y].innerHTML = notDeclared;
      }
      else {
        
        td[y].append(dataPlayer[y]);
      }
     }  
    
    table.append(tr);
  }
 
});
 /*
 *
 *End of Fixture Part
 *  
 */
 


