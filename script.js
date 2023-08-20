document.addEventListener('DOMContentLoaded', function () {
	const countdownElement = document.getElementById('countdown');
	const nextButton = document.getElementById('next');
	const previousButton = document.getElementById('previous');
	const userScoreElement = document.getElementById('userscore');
	const questionContainer = document.querySelector('.container');
  
	// Quiz data 
	const questions = [
	  {
		question: 'Create a variable called carName, assign the value Volvo to it.',
		answers: {
		  a: 'var carName = Volvo',
		  b: 'carName = volvo',
		  c: 'variable = volvo',
		},
		correctAnswer: 'a',
	  },
	  {
		question: 'Create a variable called x, assign the value 50 to it.',
		answers: {
		  a: 'var x ="50"',
		  b: 'variable = 50',
		  c: '50=x',
		},
		correctAnswer: 'a',
	  },
	  {
		question: 'How do you link a JavaScript file in HTML?',
		answers: {
		  a: '<script>',
		  b: '<link>',
		  c: '<script src="file.js"></script>',
		},
		correctAnswer: 'c',
	  },
	];
  
	let currentQuestionIndex = 0;
	let countdown = 60;
	let userScore = 0;
  
	function questionDisplay(container) {
	  const currentQuestion = questions[currentQuestionIndex];
	  const questionCard = document.createElement('div');
	  questionCard.className = 'card';
  
	  
	  const questionText = document.createElement('div');
	  questionText.className = 'question';
	  questionText.textContent = currentQuestion.question;
	  questionCard.appendChild(questionText);
  
	  const answersElement = document.createElement('div');
	  answersElement.className = 'answers';
  
	  for (const letter in currentQuestion.answers) {
		const answerText = currentQuestion.answers[letter];
  
		const label = document.createElement('label');
  
		const input = document.createElement('input');
		input.type = 'radio';
		input.name = 'question' + currentQuestionIndex;
		input.value = letter;
  
		label.appendChild(input);
		label.appendChild(document.createTextNode(`${letter}: ${answerText}`));
  
		answersElement.appendChild(label);
	  }
  
	  questionCard.appendChild(answersElement);
	  container.appendChild(questionCard);
	}
  
	function checkAnswer(selectedIndex) {
	  const currentQuestion = questions[currentQuestionIndex];
	  if (selectedIndex === currentQuestion.correctAnswer) {
		userScore++;
	  }
	}
  
  
	function startQuiz() {
	  const timerInterval = setInterval(function () {
		countdown--;
		countdownElement.textContent = countdown;
  
		if (countdown <= 0) {
		  clearInterval(timerInterval);
		  showResults();
		}
	  }, 1000);
  
	  questionDisplay(questionContainer);
	}
  
	nextButton.addEventListener('click', function () {
	  checkAnswer(''.checked);
	  currentQuestionIndex++;
  
	  if (currentQuestionIndex < questions.length) {
		questionDisplay(questionContainer);
	  } else {
		showResults();
	  }
	});
  
	previousButton.addEventListener('click', function () {
	  if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
		questionContainer.innerHTML = '';
		questionDisplay(questionContainer);
	  }
	});
  
  
	startQuiz();
  });
  
  