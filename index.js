/**
 * 
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
 
var requestLiveScore = new Request('https://api-football-v1.p.rapidapi.com/v2/fixtures/team/645 ', {
	headers: new Headers({
		'Content-Type': 'text/plain',
        'X-RapidAPI-Key':'dc03adc6e7mshf1c57d344b8843ep16cc1fjsnca50c7807d33'
	})
});
fetch(requestLiveScore)
  .then(function(response) {
    if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read the response as json.
  return response.json();
})
.then(function(responseAsJson) {
  console.log(responseAsJson);
  var ul = document.getElementById("match-history");
  for(let i=100 ; i<105; i++){
    var li = document.createElement("li");
    li.className = "top-news__item";
    var homeTeam = document.createTextNode(responseAsJson.api.fixtures[i].homeTeam.team_name);
    var awayTeam = document.createTextNode(responseAsJson.api.fixtures[i].awayTeam.team_name);
    var homeScore =document.createTextNode(responseAsJson.api.fixtures[i].score.fulltime);
    //var result = document.createTextNode(homeTeam+ " " +homeScore+ " "+awayTeam);
    li.appendChild(homeTeam);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(homeScore);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(awayTeam);
    ul.append(li);
  }
    console.log(responseAsJson.api.fixtures[100].homeTeam.team_name);
  // Do stuff with the JSON
   
})
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
