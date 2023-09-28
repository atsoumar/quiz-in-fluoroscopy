//Here we have the list of questions used in this quiz
const questions = [
    {
        question: "Which of the following is most responsible for fluoroscopy ?",
        optionA: "Proton",
        optionB: "Neutron",
        optionC: "Gamma ray",
        optionD: "X-ray",
        correctOption: "optionD",
        explanation:"Fluoroscopy involves the use of X-rays, all fluoroscopic procedures pose some health risks."
    },

    {
        question: "Which of the following principle is not a principle of radiation protection recommended by the International Commission on Radiological Protection (ICRP) ?",
        optionA: "Justification principle",
        optionB: "Optimization principle",
        optionC: "Lowest cost principle",
        optionD: "Dose limitation principle",
        correctOption: "optionC",
        explanation:"General principles of radiation protection as three key words; justification, optimization and dose limit. Because medical exposure of patients has unique considerations, it is not appropriate to apply dose limits or dose constraints."
    },

    {
        question: "X-rays are nearly identical to:",
        optionA: "alpha rays",
        optionB: "beta rays",
        optionC: "gamma rays",
        optionD: "neutrons",
        correctOption: "optionC",
        explanation:"The main difference is the way they produced, x-rays are produced by electron transition outside nucleus, but gamma rays originate inside the nucleus."
    },

    {
        question: "X-ray generation does not require the following:",
        optionA: "a radioactive source.",
        optionB: "a tube under vacuum.",
        optionC: "high voltage.",
        optionD: "electrons from a heated cathode.",
        correctOption: "optionA",
        explanation:"X-rays are produced within the X-ray tube. No external radioactive material is involved."
    },

    {
        question: "According to the Compton effect:",
        optionA: "There is interaction between a photon and a free electron.",
        optionB: "The smaller the angle through which the photon is scattered, the more energy it loses.",
        optionC: "The wavelength change produced depends upon the scattering material",
        optionD: "High energy radiation is scattered more than lower energy radiation.",
        correctOption: "optionA",
        explanation:"The Compton effect is a type of scattering. During the interaction, the photon transfers some of its energy to the electron, causing it to recoil. The scattered photon has a longer wavelength and lower energy than the incident photon, and the amount of energy transferred to the electron depends on the angle of scattering."
    },

    {
        question: "Regarding photoelectric effect, which statement is most appropriate ?",
        optionA: "It results in the production of Bremsstrahlung radiation",
        optionB: "It results in the production of scattered photons, the energy of which is dependent on the initial photon energy (keV)",
        optionC: "X-rays passing through barium cause greater scatter than those passing through human tissues",
        optionD: "Ejection of a K-shell electron by an incident photon results in the production of an Auger electron",
        correctOption: "optionC",
        explanation:"The photoelectric effect involves the absorption of an incident photon by an atom, which results in the ejection of a bound electron from its shell, leaving behind a hole. The hole is then filled by an electron from an outer shell, and this transition causes the emission of characteristic radiation. Barium has a higher atomic number compared to human tissue, thus it produces characteristic radiation through the photoelectric effect. This radiation may have enough energy to leave the patient's body and result in scatter radiation."
    },

    {
        question: "What is true about the binding energy of electrons ?",
        optionA: "It is the energy expended in moving an electron from an inner to an outer shell",
        optionB: "It is higher for an L-shell electron than an M-shell electron",
        optionC: "It is influenced by the number of neutrons within an atom",
        optionD: "It determines Bremsstrahlung photon energy",
        correctOption: "optionB",
        explanation:"Binding energy refers to the amount of the energy required to overcome the attractive force of the nucleus on the electron. Inner electrons experience a stronger pull from the nucleus than outer electrons, hence the binding energy is higher for inner electrons. Neutrons do not have any electrical charge, thus they do not affect the binding energy of electrons. Bremsstrahlung radiation is produced when high-speed electrons are decelerated or slowed down as they pass through a material."
    },

    {
        question: "Regarding electromagnetic beam radiation:",
        optionA: "Energy fluence is the number of photons per unit area of a beam",
        optionB: "Wavelength is inversely proportional to frequency",
        optionC: "Frequency is inversely proportional to photon energy (keV)",
        optionD: "Photon energy is proportional to wavelength",
        correctOption: "optionB",
        explanation:"The number of photons passing through a particular area is known as photon fluence. The total energy per unit area is called energy fluence and is determined by adding the energies of all particles in the beam. Wavelength is the distance between two adjacent crests of a wave. Frequency multiplied by wavelength equals the velocity of the wave (v = λ x f). Frequency and photon energy are directly proportional, while photon energy and wavelength are inversely proportional."
    },

    {
        question: "Which of the following statements are correct regarding an X-ray tube ?",
        optionA: "The tube current (mA) is increased by increasing the filament voltage",
        optionB: "An increase in the tube voltage (kV) leads to a proportional increase in tube current (mA)",
        optionC: "Electrons are generated by heating the anode, which is usually made from tungsten",
        optionD: "The kinetic energy of electrons (keV) in the X-ray tube is independent on the tube voltage (kV)",
        correctOption: "optionA",
        explanation:"When an electrical current is passed through the filament, it heats up and emits electrons. This process is known as thermionic emission. The tube voltage, also known as the kilovoltage peak (kVp), determines the maximum kinetic energy that each electron can have when it reaches the anode (in keV). The tube current, measured in milliamperes (mA), determines the number of electrons produced. Therefore, increasing the tube voltage increases the maximum energy of the X-ray photons produced, while increasing the tube current increases the number of X-ray photons produced."
    },

    {
        question: "What is the best shielding for X-rays ?",
        optionA: "Paper",
        optionB: "Aluminum",
        optionC: "Your skin",
        optionD: "Lead",
        correctOption: "optionD",
        explanation:"Lead is a heavy metal with corrosion-resistant and malleable properties. Its high density, which is 11.34 grams per cubic centimeter, makes it an effective shield against X-ray radiation. It is often blended with other materials, such as resins and fillers, to create flexible and wearable shielding materials. One example of such a material is lead vinyl sheets, which can be used to provide radiation protection for personnel who work with X-ray equipment."
    },

    {
        question: "Principals of radiation protection include:",
        optionA: "Shielding",
        optionB: "Time",
        optionC: "Distance",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"Principles of radiation protection include minimizing the time spent in radiation fields, maximizing distance from radiation sources, and shielding oneself and others with appropriate materials. The intensity of scatter radiation 1 m from the patient is approximately 0.1% of the intensity of the primary beam at the patient."
    },

    {
        question: "What is the source of x-ray photons in the tube ?",
        optionA: "anode",
        optionB: "cathode",
        optionC: "filament ",
        optionD: "rotor",
        correctOption: "optionA",
        explanation:"When the electron beam, that is generated by the cathode filament, strikes the target material on the anode, X-ray photons are produced through the process of Bremsstrahlung and characteristic radiation."
    },

    {
        question: "The major radiation exposure risk for most medical staff originates from",
        optionA: "primary X-ray beam",
        optionB: "scattered radiation reflected from patient's body or table.",
        optionC: "leakage from the X-ray tube",
        optionD: "none of these",
        correctOption: "optionB",
        explanation:"The safety of the operator during an x-ray procedure is primarily determined by their proximity to the patient and the amount of scatter radiation produced by the primary beam interacting with the patient's body. The operator is not at risk of direct exposure to the primary x-ray beam unless their hands or body parts enter the x-ray field. The leakage radiation from the x-ray tube is generally low and not considered a significant risk to the operator."
    },

    {
        question: "Radiation exposure decreases with increasing distance from the source. This relationship can be described by the:",
        optionA: "quadratic equation",
        optionB: "inverse square law",
        optionC: "sum of the parts",
        optionD: "law of thermodynamics",
        correctOption: "optionB",
        explanation:"Radiation exposure is inversely proportional to the square of distance from the source."
    },

    {
        question: "ALARA stands for:",
        optionA: "As Low As Responsibly Acceptable.",
        optionB: "Alarm Loss Activated Radiation Activated.",
        optionC: "As Low As Reasonable Achievable.",
        optionD: "As Low As Reasonably Attenuated.",
        correctOption: "optionC",
        explanation:"The dose must be as low as reasonable achievable, while we keeping the benefit from the diagnostic procedure."
    },

    {
        question: "A high occupational exposure to the operator may occur in which of the following examinations ?",
        optionA: "Fluoroscopy, mobile radiography and special procedures.",
        optionB: "Fluoroscopy, special procedures and extremity radiography.",
        optionC: "Fluoroscopy, mobile radiography and chest radiography.",
        optionD: "Fluoroscopy, special procedures and skull radiography.",
        correctOption: "optionA",
        explanation:"Fluoroscopy and special procedures cause much scatter radiation and mobile radiographers may receive high exposures because of the lack of adequate shielding."
    },

    {
        question: "Which of the following can cause saturation in a digital image ?",
        optionA: "Low kVp",
        optionB: "High mAs",
        optionC: "Overexposure",
        optionD: "Underexposure",
        correctOption: "optionC",
        explanation:"Saturation is the result of too many x rays striking the image receptor. The image receptor would be overexposed."
    },

    {
        question: "Characteristic x-rays result when:",
        optionA: "the filament is heated to 2300 degrees Celsius.",
        optionB: "high speed electrons are slowed down or stopped.",
        optionC: "a tungsten K-shell electron is ejected and an L-shell electron replaces it.",
        optionD: "the x-ray tube vacuum is lost.",
        correctOption: "optionC",
        explanation:"When an L-shell electron replaces a K-shell electron a 57.4 keV x-ray is produced."
    },

    {
        question: "Which of the following is true about ionizing radiation ?",
        optionA: "It does not have enough energy to remove electrons from atoms",
        optionB: "It is non-penetrating and cannot pass through materials",
        optionC: "It has enough energy to remove electrons from atoms, creating ions",
        optionD: "It is harmless to the human body",
        correctOption: "optionC",
        explanation:"Ionizing radiation has enough energy to remove electrons from atoms, creating ions and potentially causing damage to biological tissues."
    },

    {
        question: "Which of the following are true regarding the production of X-ray photons when using a tungsten target ?",
        optionA: "The majority of X-rays emitted are a result of characteristic radiation",
        optionB: "The kinetic energy of electrons (keV) interacting with the target is equal to the kV between the anode and cathode of the X-ray tube",
        optionC: "The energy of Ka radiation is greater than Kb radiation",
        optionD: "L-shell radiation makes up 25% of characteristic radiation emitted from the tube",
        correctOption: "optionB",
        explanation:"Around 80% of the X-rays generated by an X-ray tube are Bremsstrahlung radiation. For tungsten: Ka radiation = K-shell binding energy (70 keV) – L-shell binding energy (12 keV) = 58 keV. Kb radiation = K-shell binding energy (70 keV) – M-shell binding energy (2 keV) = 68 keV. Since the binding energy of L-shell electrons is only 12 keV, the photon energy produced when an electron from an outer shell fills the gap is too low to exit the tube (i.e. less than 10 keV)."
    },

    {
        question: "Which of the following is incorrect with regard to X-ray photon production ?",
        optionA: "The area of a continuous spectrum graph represents the total output of all X-ray photons emitted as a result of characteristic radiation",
        optionB: "Increasing the tube voltage (kV) results in the continuous spectrum shifting to the right and the line spectrum increasing in height",
        optionC: "Increasing the filament voltage causes Bremsstrahlung and characteristic radiation graphs to increase in height",
        optionD: "Reducing the filament voltage has no effect on the maximum photon energy produced by characteristic or Bremsstrahlung radiation",
        correctOption: "optionA",
        explanation:"The area of a continuous spectrum graph represents the Bremsstrahlung radiation and the line spectrum represents the characteristic radiation."
    },

    {
        question: "How do radiation protection measures, such as shielding and dose limits, help reduce the risk of radiation-induced harm ?",
        optionA: "By eliminating all sources of ionizing radiation",
        optionB: "By reducing the amount of radiation exposure to the lowest reasonably achievable level",
        optionC: "By making cells and DNA more resistant to radiation damage",
        optionD: "By encouraging the body to repair DNA damage more quickly",
        correctOption: "optionB",
        explanation:"The purpose of radiation protection is to minimize the harmful effects of ionizing radiation by reducing unnecessary radiation exposure as much as possible."
    },

    {
        question: "Concerning the interaction of X-ray photons with matter:",
        optionA: "It is possible to predict the fraction of photons that will be absorbed or scattered, when passing through a given material",
        optionB: "Attenuation is represented by the number of photons absorbed or scattered by matter",
        optionC: "Scattered photons help form the primary image on the film",
        optionD: "The half-value layer (HVL) of a material is the thickness needed to reduce the number of photons in a beam by half",
        correctOption: "optionB",
        explanation:"X-ray attenuation and scattering are stochastic events. The X-rays that penetrate through the patient create the main image, while the scattered X-rays blur it. The half-value layer (HVL) is the thickness of a material that decreases the intensity of a mono-energetic beam to half of its initial value, and it is not related to the number of photons."
    },

    {
        question: "What is a controlled area in terms of radiation protection ?",
        optionA: "An area that is occupied by people trained in radiation safety",
        optionB: "An area that is occupied by people who wear radiation monitors",
        optionC: "An area that occupancy factor is 1",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"This is a work area in which the annual radiation doses may exceed 3/10ths of the annual maximum permissible doses for exposed workers. A controlled area is defined as an area where the occupancy factor is considered to be 1, which means that it can always be occupied and requires maximum shielding. An uncontrolled area is one where the general population is present. The shielding requirements for an area depend on various factors, including occupancy factor."
    }



]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 20 out of 24 questions to shuffledQuestions array
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
    
    const quizName = "Basic physics";

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