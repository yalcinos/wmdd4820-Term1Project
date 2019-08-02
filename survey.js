
var submitButton = document.getElementById("submit-btn");
var p = document.createElement("p");
var radioGroup = document.getElementsByName("team");
var resultarea = document.getElementById("result-area");
var otherText = document.getElementById("others");
submitButton.addEventListener("click", function() {
  for(let i = 0 ; i < radioGroup.length; i++) {
    if(radioGroup[i].checked ){
      //p.innerHTML = otherText.value
      p.innerHTML = radioGroup[i].value;
      resultarea.append(p);
    }
   
}
})