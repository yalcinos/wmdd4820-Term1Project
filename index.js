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
 */



 /*
 *
 *
 *Start Get Fixture of Galatasaray with FootBall-API 
 * 
 * 
 */
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
.then(function(responseAPI) {
  console.log(responseAPI);
  //Get Last 5 Elements in arrat Because the api so dynamic every day there is an update , so array expands by daily.
  var responseAsJson = responseAPI.api.fixtures.slice(Math.max(responseAPI.api.fixtures.length-5));
  //console.log("Sliced Array:" + responseAsJson);
  var ul = document.getElementById("match-history");

  for (let i = 0 ; i < responseAsJson.length; i++) {
    var li = document.createElement("li");
    var hr = document.createElement("hr");
    var span = document.createElement("span");
    span.className = "match-date";
    li.className = "top-news__item";
    var homeTeam = document.createTextNode(responseAsJson[i].homeTeam.team_name);
    var awayTeam = document.createTextNode(responseAsJson[i].awayTeam.team_name);
    var homeScore = document.createTextNode(responseAsJson[i].score.fulltime);
    var dateMatch = document.createTextNode(responseAsJson[i].event_date);
    var garbageDate= dateMatch.splitText(10);
    var remainDate = dateMatch;
    //The new fixture was published , so the matches hasn't start yet. The score was null. I change the null to 0-0
    var nullScore = "0-0";
    if(homeScore.wholeText === "null"){
        
      homeScore = nullScore;
    }

    li.appendChild(homeTeam);
    li.appendChild(document.createTextNode(" "));
    li.append(homeScore);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(awayTeam);
    //li.appendChild(span.appendChild(remainDate));
    li.append(span);
    span.appendChild(remainDate);
    ul.append(li);
    ul.append(hr);
  }
})
 /*
 *
 *End of Fixture Part
 *  
 */


 /*
 *
 *Starts Gallery SlideShow Functionality
 *  
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
/*
 *
 *End of Gallery SlideShow Functionality
 *  
 */
