var request = new Request('https://api-football-v1.p.rapidapi.com/v2/leagues/country/turkey/2018 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
var request1 = new Request('https://api-football-v1.p.rapidapi.com/v2/teams/league/114 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
//114
fetch(request1)
.then(function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  return response.json();
})
.then(function(responseAsJson) {
    console.log(responseAsJson.api.teams.length);
  // Do stuff with the JSON
   for(let i=0; i<responseAsJson.api.teams.length; i++){
       document.getElementById('wrapper').innerHTML += responseAsJson.api.teams[i].name;
   }
  
  console.log(responseAsJson);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});

