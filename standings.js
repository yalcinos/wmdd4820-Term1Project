/*
 *
 *
 * Get Transfer of Galatasaray with FootBall-API 
 * 
 * 
 */
var getStandings = new Request('https://api-football-v1.p.rapidapi.com/v2/leagueTable/114 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
fetch(getStandings)
  .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  return response.json();
})
.then(function(responseAsJson) {
  console.log(responseAsJson);
  console.log(responseAsJson.api.standings[0][0].all);

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = document.getElementById('myChart');
  var doughnutChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: Object.keys(responseAsJson.api.standings[0][0].home),       
        datasets: [{
            backgroundColor: ['rgb(139,0,0)','rgb(0,128,0)','rgb(0,0,205)','rgb(255,0,0)','rgb(255,218,185)','rgb(47,79,79)'],
            borderColor: 'rgb(0, 0, 0)',
            data: Object.values(responseAsJson.api.standings[0][0].home)
        }]
    },

    // Configuration options go here
    options: {}
});

});
 /*
 *
 *End of Transfer Part
 *  
 */



