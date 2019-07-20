


 /*
 *
 *
 *Start Get Fixture of Galatasaray with FootBall-API 
 * 
 * 
 */
var getAllFixtureData = new Request('https://api-football-v1.p.rapidapi.com/v2/fixtures/team/645 ', {
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
  for (let i = 75 ; i < responseAsJson.api.fixtures.length; i++) {
    var table = document.getElementById("fixture-tr");
    var homeTeam = document.createTextNode(responseAsJson.api.fixtures[i].homeTeam.team_name);
    var awayTeam = document.createTextNode(responseAsJson.api.fixtures[i].awayTeam.team_name);
    var score = document.createTextNode(responseAsJson.api.fixtures[i].score.fulltime); 
    var status = document.createTextNode(responseAsJson.api.fixtures[i].status); 
    var imgHome = document.createElement('img');
    var imgAway = document.createElement('img');
    imgHome.style.width = "30px";
    imgHome.style.cssFloat = "left";
    imgAway.style.width = "30px";
    imgAway.style.cssFloat = "left";
    imgHome.className = "home-logo";
    imgAway.className = "away-logo";
    imgHome.src= responseAsJson.api.fixtures[i].homeTeam.logo;
    imgAway.src = responseAsJson.api.fixtures[i].awayTeam.logo;
  
  

  
    var tr = document.createElement("tr");
    //Store td elements.
    var td = [];
    //Store Api data
    var dataFixture = [];
    dataFixture.push(homeTeam);
    dataFixture.push(score);
    dataFixture.push(awayTeam);
    dataFixture.push(status);
    dataFixture.push(imgHome);
    dataFixture.push(imgAway);
    //Create td element and add to array and add 4 td elements to tr.
    for(let z = 0; z < 4; z++){
       td[z] = document.createElement("td");
       tr.append(td[z]);
    }
    //Append every data to related td.
    for(let y=0; y<4; y++){
      td[y].appendChild(dataFixture[y]);  
     }
     td[0].append(dataFixture[4]);  
     td[2].append(dataFixture[5]); 
    table.append(tr);
    
  }
 
});
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
