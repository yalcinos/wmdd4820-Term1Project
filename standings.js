/*
 *
 *
 * Get Transfer of Galatasaray with FootBall-API 
 * 
 * 
 */
function onLoadFetch(){

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

  //Assign values to the combobox
  for(let i = 0 ; i<responseAsJson.api.standings[0].length; i++){
    let cmbbox = document.getElementById("combobox-team");
    let optionitem = document.createElement("option");
    optionitem.innerHTML = responseAsJson.api.standings[0][i].teamName;
    optionitem.value = responseAsJson.api.standings[0][i].teamName;
    cmbbox.appendChild(optionitem);
  }
  
});
}
 /*
 *
 *End of Transfer Part
 *  
 */
function changeDataByTeam(){

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
    return responseAsJson;
  }).then((getResponse) => getDataByTeam(getResponse));
  }


 function getDataByTeam(event){
     //Assign values to the combobox
  
    let cmbboxIndex = document.getElementById("combobox-team").selectedIndex;
    console.log(cmbboxIndex);
    console.log(Object.values(event.api.standings[0][cmbboxIndex].home));
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart1 = document.getElementById('myChart');
    chart1.style.display='block';
    
    if(doughnutChart != undefined){
      doughnutChart.destroy();
    }
      
    var doughnutChart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
  
      // The data for our dataset
      data: {
          labels: Object.keys(event.api.standings[0][cmbboxIndex].home),       
          datasets: [{
              backgroundColor: ['rgb(139,0,0)','rgb(0,128,0)','rgb(0,0,205)','rgb(255,0,0)','rgb(255,218,185)','rgb(47,79,79)'],
              borderColor: 'rgb(0, 0, 0)',
              data: Object.values(event.api.standings[0][cmbboxIndex].home)
          }]
      },
  
      // Configuration options go here
      options: {
        responsive :true
      }
  });
  
  //doughnutChart.destroy();
  //Away Statistic
  var awayChart = document.getElementById('myChart1').getContext('2d');
  var chart2= document.getElementById('myChart1');
  var doughnutChart1 = new Chart(awayChart, {
    // The type of chart we want to create
    type: 'doughnut',
  
    // The data for our dataset
    data: {
        labels: Object.keys(event.api.standings[0][cmbboxIndex].away),       
        datasets: [{
            backgroundColor: ['rgb(139,0,0)','rgb(0,128,0)','rgb(0,0,205)','rgb(255,0,0)','rgb(255,218,185)','rgb(47,79,79)'],
            borderColor: 'rgb(0, 0, 0)',
            data: Object.values(event.api.standings[0][cmbboxIndex].away)
        }]
    },
  
    // Configuration options go here
    options: {
      responsive :true
    }
    
  });
  
 }




