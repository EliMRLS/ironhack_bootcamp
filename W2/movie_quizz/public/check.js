var answer = document.getElementById('answer');
var question = answer.dataset.question;
var year = answer.dataset.year;
var director = answer.dataset.director;

function CheckYear(image) {
  if(image.dataset.year == this.year){
      image.style.border = "2px solid green";
      alert("Congrats! That's a correct answer!");
    } else {
      image.style.border = "2px solid red";
    }
}

function CheckDirector(image) {
  if(image.dataset.director == this.director){
    image.style.border = "2px solid green";
      alert("Congrats! That's a correct answer!");
    } else {
      image.style.border = "2px solid red";
    }
}

function CheckAnswer(image) {
  if(question == "year") {
    CheckYear(image);
  }else{
    CheckDirector(image);
  }
}