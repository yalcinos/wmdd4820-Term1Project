
var submitButton = document.getElementById("submit-button");
var fName = document.getElementById("fname");
var sName = document.getElementById("lname");
var commentArea = document.getElementById("issue");
var p = document.createElement("p");
var teamComboBox = document.getElementById("team-combo");
var resultArea = document.getElementById("result-area");


submitButton.addEventListener("click", function() {
  p.style.textAlign = "center";
  p.innerHTML = `Result <br>
  Your Name: ${fName.value} <br>
  Your Surname: ${sName.value}<br>
  Your Favorite Team: ${teamComboBox.value}<br>
  Your Comment : ${commentArea.value}`;
  resultArea.append(p);
})


//Fetch Team Name from api and assign to onLoad event in survey.html
function fetchDataToComboBox(){

  var getTeamName = new Request('https://api-football-v1.p.rapidapi.com/v2/leagueTable/114 ', {
    headers: new Headers({
      'Content-Type': 'text/plain',
          'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
    })
  });
  fetch(getTeamName)
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
      var cmbbox = document.getElementById("team-combo");
      var optionitem = document.createElement("option");
      optionitem.innerHTML = responseAsJson.api.standings[0][i].teamName;
      cmbbox.appendChild(optionitem);
    }    
  })
}