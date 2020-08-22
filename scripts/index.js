let questions = document.getElementsByClassName('question');
let indexQuestion = -1;

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {

    if (i == indexQuestion) {
      questions[indexQuestion].children[1].classList.remove('open')
      questions[indexQuestion].querySelector('svg').classList.remove('fa-times');
      questions[indexQuestion].querySelector('svg').classList.add('fa-plus');
      indexQuestion = -1;
    } else {
      if (indexQuestion !== -1) {
        questions[indexQuestion].children[1].classList.remove('open')
        questions[indexQuestion].querySelector('svg').classList.remove('fa-times');
        questions[indexQuestion].querySelector('svg').classList.add('fa-plus');
      }

      questions[i].querySelector('svg').classList.remove('fa-plus');
      questions[i].querySelector('svg').classList.add('fa-times');
      questions[i].children[1].classList.add('open');

      indexQuestion = i;

    }
  });
}