const questions = [

    {
        question: "Which of the following is incorrect regarding incident dose (ID)",
        optionA: "It is the air kerma on the x-ray beam axis at the focus to skin distance (FSD) without the patient present",
        optionB: "The ID includes back-scattered radiation from the patient.",
        optionC: "The magnitude of the ID increases as the distance from the focus of the x-ray tube to the patient surface (FSD) is reduced.",
        optionD: "For the x-ray energies used in interventional procedures, the air kerma is numerically equal to the absorbed dose in air",
        correctOption: "optionB",
        explanation:"For interventional X-ray units, the air kerma (ID) can be calculated at the designated reference point. For instance, in a C-arm X-ray unit, the reference point is typically located 15 cm away from the center of the isocenter, towards the focus of the central beam."
    },

    {
        question: "In automatic mode fluoroscopy, the patient entrance surface dose rate",
        optionA: "usually increases with image intensifier field size.",
        optionB: "depends on the added filtration.",
        optionC: "is independent of the kV-mA characteristic used.",
        optionD: "doubles if the patient-intensifier face distance is halved.",
        correctOption: "optionB",
        explanation:"Added filtration can reduce the patient’s entrance surface dose. In addition, enhance image quality by absorbing the lower energy x-ray photons emitted by the tube that tend to scatter more."
    },

    {
        question: "Which of the following is incorrect regarding entrance surface dose (ESD) ?",
        optionA: "It is the absorbed dose in the skin at a given location on the patient.",
        optionB: "It includes the back-scattered radiation from the patient.",
        optionC: "It can be measured directly with a dosimeter on the patient or by multiplying the incident dose with a backscatter factor",
        optionD: "The magnitude of the ESD decreases as the focus to skin distance (FSD) is reduced",
        correctOption: "optionD",
        explanation:"The unit for ESD is the Gy. To determine the ESD, small dosimeters such as TLD or semiconductor dosimeters can be placed at various points on the patient's skin to provide representative readings. It's important to regularly calibrate all dosimeters and dose calculation programs."
    },

    {
        question: "A 'passive' personal dosimeter such as a film badge or 'TLD' will:",
        optionA: "Help protect you from the radiation and reduce the dose you receive.",
        optionB: "Absorb the radiation and become radioactive.",
        optionC: "Flash or alarm when the dose limit has been exceeded.",
        optionD: "Measure the dose you receive.",
        correctOption: "optionD",
        explanation:"To monitor doses to the skin, hands and feet, and the lens of the eyes of the interventionist, special dosimeters (e.g. ring dosimeter) should be used. TLD’s and new semiconductor dosimeters are available."
    },

    {
        question: "Which type of personnel radiation monitor can provide an immediate reading ?",
        optionA: "Film Badge",
        optionB: "Pocket ionization chamber",
        optionC: "TLD dosimeter",
        optionD: "OSL dosimeter",
        correctOption: "optionB",
        explanation:"The Direct Read Pocket Dosimeter is a frequently used type of pocket dosimeter that is reusable and provides real-time measurement of radiation exposure. Unlike other dosimeters such as TLD and OSL, it gives an immediate reading of an individual’s radiation exposure. The Direct Read Pocket Dosimeter can also be programmed to alert users when high radiation levels are detected. As it is self-read, the dosimeter provides an instant display of the measurement. While it is not capable of storing data, the device can be connected to software for configuration. This software can be used to receive and store radiation exposure readings."
    },

    {
        question: "Which of the following are true regarding dosimetry ?",
        optionA: "Kerma takes into account the type of tissue being irradiated.",
        optionB: "The equivalent dose takes into account the radiation weighting factor (wR).",
        optionC: "The effective dose is measured in Gy.",
        optionD: "1 Gy =1 J/g",
        correctOption: "optionB",
        explanation:"Kerma is the kinetic energy of the secondary electrons released per unit mass of the irradiated material. It is not depend on the type of tissue being irradiated.   Equivalent dose is absorbed dose multiply by radiation weighting factor (wR). It takes into account the absorbed dose and the type of radiation. For x rays used in interventional procedures the weighting factor is 1. The effective dose is measured in Sv."
    },

    {
        question: "Regarding workers and dose limits:",
        optionA: "The dose limit for carers is the same as for the public.",
        optionB: "Trainees under the age of 18 must not receive an effective dose of more than 6 Sv.",
        optionC: "Workers must be defined as classified if their annual dose limit exceeds 20 mSv.",
        optionD: "Classified workers must be over 18 years of age.",
        correctOption: "optionD",
        explanation:"The dose limit for carers, who are willingly exposed, is more relaxed than the limits set for the public. Trainees under the age of 18 should not receive a dose more than 6 mSv. Workers are defined as classified if their annual dose limit exceeds 6 mSv. The effective dose limit for classified workers is 20 mSv."
    },

    {
        question: "Regarding a patient's dose and the dose area product (DAP), which of the following statements are correct ?",
        optionA: "The DAP can easily be measured and is directly related to the radiation risk.",
        optionB: "The DAP can be converted to the absorbed dose using a conversion factor.",
        optionC: "For the same region of the body, the conversion factor is the same for anterior-posterior (AP) and posterior-anterior (PA) views.",
        optionD: "The entrance surface dose in the lateral spine view is more than that of the AP view.",
        correctOption: "optionD",
        explanation:"The DAP is not directly related to the radiation risk. Using a conversion factor the DAP can be converted to the effective dose. The conversion factors for PA view are less than AP view because generally the organs and tissues with higher weighting factors are located anteriorly. The entrance surface dose in the lateral spine view could be around 10 mGy, while it is only around 4.3 mGy in the AP view."
    },

    {
        question: "The dose-area-product (DAP) can be measured",
        optionA: "using specially designed TLDs mounted at the collimator system",
        optionB: "using specially designed ionisation chambers mounted at the collimator system",
        optionC: "using specially designed Geiger counter mounted at the collimator system",
        optionD: "none of these",
        correctOption: "optionB",
        explanation:"If the x-ray unit is a modern digital system, DAP can be calculated using data for the generator and the digital recorded jaw positions. The DAP can be determined routinely without interfering with the interventional procedure if the appropriate monitoring devices have been installed on the x-ray equipment."
    },

    {
        question: "The cumulative dose-area-product (DAP) can be expressed as _______",
        optionA: "Gy x cm^2",
        optionB: "Gy x cm",
        optionC: "Gy",
        optionD: "Gy x cm^3",
        correctOption: "optionA",
        explanation:"DAP can be helpful in dose control for stochastic effects to patients and operators, but is not a practical method for estimating maximum cumulative absorbed dose to skin or useful for predicting deterministic effects."
    },

    {
        question: "Regarding dose limits:",
        optionA: "The annual dose limit to the abdomen of women of reproductive capacity is 13 mSv.",
        optionB: "The dose limit for the abdomen over the period of pregnancy for a pregnant employee working with diagnostic X-rays is 1 mSv.",
        optionC: "The annual dose limit for the forearm in employees is ten times more than in members of the public.",
        optionD: "The dose limit for the lens of the eye for an employee is 500 mSv per year.",
        correctOption: "optionC",
        explanation:"The dose limit in 3 consecutive months is 13 mSv. The fetus dose limit is 1 mSv and it is no greater than 50% of the dose on the surface of the abdomen thus, the dose limit for the abdomen could be around 2 mSv. The annual dose limit for the forearm in employees is 500 mSv and 50 mSv for the public. The dose limit for the lens of the eye for an employee is 20 mSv per year or 100 mSv per 5-year period (maximum 50 mSv per year)."
    },

    {
        question: "In terms of classification of staff and designated areas, which of the following are true ?",
        optionA: "If an employee works in a controlled area, his external dose rate could be less than 7.5 μSv/h averaged over the working day.",
        optionB: "If an employee works in a controlled area, it means that the dose to the lens of his eyes could be more than 5 mSv.",
        optionC: "In a supervised area, it is likely that any person could not exceed the dose limit for a member of the public.",
        optionD: "99% of the staff in the radiology department do not exceed the dose limit of a member of the public in any year.",
        correctOption: "optionD",
        explanation:"In a controlled area the dose rate could exceed 7.5 μSv/h, while in a supervised area the dose rate is between 2.5 and 7.5 μSv/h. In a controlled area the dose to the lens of his eyes could be more than 15 mSv. Less than 1% of the workers in the radiology department received a dose greater than 1 mSv in one year."
    },

    {
        question: "What type of device is used to monitor individuals in order to determine their radiation exposure ?",
        optionA: "thermoluminescent dosimeters (TLDs) ",
        optionB: "Geiger counter",
        optionC: "Alarm rate meter",
        optionD: "Ionization chambers",
        correctOption: "optionA",
        explanation:"TLD is a passive device used for personal dose monitoring. TLDs are used for measuring gamma, x-ray, and beta radiation exposures. They can be worn as rings or body badges. "
    },

    {
        question: "Effective dose can be expressed as:",
        optionA: "Gray",
        optionB: "Sievert",
        optionC: "J/kg",
        optionD: "Curie",
        correctOption: "optionB",
        explanation:"It is an indicator of the increase in probability for stochastic effects later in life for a population exposed to the given levels."
    },

    {
        question: "What is the recommended amount of radiation exposure for occupational workers in a year ?",
        optionA: "1 millisievert (mSv)",
        optionB: "20 mSv",
        optionC: "50 mSv",
        optionD: "100 mSv",
        correctOption: "optionB",
        explanation:"Dose limit for the whole body is 20 mSv per year or 100 mSv per 5-year period (maximum 50 mSv per year)."
    },

    
    {
        question: "What is the annual dose-limit equivalent for the skin and hands of an occupationally exposed individual ?",
        optionA: "20 millisievert (mSv)",
        optionB: "50 mSv",
        optionC: "500 mSv",
        optionD: "150 mSv",
        correctOption: "optionC",
        explanation:"Different limits apply for different parts of the body and for different individuals."
    },

    {
        question: "What is the annual dose-limit equivalent for the eye lens of an occupationally exposed individual ?",
        optionA: "20 millisievert (mSv)",
        optionB: "50 mSv",
        optionC: "500 mSv",
        optionD: "150 mSv",
        correctOption: "optionA",
        explanation:"The ICRP in 2011 recommended the lowering of the annual eye lens dose limit from 150 mSv/year to 20 mSv/year in order to reduce the risk of X-ray-induced lens opacity in medical staff."
    },

    {
        question: "Fluoroscopy procedure requires 2.5 minutes at 90 kVp, 2 mA. What is the approximate ESD if the average dose rate is 40 mGy/min?",
        optionA: "80 mGy",
        optionB: "100 mGy",
        optionC: "150 mGy",
        optionD: "200 mGy",
        correctOption: "optionB",
        explanation:"In a scenario where the X-ray beam remains in the same position for 2.5 minutes, the absorbed dose to the skin within the beam area can be calculated by multiplying the dose rate (measured in mGy/min) with the duration of exposure. It should be noted that the dose rate can vary significantly depending on factors such as patient size, kV, and the magnification mode utilized."
    },

    {
        question: "How often should dosimeters be read and evaluated for radiation exposure ?",
        optionA: "Every 3 months ",
        optionB: "Every 6 months",
        optionC: "Every year",
        optionD: "Every 2 years",
        correctOption: "optionA",
        explanation:"All personnel dosimeters must be evaluated at least quarterly or promptly after replacement, whichever is more frequent."
    },

    {
        question: "What is the approximate radiation exposure at a distance of 1 meter from the patient if the entrance dose for a particular exam is 1200 mGy ?",
        optionA: "1200 mGy",
        optionB: "120 mGy",
        optionC: "1.20 mGy",
        optionD: "20 mGy",
        correctOption: "optionC",
        explanation:"During fluoroscopy, radiation scatters in all directions from the patient and the patient becomes the major source of scattered radiation. The scattered radiation intensity at a distance of 1 meter from the patient is approximately 0.1% of the entrance dose. Therefore, if the entrance dose of an image is 1200 mGy, the scattered radiation intensity at 1 meter from the patient is calculated as 0.1% of the entrance dose, which is 1.20 mGy (0.001 x 1200 = 1.20 mGy).(Bushong, 8th ed., p. 572)"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 20 questions to shuffledQuestions array
//app would be dealing with 20 questions per session
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("display-explanation").innerHTML = currentQuestion.explanation;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                document.getElementById('explanation-modal').style.display = "flex"
                questionNumber++
            }, 300)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                document.getElementById('explanation-modal').style.display = "flex"
                questionNumber++
            }, 300)
        }
    })
}

function SubmitAnswer() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    disableSubmitButton()
}


//called when the next button is called
function handleNextQuestion() {
    unCheckRadioButtons()
    undisableSubmitButton()
        if (indexNumber <= 19) {
//displays next question as long as index number isn't greater than 19, remember index number starts from 0, so index 19 is question 20
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 19 meaning we're already at the 20th question
        }
        resetOptionBackground() 
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function disableSubmitButton() {
    // capturing the button using its id
    const button1 = document.getElementById("disable");
    // function to disable the button
    button1.disabled = true;
}

function undisableSubmitButton() {
    // capturing the button using its id
    const button1 = document.getElementById("disable");
    button1.disabled = false;
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 9) {
        remark = "Inadequate knowledge, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 10 && playerScore < 17) {
        remark = "Average knowledge, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 17) {
        remark = "Excellent, You have adequate knowledge."
        remarkColor = "green"
    }
    const playerGrade = ((playerScore / 20) * 100).toFixed(2); // Round the grade to two decimal places

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

    // Show the "Show Questions and Answers" button
    document.getElementById('show-questions-btn').style.display = "block";

    // Retrieve existing grades from local storage
    var storedGrades = localStorage.getItem('grades');
    var grades = [];

    if (storedGrades) {
    // If grades exist in local storage, parse the JSON string to an array
    grades = JSON.parse(storedGrades);
    }

    // Add the current player grade to the grades array
    grades.push(playerGrade);

    // Save the updated grades array to local storage
    localStorage.setItem('grades', JSON.stringify(grades));

    const quizName = "Dose quantities";

    // Retrieve existing data from local storage
    var storedQuizNames = localStorage.getItem('quizNames');
    
    var quizNames = [];

    if (storedQuizNames) {
        quizNames = JSON.parse(storedQuizNames);
    }
    
    // Add the current data to the array
    quizNames.push(quizName);
    // Save the updated array to local storage
    localStorage.setItem('quizNames', JSON.stringify(quizNames));

}

function showQuestions() {

    // Create a variable to store the HTML markup of the questions and answers
    let questionsAndAnswers = "";

    // Loop through the shuffledQuestions array to generate the markup
    for (let i = 0; i < shuffledQuestions.length; i++) {
        const question = shuffledQuestions[i];
        questionsAndAnswers += `<p class="question">${i + 1}. ${question.question}</p>`;
        questionsAndAnswers += `<li class="option">OptionA: ${question.optionA}</li>`;
        questionsAndAnswers += `<li class="option">OptionB: ${question.optionB}</li>`;
        questionsAndAnswers += `<li class="option">OptionC: ${question.optionC}</li>`;
        questionsAndAnswers += `<li class="option">OptionD: ${question.optionD}</li>`;
        questionsAndAnswers += `<p class="answer">Answer: ${question[question.correctOption]}</p>`;
        questionsAndAnswers += `<p class="explanation">Explanation: ${question.explanation}</p>`;
        questionsAndAnswers += "<hr>";
    }

    // Display the questions and answers in a modal
    // Here's the SweetAlert library:
    Swal.fire({
        title: "Questions and Answers",
        html: questionsAndAnswers,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: {
            container: 'questions-modal-container'
        }
    });
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
    undisableSubmitButton()
}

//function to close explanation modal
function closeExplanationModal() {
    document.getElementById('explanation-modal').style.display = "none"
}