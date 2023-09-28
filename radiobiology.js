const questions = [
    {
        question: "What is the main target of ionizing radiation in the human body ?",
        optionA: "DNA",
        optionB: "Proteins",
        optionC: "Carbohydrates",
        optionD: "Lipids",
        correctOption: "optionA",
        explanation: "Damage to DNA caused by ionizing radiation leads to mutations in somatic cells, often resulting in cancer; mutations of germ cells lead to hereditary mutations and, theoretically, genetic diseases."
    },

    {
        question: "What is the term used to describe the sum of the energy deposited in tissue per unit path length it travels ?",
        optionA: "Energy transfer coefficient",
        optionB: "Ionization potential",
        optionC: "Absorbed dose rate",
        optionD: "Linear energy transfer",
        correctOption: "optionD",
        explanation:"Linear, meaning the radiation travels in a line. And energy transfer, meaning how much of the radiation’s energy is transferred into the material it’s going through. Low-LET radiation is from external electromagnetic radiation such as x-rays that have neither mass nor charge. Low-LET radiation penetrates tissues very easily and for any event deposit energy very rarely."
    },

    {
        question: "What is the term used to describe the ability of a radiation type to cause biological damage ?",
        optionA: "Ionization potential",
        optionB: "Energy transfer coefficient",
        optionC: "Relative biological effectiveness",
        optionD: "Absorbed dose rate",
        correctOption: "optionC",
        explanation:"It compares the biological effects of a given dose of test radiation to that of a reference radiation, usually 250-kilovolt (kV) X-rays. The RBE of X-rays, which are a type of low-linear energy transfer (LET) radiation, is generally considered to be 1."
    },

    {
        question: "During an accident at work, if someone receives a radiation exposure of 100 milli Sieverts, what effect will this have on his/her health ?",
        optionA: "Hair loss.",
        optionB: "No effect will be observed immediately but he will have a slightly greater risk of getting cancer later in life.",
        optionC: "skin erythema",
        optionD: "None at all",
        correctOption: "optionB",
        explanation:"A dose of 100 mSv may cause some chemical changes that could lead to cancer at some later stage. This dose is not high enough to cause any of the deterministic (early) effects."
    },

    {
        question: "What is the term used to describe the process by which cells divide and grow uncontrollably, often leading to cancer ?",
        optionA: "Metastasis",
        optionB: "Differentiation",
        optionC: "Apoptosis",
        optionD: "None of the above",
        correctOption: "optionA",
        explanation:"Cancer is a disease caused when cells divide uncontrollably and spread into surrounding tissues. Cancer is caused by changes to DNA. Most cancer-causing DNA changes occur in sections of DNA called genes."
    },

    {
        question: "Which type of effect is directly proportional to the radiation dose received ?",
        optionA: "Stochastic effect",
        optionB: "Deterministic effect",
        optionC: "Both types of effects are directly proportional to the radiation dose received.",
        optionD: "Neither type of effect is directly proportional to the radiation dose received.",
        correctOption: "optionB",
        explanation:"As far as the deterministic effects, the higher the radiation dose, the more severe the radiation damage. As far as the stochastic effects, the higher the radiation dose, the higher the probability of radiation damage occurrence."
    },

    {
        question: "What is the difference between deterministic and stochastic effects ?",
        optionA: "Deterministic effects occur above a threshold dose and severity depends on dose, but stochastic effects occur by chance and without a threshold level of dose",
        optionB: "Deterministic effects occur by chance and without a threshold level of dose, but stochastic effects occur above a threshold dose and severity depends on dose",
        optionC: "Deterministic and stochastic effects are the same",
        optionD: "Neither deterministic nor stochastic effects are occurred",
        correctOption: "optionA",
        explanation:"Radiation below the threshold dose causes no deterministic effects. Deterministic radiation effects can be acute effects. These occur within days or weeks after high radiation exposures. As far as the stochastic effects, the possibility that radiation exposure even at extremely low doses may exert some effects can never be eliminated."
    },

    {
        question: "What poses the most risk to personnel during fluoroscopy ?",
        optionA: "direct radiation",
        optionB: "scatter radiation",
        optionC: "neither direct radiation nor scatter radiation",
        optionD: "both direct radiation and scatter radiation",
        correctOption: "optionB",
        explanation:"The major source of radiation exposure to personnel in fluoroscopy procedures is exposure to scattered radiation from the patient. The exposure comes mainly from the entry surface of the beam into the patient."
    },

    {
        question: "Which of the following best describes the biological effects of chronic radiation exposure ?",
        optionA: "They are longer-lasting than the effects of acute radiation exposure",
        optionB: "They are shorter-lasting than the effects of acute radiation exposure",
        optionC: "They are identical to the effects of acute radiation exposure",
        optionD: "They do not occur at all, since chronic radiation exposure is not harmful to living organisms",
        correctOption: "optionA",
        explanation:"Acute radiation dose usually refers to a large dose of radiation received in a short period of time, which can cause effects such as skin burns. Chronic dose refers to the sum of small doses received repeatedly over long time periods, which can cause health effects such as cancer."
    },

    {
        question: "Which of the following organs is most sensitive to radiation in children ?",
        optionA: "Brain",
        optionB: "Liver",
        optionC: "Heart",
        optionD: "Thyroid",
        correctOption: "optionD",
        explanation:"The most radiosensitive organ sites in children in order of sensitivity are the thyroid gland, breasts, bone marrow (leukemia), brain and skin."
    },

    {
        question: "Which of the following effects of ionizing radiation occurs with a probability that is NOT proportional to the received radiation dose ?",
        optionA: "Stochastic effect ",
        optionB: "skin erythema",
        optionC: "Cataract induction",
        optionD: "Hair loss",
        correctOption: "optionA",
        explanation:"Stochastic effects are probabilistic effects that occur by chance and are not related to the dose received. In contrary, deterministic effects are related to dose and only occur above a certain threshold. An example of stochastic effect is the development of cancer in an irradiated organ or tissue."
    },

    {
        question: "Put the following organs in order, from most radiosensitive to least radiosensitive. <br> 1.Liver 2.Brain 3.Testes",
        optionA: "1, 2, 3",
        optionB: "2, 3, 1",
        optionC: "3, 1, 2",
        optionD: "3, 2, 1",
        correctOption: "optionC",
        explanation:"The male reproductive gland is the most radiosensitive organ and nerve cells are least sensitive. "
    },

    {
        question: "Which of the following is incorrect about fetus and exposure to radiation ?",
        optionA: "A fetal absorbed dose less than 0.1 Gy should be considered as a ground for abortion.",
        optionB: "Radiation exposure exceeding 0.1 Gy at an early stage of pregnancy (preimplantation period) may lead to miscarriage.",
        optionC: "Radiation exposure exceeding 0.1 Gy during organogenesis period may cause dysplasia (malformation).",
        optionD: "Radiation exposure exceeding 0.3 Gy during the period when the cerebrum is actively growing (early fetal period) poses risks of mental retardation.",
        correctOption: "optionA",
        explanation:"The ICRP states in its 2007 Recommendations that a fetal absorbed dose less than 0.1 Gy should not be considered as a ground for abortion. It's worth noting that the exposure doses experienced by fetuses may not necessarily be equivalent to those of their mothers. Additionally, higher levels of exposure doses can increase the risks of stochastic effects like cancer or heritable effects."
    },

    {
        question: "What is the threshold value and the incubation period for the cataract effect ?",
        optionA: "Approx. 1 Gy and incubation period 10 years or longer",
        optionB: "Approx. 0.5 Gy and incubation period 10 years or longer",
        optionC: "Approx. 0.5 Gy and incubation period 20 years or longer",
        optionD: "Approx. 1.5 Gy and incubation period 20 years or longer",
        correctOption: "optionC",
        explanation:"Cataract takes several years to appear. The threshold dose for cataract had been set at 1.5 Gy, but the ICRP revised this value downward to approx. 0.5 Gy and set a new equivalent dose limit for the eye lens for occupational exposures."
    },

    {
        question: "What is the threshold value and the incubation period for the skin burn effect ?",
        optionA: "10 Gy or more and incubation period 2 to 3 weeks",
        optionB: "3 Gy and incubation period 2 months",
        optionC: "1 to 3 Gy and incubation period 2 to 3 days",
        optionD: "5 to 10 Gy and incubation period 2 to 3 weeks",
        correctOption: "optionD",
        explanation:"Thresholds for entrance dose have been established for different types of skin changes. These range from a visible reddening of the skin at around 2 Gy, to the development of painful, necrotic ulcers at approximately 18 Gy."
    },

    {
        question: "What is the threshold value and the incubation period for the temporary sterility ?",
        optionA: "10 Gy or more and incubation period 2 to 3 weeks",
        optionB: "Approx. 0.1 Gy and incubation period 3 to 9 weeks",
        optionC: "1 to 3 Gy and incubation period 2 to 3 days",
        optionD: "5 to 10 Gy and incubation period 2 to 3 weeks",
        correctOption: "optionB",
        explanation:"The testes are among the most vulnerable organs to radiation exposure. Exposure to radiation doses exceeding 0.1 Gy (100 mGy) at one time can lead to temporary sterility, along with a reduction in the production of sperm. This is caused by the radiation-induced damage to the cells within the testes that are responsible for sperm production."
    },

    {
        question: "What is the threshold value and the incubation period for the deterioration of hemopoietic capacity ?",
        optionA: "Approx. 10 Gy and incubation period 2 to 3 weeks",
        optionB: "Approx. 0.5 Gy and incubation period 3 to 7 days",
        optionC: "1 to 3 Gy and incubation period 2 to 3 days",
        optionD: "Approx. 6 Gy and incubation period 2 to 3 weeks",
        correctOption: "optionB",
        explanation:"Exposure of the bone marrow to radiation doses exceeding 0.5 Gy (500 mGy) at one time can lead to a reduction in the hematopoietic function. This can result in a decrease in the overall number of blood cells."
    },

    {
        question: "Which type of tissue is most sensitive to ionizing radiation ?",
        optionA: "tissue that receives the largest dose",
        optionB: "tissue that is located in the abdominal region",
        optionC: "tissue with cells that divide quickly",
        optionD: "tissue with cells that no longer divide",
        correctOption: "optionC",
        explanation:"Most sensitive to ionizing radiation are bone marrow and gastrointestinal cells, which divide rapidly."
    },
    
    {
        question: "Which of the following tissues is (are) considered to be particularly radiosensitive ?",
        optionA: "Intestinal mucous membrane",
        optionB: "Epidermis of extremities",
        optionC: "Optic nerves",
        optionD: "All of these",
        correctOption: "optionA",
        explanation:"The small bowel is considered to be the most radiosensitive portion of the gastrointestinal (GI) tract due to the high mitotic activity of its undifferentiated stem cells responsible for the absorption of nutrients. In contrast, the central nervous system (CNS) is the most radioresistant system in the adult, while the epidermis is composed of mature, postmitotic cells that are relatively radioresistant."
    },

    {
        question: "What are the two important ways that x-rays can interact with tissue ?",
        optionA: "Pair production and Photodisintegration",
        optionB: "Photoelectric effect and Pair production",
        optionC: "Photoelectric effect and Compton scatter",
        optionD: "Compton scatter and Rayleigh (coherent) scattering",
        correctOption: "optionC",
        explanation:"Pair production and Photodisintegration are high-energy phenomena, thus, these do not occur in medical X-ray imaging because these X-rays only contain ~150 keV. Compton scattering produces scattered radiation that can contribute to image noise and patient and occupational dose. Photoelectric absorption also occurs in fluoroscopy as it contributes more to image contrast than to patient dose."
    },

    {
        question: "The largest amount of diagnostic x-ray absorption is most likely to occur in which of the following tissues ?",
        optionA: "Lung",
        optionB: "Adipose",
        optionC: "Muscle",
        optionD: "Bone",
        correctOption: "optionD",
        explanation:"The amount of diagnostic x-ray absorption in a tissue is dependent on its density and atomic number. Among the tissues listed, bone has the highest density and atomic number, and therefore it is most likely to absorb the largest amount of diagnostic x-rays. In contrast, lung has a low density and low atomic number and is therefore less likely to absorb x-rays. Adipose tissue and muscle are also less dense and have lower atomic numbers compared to bone, and therefore they will absorb less x-ray radiation."
    },

    {
        question: "What is the dose range for bone marrow syndrome and the primary cause of death in patients ?",
        optionA: "1-10 mGy and Neurological damage",
        optionB: "10-50 mGy and Bone marrow destruction",
        optionC: "0.7-10 Gy and Bone marrow destruction",
        optionD: "100-500 Gy and Cardiovascular collapse",
        correctOption: "optionC",
        explanation:"The destruction of the bone marrow is the main cause of death, leading to infection and hemorrhage. Mild symptoms may occur as low as 0.3 Gy. The survival rate of those affected by this syndrome (also known as hematopoietic syndrome) decreases as the radiation dose increases."
    },

    {
        question: "What is the dose value at which the full syndrome of Gastrointestinal (GI) syndrome typically occurs ?",
        optionA: "greater than approximately 1 Gy",
        optionB: "greater than approximately 10 Gy",
        optionC: "greater than approximately 50 Gy",
        optionD: "below 5 Gy",
        correctOption: "optionB",
        explanation:"Some symptoms may appear with a lower dose of 6 Gy. Unfortunately, the survival rate for individuals who develop this syndrome is very low. The damage caused to the GI tract and bone marrow is usually irreversible and leads to complications such as infection, dehydration, and electrolyte imbalances, ultimately resulting in death within two weeks."
    },

    {
        question: "What is the dose value at which the full syndrome of Central Nervous System (CNS) syndrome typically occurs ?",
        optionA: "greater than approximately 1 Gy",
        optionB: "greater than approximately 10 Gy",
        optionC: "greater than approximately 50 Gy",
        optionD: "below 5 Gy",
        correctOption: "optionC",
        explanation:"Some symptoms may occur as low as 20 Gy. Death occurs within 3 days. Death likely is due to collapse of the circulatory system as well as increased pressure in the confining cranial vault as the result of increased fluid content caused by edema, vasculitis, and meningitis."
    },

    {
        question: "What are the four stages of Acute Radiation Syndrome and give the proper order of these ?",
        optionA: "Prodromal stage, Latent stage, Manifest illness stage, Recovery or death",
        optionB: "Prodromal stage, Manifest illness stage, Latent stage, Recovery or death",
        optionC: "Manifest illness stage, Prodromal stage, Latent stage, Recovery or death",
        optionD: "Latent stage, Manifest illness stage, Prodromal stage, Recovery or death",
        correctOption: "optionA",
        explanation:"Prodromal stage (N-V-D stage): The classic symptoms during this stage are nausea, vomiting, anorexia, and possibly diarrhea (depending on dose), which occur from minutes to days following exposure. The symptoms may last for minutes up to several days. Latent stage: The patient may look and feel generally healthy for a few hours or even up to a few weeks. Manifest illness stage: The symptoms experienced by the patient depend on the specific syndrome. These symptoms can last from hours up to several months. Recovery or death: Patients who do not recover from radiation sickness are likely to die within several months of exposure. The recovery process can last from several weeks up to two years."
    },

    {
        question: "What is cutaneous radiation injury (CRI) and at what dose can occur ?",
        optionA: "Injury to internal organs from acute exposure to radiation and can occur with radiation doses as low as 1 Gy",
        optionB: "Injury to the skin and underlying tissues from acute exposure to radiation and can occur with radiation doses as low as 2 Gy.",
        optionC: "Injury to the bones from chronic exposure to radiation and can occur with radiation doses as low as 0.5 Gy",
        optionD: "Injury to the eyes from acute exposure to radiation and can occur with radiation doses as low as 5 Gy",
        correctOption: "optionB",
        explanation:"The severity of CRI symptoms will increase with increasing doses. Unlike the skin lesions caused by chemical or thermal damage, the lesions caused by radiation exposures do not appear for hours to days following exposure, and burns and other skin effects tend to appear in cycles. The key treatment issues with CRI are infection and pain management. Cases of CRI have occurred in people who were overexposed to x-rays from fluoroscopy units."
    }


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 25 out of 26 questions to shuffledQuestions array
//app would be dealing with 25 questions per session
    while (shuffledQuestions.length <= 24) {
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
        if (indexNumber <= 24) {
//displays next question as long as index number isn't greater than 24, remember index number starts from 0, so index 24 is question 25
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 24 meaning we're already at the 25th question
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
    if (playerScore <= 12) {
        remark = "Inadequate knowledge, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 13 && playerScore < 22) {
        remark = "Average knowledge, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 22) {
        remark = "Excellent, You have adequate knowledge."
        remarkColor = "green"
    }
    const playerGrade = ((playerScore / 25) * 100).toFixed(2); // Round the grade to two decimal places

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

    const quizName = "Radiobiology";

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