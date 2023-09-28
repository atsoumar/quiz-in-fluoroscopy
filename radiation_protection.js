const questions = [

    {
        question: "You are concerned about the radiation levels around an x-ray set. What should you do first ?",
        optionA: "Put a barrier around the area and mark with a warning sign.",
        optionB: "Place it in a lead box.",
        optionC: "If it is safe to do so, turn the x-ray set off.",
        optionD: "Make a radiation measurement",
        correctOption: "optionC",
        explanation:"The appropriate course of action to take in the event of an unsafe X-ray set is to immediately turn it off and disconnect it from the electrical supply. If this cannot be done safely, a measurement should be taken and a barrier should be placed around the set until the electricity supply can be safely terminated, for example, by switching off the power supply through a fuse box. It is important to note that an X-ray set can only generate X-rays when it is connected to an electrical supply. "
    },

    {
        question: "You can reduce your exposure to radiation by doing the following:",
        optionA: "Increasing your distance from the source.",
        optionB: "Decreasing the amount of time near the source.",
        optionC: "Provide shielding between yourself and the source.",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"Time: Reducing the time of exposure can directly reduce radiation dose. <br> Distance: Increasing the distance between the operator and the radiation source, will reduce exposure by the square of the distance. Placing yourself one foot further (or more) from the patient will reduce the amount of radiation you are exposed to.<br> Shielding: lead aprons, thyroid collar, glasses, lead barriers, mobile lead, table curtains and Ceiling-suspended shields."
    },
    
    {
        question: "Which of the following will increase patient dose during fluoroscopy ?",
        optionA: "Decreasing the SSD",
        optionB: "Using 2.5 mm Al filtration",
        optionC: "Restricting tabletop intensity to less than 100 mGy/min",
        optionD: "All of these",
        correctOption: "optionA",
        explanation:"To decrease the patient's radiation dose, increasing the SSD is recommended. The minimum required SSD is specified by law to be at least 38 cm for fixed fluoroscopic equipment and 30 cm for mobile fluoroscopic equipment. The use of 2.5-mm-Al-equivalent filtration is also mandated by law in equipment operating above 70 kVp to decrease the patient's skin dose. The tabletop intensity is also regulated by law, and it should not exceed 100 mGy/min."
    },

    {
        question: "What are the required details that must be included in personal radiation monitoring reports ?",
        optionA: "Radiation quality",
        optionB: "Dosimeter type",
        optionC: "Dose equivalents for report period",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"Required information that must be included in personal radiation monitor reports typically includes the individual's personal information. The type of monitor used, such as film badge, TLD, or OSL dosimeter, as well as the type of radiation quality and the dose equivalent for the exposure, including deep, eye, and shallow dose equivalents, should also be included."
    },

    {
        question: "What is the leakage radiation limit for x-ray tubes at 1 meter from the tube housing ?",
        optionA: "50 milliroentgens/hour",
        optionB: "100 mR/h",
        optionC: "150 mR/h",
        optionD: "200 mR/h",
        correctOption: "optionB",
        explanation:"This is equal to 0.88 milligray per hour (mGy/h). The highest level of leakage radiation is produced when the X-ray tube operates at its maximum tube voltage and at a continuous tube current."
    },

    {
        question: "In accordance with the principle of ‘As Low As Reasonably Achievable’ (ALARA) for radiation safety in medical practice, changing which ONE of the following variables will reduce radiation exposure ?",
        optionA: "Increasing the distance between the patient and the operating theatre door.",
        optionB: "Decreasing the distance between the patient and the x-ray detector.",
        optionC: "Decreasing the distance between the x-ray source and the patient.",
        optionD: "Decreasing the distance between the x-ray source and the operator.",
        correctOption: "optionB",
        explanation:"The strength of the X-ray beam is inversely proportional to the square of distance from the source. So, decreasing the distance between the patient and the detector leads to an increase in the distance between the patient and the source. Also reduces scatter radiation to the operator."
    },

    {
        question: "When the distance from the source of radiation is doubled, the amount of radiation received by the operator will be ?",
        optionA: "Doubled",
        optionB: "The same",
        optionC: "Reduced by 1/2",
        optionD: "Reduced by 3/4",
        correctOption: "optionD",
        explanation:"The strength of the X-ray beam is inversely proportional to the square of distance from the source. Doubling the distance between the operator and the radiation source will reduce radiation exposure by a factor of 4."
    },

    {
        question: "During  a fluoroscopy, a staff member wears personal protective clothing which of the following offers the best protection ?",
        optionA: "an apron with a thickness of 0.25 lead-equivalent without a thyroid collar.",
        optionB: "an apron with a thickness of 0.25 lead-equivalent and a thyroid collar.",
        optionC: "an apron with a thickness of 0.35 lead-equivalent without a thyroid collar.",
        optionD: "an apron with a thickness of 0.35 lead-equivalent and a thyroid collar.",
        correctOption: "optionD",
        explanation:"Thicker aprons are usually more protective but heavier. An apron with 0.5-mm thickness can attenuate approximately 90% or more of the scatter radiation. The thyroid is a very radiosensitive organ, but the design of aprons does not shield the thyroid, so the use of a thyroid collar is necessary."
    },

    {
        question: "Which radiation source in the catheterization laboratory setting contributes most to the annual effective dose of the operator ?",
        optionA: "direct radiation",
        optionB: "scatter radiation",
        optionC: "neither direct radiation nor scatter radiation",
        optionD: "both direct radiation and scatter radiation",
        correctOption: "optionB",
        explanation:"The operators are not at risk from the primary x-ray beam unless they put their hands in the x-ray irradiation. The leakage from the x-ray tube is not large enough to affect the operator. The major factor in radiation exposure is how close the operator is to the patient during the procedure. They are easily exposed to scatter radiation produced by the primary beam interacting with patient’s body."
    },

    {
        question: "An x-ray safety interlock:",
        optionA: "is a key switch that ensures that only authorized key-carrying personnel can operate the machine.",
        optionB: "is an alarm system on the x-ray room.",
        optionC: "is a special hook that holds the sample in place so that the reflected x-rays are directed away from the operator.",
        optionD: "is a switch or switches that cut power to the x-ray when the shielding doors are opened even slightly.",
        correctOption: "optionD",
        explanation:"An interlock switch prevent the application of electrical power to an X-ray unit when the door is opened."
    },

    {
        question: "Which of the following factors must be studied when determining the thickness requirements for protective barriers ?",
        optionA: "Distance from the x-ray source to the barrier.",
        optionB: "Who will occupy the area on the other side of the barrier.",
        optionC: "What type of radiation procedures will be done in the area.",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"If the area on the other side of the barrier will be occupied by the general public, then the protection must be higher than if it was occupied by radiation workers. "
    },

    {
        question: "When checking the safety of protective apron with a calibrated test object on a cassette, which of the following is correct ?",
        optionA: "The test object is darker than the apron.",
        optionB: "The test object is lighter than the apron.",
        optionC: "The apron should not be visualized.",
        optionD: "The test object should not be visualized.",
        correctOption: "optionA",
        explanation:"The apron must be lighter than the test object to consider it safe. If it was darker, it would mean it was letting to much radiation through."
    },

    {
        question: "What is the best method to check for any damage in lead aprons ?",
        optionA: "Only visually check for any visible damage.",
        optionB: "First visually check for any visible damage and If the apron is found to be suspect, only then it should be inspected fluoroscopically.",
        optionC: "It should only be inspected fluoroscopically.",
        optionD: "You should never check lead aprons.",
        correctOption: "optionB",
        explanation:"A recommended method for routine inspection of lead aprons is to first place them on a flat surface and visually inspect all seams, inner and outer covers for any visible damage. Check the belts and fasteners to ensure they are in good condition. Next, feel the surface of the apron with your hands to check for lumps, cracks, or separation from the seams. If the apron passes this initial inspection, it is likely in good condition and can be returned to use. However, if the apron is suspected to have damage, a fluoroscopic inspection can be performed in manual mode with the highest kVp and low mA settings to protect the x-ray tube and reduce dose to the person conducting the inspection. Only inspect the suspected areas. Shielded areas will appear dark and defects, seams and stitching will appear light."
    },

    {
        question: "Which of the following methods have the lowest patient's radiation exposure ?",
        optionA: "continuous fluoroscopy",
        optionB: "pulsed fluoroscopy of 15 pulses/second",
        optionC: "pulsed fluoroscopy of 10 pulses/ second",
        optionD: "pulsed fluoroscopy of 7.5 pulses/ second",
        correctOption: "optionD",
        explanation:"30 frames per sec (real time) = same dose as continuous fluoro. The lowest fluoroscopy pulse rate has the lowest fluoroscopy radiation dose. Use pulsed fluoroscopy with the lowest frame rate possible to obtain images of acceptable quality."
    },

    {
        question: "Which of the following is the best method to minimize staff's radiation exposure in a mobile C-arm ?",
        optionA: "personnel stands on the side of the image receptor with x-ray tube under the table.",
        optionB: "personnel stands away from the image receptor with x-ray tube under the table.",
        optionC: "x-ray tube is over the table next to the operator.",
        optionD: "x- ray tube is over the table away from the operator.",
        correctOption: "optionA",
        explanation:"Studies have indicated that scattered radiation from a patient's body is more intense on the entrance side of an X-ray beam, where the X-ray tube is located. Typically, only a small percentage of the radiation (around 1% to 5%) that is directed towards the patient's body exits on the other side. Therefore, standing on the side where the X-ray beam is transmitted results in exposure to scattered radiation that corresponds to only a small fraction (1% to 5%) of the intensity of the incident beam."
    },

    {
        question: "Which of the following is a recommended way to reduce staff doses in fluoroscopy ?",
        optionA: "Increase exposure time",
        optionB: "Decrease the distance from the radiation source",
        optionC: "Use a lower dose rate",
        optionD: "None of the above",
        correctOption: "optionC",
        explanation:"The lower fluoroscopy pulse rate, the lower radiation staff's doses."
    },

    {
        question: "What is the inverse square law?",
        optionA: "A law stating that the dose of radiation received by an object is inversely proportional to the distance squared between the object and the radiation source.",
        optionB: "A law stating that the dose of radiation received by an object is directly proportional to the distance squared between the object and the radiation source.",
        optionC: "A law stating that the dose of radiation received by an object is inversely proportional to the distance between the object and the radiation source.",
        optionD: "A law stating that the dose of radiation received by an object is directly proportional to the distance between the object and the radiation source.",
        correctOption: "optionA",
        explanation:"Radiation exposure is inversely proportional to the square of distance from the source."
    },

    {
        question: "Regarding the magnification mode which of the following have the least effect on patient exposure ?",
        optionA: "Field of view, diameter 32 cm",
        optionB: "Field of view, diameter 25 cm",
        optionC: "Field of view, diameter 16 cm",
        optionD: "Field of view, diameter 12 cm",
        correctOption: "optionA",
        explanation:"Decreasing the field of view by a factor of two increases the dose rate by a factor of four. Avoid the use of magnification."
    },

    {
        question: "Concerning radiation protection of patients in fluoroscopy which of the following is false ?",
        optionA: "Use collimation of the x-ray beam to the area of interest.",
        optionB: "Avoid exposing the same area of the skin in different projections.",
        optionC: "Larger patients or thicker body parts trigger an increase in entrance surface dose.",
        optionD: "Oblique projections decrease entrance surface dose.",
        correctOption: "optionD",
        explanation:"Limiting the size of the X-ray beam through collimation is an essential aspect of exposure management. Modifying the beam entrance port by rotating the tube around the patient can also help to prevent radiation injuries to the skin. When patient thickness increases from 16 to 24 cm, the scatter dose rate may increase by a factor of 5. Oblique views increase the entrance surface dose, resulting in more scatter radiation."
    },

    {
        question: "What should be done if a patient reports feeling nauseous or dizzy during a fluoroscopy procedure ?",
        optionA: "Stop the procedure immediately and provide care.",
        optionB: "Continue the procedure until completion, then provide care.",
        optionC: "Ask the patient to hold still and finish the procedure quickly.",
        optionD: "None of the above",
        correctOption: "optionA",
        explanation:"The patient should be your major concern. Turn off the x-ray tube and take care of the patient."
    },

    {
        question: "Which is the proper way to wear your dosimeter during fluoroscopy ?",
        optionA: "Only a whole body badge under the protective lead apron between the chest and waist.",
        optionB: "Only a collar badge outside lead apron near the neck.",
        optionC: "A collar badge outside the lead apron near the neck and a whole body badge outside the lead apron between the chest and waist.",
        optionD: "A collar badge outside the lead apron near the neck and a whole body badge under the lead apron between the chest and waist.",
        correctOption: "optionD",
        explanation:"It is important to wear badges correctly. Wearing a badge incorrectly will not provide an accurate measure of your radiation exposure. Doses in departments should be analysed and high doses and outliers should be investigated"
    },

    {
        question: "Which of the following is true regarding the use of radiation-shielding equipment?",
        optionA: "The use of radiation-shielding equipment eliminates the need for other radiation safety measures",
        optionB: "The use of radiation-shielding equipment is not necessary for staff during fluoroscopy procedures",
        optionC: "The use of radiation-shielding equipment should be part of a comprehensive radiation safety program",
        optionD: "The use of radiation-shielding equipment can increase the risk of damage during the procedure",
        correctOption: "optionC",
        explanation:"Staff should therefore be encouraged to wear and use the protective devices available, where appropriate."
    },

    {
        question: "Which of the following is an important factor to consider when selecting radiation-shielding equipment ?",
        optionA: "The cost of the equipment",
        optionB: "The weight and comfort of the equipment",
        optionC: "The color of the equipment",
        optionD: "The size of the equipment",
        correctOption: "optionB",
        explanation:"Many medical professionals are required to stand for extended periods of time and use specialized equipment and treatments. However, the use of heavy or rigid protective clothing can have a significant impact on their energy levels, functionality, and overall productivity."
    },

    {
        question: "Which of the following is incorrect as far as the usage of radiation protection gloves ?",
        optionA: "Radiation protection gloves can only offer protection from scattered radiation.",
        optionB: "Radiation protection gloves can only offer protection from primary radiation.",
        optionC: "Keep hands outside the primary beam as much as clinically possible.",
        optionD: "The patient and staff doses are increased more when the clinician wears radiation protection gloves and places the hands in the primary beam.",
        correctOption: "optionB",
        explanation:"If a clinician's hand enters the primary beam during an x-ray procedure, the amount of scattered radiation increases, resulting in higher dose rates to both the staff and patient's entrance surface. Wearing gloves can cause additional attenuation of the x-ray beam, increasing the intensity of the beam and the dose received by the patient and staff."
    },

    {
        question: "If the beam is near vertical in a mobile C-arm what should be the proper placement for the x-ray tube to reduce dose to staff ?",
        optionA: "the x-ray tube should be over the patient.",
        optionB: "the x-ray tube should be under the patient.",
        optionC: "Both methods reduce dose to staff by the same factor",
        optionD: "none of these",
        correctOption: "optionB",
        explanation:"Placing the tube over the patient increases operator dose from patient backscatter."
    },

    {
        question: "If the x-ray tube is near horizontal in a mobile C-arm what should be the appropriate position for the operator to reduce dose ?",
        optionA: "the operator should stand on the image intensifier side",
        optionB: "the operator should stand on the x-ray tube side",
        optionC: "both ways results in equal reduction to operator's dose",
        optionD: "none of these",
        correctOption: "optionA",
        explanation:"Standing on the tube side increases operator dose from patient backscatter."
    },

    {
        question: "Records of exposure should be kept if the estimated maximum cumulative dose to skin of the patient is",
        optionA: "3 Gy or above (1 Gy or above for procedures likely to be repeated)",
        optionB: "2 Gy or above (1 Gy or above for procedures likely to be repeated)",
        optionC: "1 Gy or above (0.5 Gy or above for procedures likely to be repeated)",
        optionD: "none of these",
        correctOption: "optionA",
        explanation:"The reason for choosing this level of 3 Gy (1Gy) is that repeated procedures will cause serious skin effects from the cumulative dose. The annotated body map should be placed in the patient’s notes."
    },

    {
        question: "For patients who are estimated to have received a skin dose of 3 Gy or higher, it is recommended that the healthcare provider schedule a follow-up review for the patient",
        optionA: "within 2 to 3 days after the procedure.",
        optionB: "within 2 to 3 months after the procedure",
        optionC: "within 10 to 14 days after the procedure.",
        optionD: "none of these",
        correctOption: "optionC",
        explanation:"The primary aim of this follow-up review is to assess the patient for any potential skin effects, particularly erythema, which can indicate more severe and long-term damage, depending on its onset. If such effects are observed, it is recommended that the patient be referred to a dermatologist with comprehensive information on the interventional procedure and estimated skin doses."
    },

    {
        question: "What is the purpose of protective curtains on a fluoroscopic unit ?",
        optionA: "Shield operator from primary radiation.",
        optionB: "Shield operator from scatter radiation.",
        optionC: "Shield operator from leakage radiation.",
        optionD: "Prevent backscatter radiation.",
        correctOption: "optionB",
        explanation:"Leaded screen curtains and table side shields must be used to minimize over-table scatter radiation from reaching the operator."
    },

    {
        question: "Which imaging modality is typically associated with the lowest radiation dose to the patient ?",
        optionA: "Decreasing kilovoltage by 15% and doubling the milliampere-seconds value",
        optionB: "Increasing kilovoltage by 15% and cutting the milliampere-seconds value in half",
        optionC: "Changing collimation from 10 × 12 to 14 × 17",
        optionD: "Changing from an 8:1 grid technique to non-grid",
        correctOption: "optionD",
        explanation:"Removing a grid can result in a significant decrease in patient dose. Converting from an 8:1 grid to non-grid can achieve this by reducing milliampere-seconds by about four times. Increasing the kilovoltage by 15% and cutting the milliampere-seconds in half would reduce patient dose by half. Doubling the milliampere-seconds will double the patient dose. Changing collimation from 10 × 12 to 14 × 17 will also increase the patient dose."
    },

    {
        question: "Which of the following is incorrect as far as accidental radiation exposure to pregnant patients ?",
        optionA: "Using precise collimated beams",
        optionB: "Using lead shielding for the patient's reproductive organs and the fetus",
        optionC: "Use low kVp technique.",
        optionD: "If estimated dose exceeds 10 mGy, a more complete dosimetric evaluation should be performed",
        correctOption: "optionC",
        explanation:"All female patients of childbearing age should be asked if they are pregnant or could be pregnant before undergoing any imaging exams that involve ionizing radiation. If there is any suspicion or uncertainty, a pregnancy test should be performed before proceeding with the exam."
    }


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 30 out of 31 questions to shuffledQuestions array
//app would be dealing with 30 questions per session
    while (shuffledQuestions.length <= 29) {
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

//called when submit button is called
function SubmitAnswer() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    disableSubmitButton()
}


//called when the next button is called
function handleNextQuestion() {
    unCheckRadioButtons()
    undisableSubmitButton()
        if (indexNumber <= 29) {
//displays next question as long as index number isn't greater than 29, remember index number starts from 0, so index 29 is question 30
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 29 meaning we're already at the 30th question
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
    if (playerScore <= 14) {
        remark = "Inadequate knowledge, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 15 && playerScore < 26) {
        remark = "Average knowledge, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 26) {
        remark = "Excellent, You have adequate knowledge."
        remarkColor = "green"
    }
    const playerGrade = ((playerScore / 30) * 100).toFixed(2); // Round the grade to two decimal places

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

    const quizName = "Radiation protection";

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