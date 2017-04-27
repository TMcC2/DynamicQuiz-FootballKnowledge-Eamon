var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 
//setting variables
function validate(form) {
    fail  = validateForename(form.forename.value);
    fail += validateSurname(form.surname.value);
    fail += validateUsername(form.username.value);
    fail += validatePassword(form.password.value);
    fail += validateAge(form.age.value);
    fail += validateEmail(form.email.value);

    if   (fail == "")
        return true;
    else { 
        alert(fail);
        return false;
    }
}

//Basically check if Forename is empty
function validateForename(field) {
    return (field == "") ? "No Forename was entered.\n" : "";
}

//Basically check if Surname is empty
function validateSurname(field) {
    return (field == "") ? "No Surname was entered.\n" : "";
}

//Check that the username has valid characters only using a Regular expression
function validateUsername(field) {
    if (field == "")
        return "No Username was entered.\n";
    else if (field.length < 5)
      return "Usernames must be at least 5 characters.\n";
    else if (/[^a-zA-Z0-9_-]/.test(field))
      return "Only a-z, A-Z, 0-9, - and _ allowed in Usernames.\n";

    return "";
}


//Check that the password has at least some Capital letters and numbers using a Regular expression
function validatePassword(field) {
    if (field == "")
        return "No Password was entered.\n";
    else if (field.length < 6)
      return "Passwords must be at least 6 characters.\n";
    else if (! /[a-z]/.test(field) ||
             ! /[A-Z]/.test(field) ||
             ! /[0-9]/.test(field))
      return "Passwords require one each of a-z, A-Z and 0-9.\n";

    return "";
}

//Check that the age is valid - adult age
function validateAge(field) {
    if (isNaN(field))
        return "No Age was entered.\\n";
    else if (field < 18 || field > 110)
        return "Age must be between 18 and 110.\n";

    return "";
}

/* Check that it looks like an email address i.e. contains at 
   least one '.' and the @ symbol using a Regular expression */
function validateEmail(field) {
    if (field == "")
        return "No Email was entered.\n";
      else if (!((field.indexOf(".") > 0) &&
                 (field.indexOf("@") > 0)) ||
                 /[^a-zA-Z0-9.@_-]/.test(field))
          return "The Email address is invalid.\n";

    return "";
}
//Set array to hold answers
var quizAnswers = [];

var questions=[
    {
	    question: "who is the 2016/2017 premier league top goalscorer?",//question
	    correctAnswer: "Romelu Lukaku",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Sergio Aguero",
	    answer1: "Romelu Lukaku",
	    answer2: "Alexis Sanchez",
        answer3: "Diego Costa"
	},
	{
	    question: "'Gooners' are supporters of which premier league team?",//question
	    correctAnswer: "Arsenal",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Arsenal",
	    answer1: "Chelsea",
	    answer2: "Tottenham",
        answer3: "West ham"
	},
	{
	    question: "Who was the first player to score a hat-trick of the 2016/2017 premier league?",//question
	    correctAnswer: "Romelu Lukaku",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Zlatan Ibrahimovic",
	    answer1: "Romelu Lukaku",
	    answer2: "Alexis Sanchez",
        answer3: "Wayne Rooney"
	},
	{
	    question: "Which country won the 2010 African cup of nations?",//question
	    correctAnswer: "Egypt",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Egypt",
	    answer1: "Cameroon",
	    answer2: "Ghana",
        answer3: "Nigeria"
	},
	{
	    question: "German footballer, Olliver Khan, played in which position?",//question
	    correctAnswer: "Goalkeeper",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Striker",
	    answer1: "Right back",
	    answer2: "Centre midfield",
        answer3: "Goalkeeper"
	},
	{
	    question: "Which English football team won the 2011 FA cup?",//question
	    correctAnswer: "Manchester city",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Sunderland",
	    answer1: "Liverpool",
	    answer2: "Man Utd",
        answer3: "Manchester city"
	},
	{
	    question: "Who were the first Welsh team to win the Premier League?",//question
	    correctAnswer: "Swansea city",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Cardiff city",
	    answer1: "Swansea city",
	    answer2: "Newport county",
        answer3: "Wrexham"
	},
	{
	    question: "Who is the all time leading goal scorer in the Premier league?",//question
	    correctAnswer: "Alan Shearer",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Alan Shearer",
	    answer1: "Theirry Henry",
	    answer2: "Wayne Rooney",
        answer3: "Michael Owen"
	},
	{
	    question: "Which Premier league football club are known as 'The Cherries'?",//question
	    correctAnswer: "A.F.C Bournemouth",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Liverpool",
	    answer1: "Everton",
	    answer2: "Leicster city",
        answer3: "A.F.C Bournemouth"
	},
	{
	    question: "At which stadium are all of the English Cup Final matches played?",//question
	    correctAnswer: "Wembly stadium",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Emerates stadium",
	    answer1: "old Trafford",
	    answer2: "Anfield",
        answer3: "Wembly stadium"
	},
	{
	    question: "Which footballer won the African Fotballer of the year award in four consecutive seasons?",//question
	    correctAnswer: "Yaya Toure",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Riyad Mahrez",
	    answer1: "Yaya Toure",
	    answer2: "Samuel Eto",
        answer3: "Didier Drogba"
	},
	{
	    question: "Who was the Chelsea manager between june 2004 and 2007?",//question
	    correctAnswer: "Jose Mourinho",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Antonio Conte",
	    answer1: "Roberto Di Matteo",
	    answer2: "John Tait Robertson",
        answer3: "Jose Mourinho"
	},
	{
	    question: "Thierry Henry made his professional debut for which club?",//question
	    correctAnswer: "Monaco",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Arsenal",
	    answer1: "Juventus",
	    answer2: "Barcelona",
        answer3: "Monaco"
	},
	{
	    question: "Which spanish side was named Fifa's Club of the Century in 2000?",//question
	    correctAnswer: "Real Madrid",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Athletico Madrid",
	    answer1: "Barcelona",
	    answer2: "Real Madrid",
        answer3: "Valencia"
	},
	{
	    question: "Gary Nevill Managed which laliga side?",//question
	    correctAnswer: "Valencia",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Sevilla",
	    answer1: "Valencia",
	    answer2: "Athletico Bilbao",
        answer3: "Las Palmas"
	},
	{
	    question: "Who is the Premier leagues all time assit maker?",//question
	    correctAnswer: "Ryan Giggs",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Steven Gerrard",
	    answer1: "Ryan Giggs",
	    answer2: "Frank Lampard",
        answer3: "Thierry Henry"
	},
    {
	    question: "Who is the last english club to win the Champions league?",//question
	    correctAnswer: "Chelsea",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Arsenal",
	    answer1: "Liverpool",
	    answer2: "Chelsea",
        answer3: "Man utd"
	},
	{
	    question: "Which Premier league side were crowned champions 13 times?",//question
	    correctAnswer: "Man Utd",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Man Utd",
	    answer1: "Liverpool",
	    answer2: "Manchester City",
        answer3: "Arsenal"
	},
    {
	    question: "Who is the all time leading Champions league goal scorer?",//question
	    correctAnswer: "Cristiano Ronaldo",//right answer to question
        
        //list of multiple choice answers
	    answer0: "1Lionel Messi",
	    answer1: "Kaka",
	    answer2: "Ruud van Nistelrooy",
        answer3: "Cristiano Ronaldo"
	},
    {
	    question: "Who won the 2016 Uefa European cup?",//question
	    correctAnswer: "Portugal",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Portugal",
	    answer1: "England",
	    answer2: "France",
        answer3: "Brazil"
	}
];

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

//Above I have set my questions, 3 multi-choice answers and the answers in an multi-dimensional array, zero indexed
function _(x)
{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0; 
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);