const questions = [
    {
        question: "The use of antiscatter grid (Bucky) in fluoroscopic systems is to",
        optionA: "improve contrast",
        optionB: "decrease exposure",
        optionC: "increase X-ray penetration",
        optionD: "decrease scatter radiation to patient",
        correctOption: "optionA",
        explanation:"Antiscatter grids are used in fluoroscopy to enhance image quality and therefore improve image contrast. Grids may be circular (XRII systems) or rectangular (FPD systems) and are often removable by the operator. Typical grid ratios range from 6:1 to 10:1."
    },

    {
        question: "What is a C-arm in fluoroscopy ?",
        optionA: "A type of contrast agent used in fluoroscopy",
        optionB: "A type of X-ray detector used in fluoroscopy",
        optionC: "A mobile fluoroscopy machine with an arched arm",
        optionD: "A type of computer used to process fluoroscopy images",
        correctOption: "optionC",
        explanation:"C-Arm gets its name from the C-shaped arm present in the device, which is used to connect the x-ray source and the detector. These C-Arm machines are widely used during orthopedic, complicated surgical, pain management (Anesthetics) and emergency procedures."
    },


    {
        question: "What is the main difference between continuous and pulsed-beam operation modes in fluoroscopy ?",
        optionA: "The type of X-ray machine used",
        optionB: "The amount of radiation exposure to the patient",
        optionC: "The speed at which images are acquired",
        optionD: "The type of contrast agent used",
        correctOption: "optionB",
        explanation:"Continuous fluoroscopy allows for real-time imaging, it may also result in higher radiation doses to the patient. Pulsed fluoroscopy involves the delivery of radiation in periodic bursts, thereby reducing overall fluoroscopy time and minimizing radiation exposure to the patient."
    },

    {
        question: "Which of the following is a disadvantage of pulsed-beam operation mode in fluoroscopy ?",
        optionA: "Higher radiation dose to the patient",
        optionB: "Longer procedure times compared to continuous mode",
        optionC: "Reduced image quality in high-motion areas",
        optionD: "Only suitable for certain types of procedures",
        correctOption: "optionC",
        explanation:"One potential drawback of pulsed fluoroscopy is the possible loss of diagnostic information. High frame rates are typically beneficial for dynamic procedures where there is rapid movement or changes in the data being captured. However, if neither the patient nor the anatomical part being imaged is moving rapidly, a lower frame rate may be sufficient for imaging purposes."
    },

    {
        question: "What is high filtration of the beam in fluoroscopy ?",
        optionA: "The use of a higher dose of contrast agent during the procedure",
        optionB: "The use of a higher voltage setting on the X-ray machine",
        optionC: "The use of a thicker X-ray filter to reduce low-energy X-rays",
        optionD: "The use of a thinner X-ray filter to increase image sharpness",
        correctOption: "optionC",
        explanation:"Filtering is the removal of these low energy x-rays from the beam spectrum which would otherwise not contribute to image quality but would add to patient dose and scatter."
    },

    {
        question: "In which type of procedure would high filtration of the beam be most important ?",
        optionA: "Pediatric procedures",
        optionB: "Orthopedic procedures",
        optionC: "Gastrointestinal procedures",
        optionD: "Vascular procedures",
        correctOption: "optionA",
        explanation:"Children are more sensitive to radiation exposure than adults due to their smaller body size and developing organs, and they have a longer lifespan to potentially develop radiation-induced cancers. Therefore, high filtration of the beam is most important in pediatric procedures, where reducing radiation exposure is a top priority."
    },

    {
        question: "Which of the following occur as a result of filtration? <br>1.increase quality of the beam <br>2.harden the beam <br>3.eliminate high energy x-ray photons",
        optionA: "1 and 2",
        optionB: "1 and 3",
        optionC: "2 and 3",
        optionD: "1,2 and 3",
        correctOption: "optionA",
        explanation:"Filtration aims to remove a large proportion of lower energy photons, which are mainly absorbed by the patient and do not contribute to the image."
    },

    {
        question: "What is the primary purpose of the glass housing on the image intensifier ?",
        optionA: "protect the anode assembly",
        optionB: "protect the cathode assembly",
        optionC: "provide a vacuum",
        optionD: "provide protection from radiation leakage",
        correctOption: "optionC",
        explanation:"Image intensifier is an evacuated glass envelop (vacuum bottle)."
    },

    {
        question: "What is the component of the image intensifier responsible for focusing the electron beam ?",
        optionA: "the input phosphor ",
        optionB: "the output phosphor ",
        optionC: "the photocathode",
        optionD: "electrostatic lenses",
        correctOption: "optionD",
        explanation:"The input phosphor coverts the X-ray image into a visible light image. The photocathode is placed close to the input phosphor, and it releases electrons proportional to the visible light from the input phosphor that is incident on its surface. The electrons are focused, accelerated and multiplied in number by the electron optic components, and finally hit the output phosphor."
    },

    {
        question: "How could you double the number of incident electrons produced <br> 1.double your mA <br>2.double your time <br> 3.increase your kVp by 15% ?",
        optionA: "1 and 2 ",
        optionB: "1 and 3",
        optionC: "2 and 3",
        optionD: "1,2 and 3",
        correctOption: "optionD",
        explanation:"The mA or the time are both linearly proportional to the number of x-rays. The number of x-rays is proportional to kVp^2. Increasing the kVp by 15% is equivalent to doubling the mAs, which results in doubling the quantity of radiation."
    },

    {
        question: "What is the function of the image intensifier in fluoroscopy ?",
        optionA: "To filter the X-ray beam to reduce patient radiation exposure",
        optionB: "To convert X-rays into visible light for image acquisition",
        optionC: "To increase the voltage of the X-ray beam for higher quality images",
        optionD: "To deliver contrast agent directly to the area of interest",
        correctOption: "optionB",
        explanation:"In a typical image intensifier, The input phosphor absorbs the X-ray photons and emits visible light photons in response. The light photons are then directed towards a photocathode, where they are converted into electrons. The resulting electrons are accelerated and focused by an electrostatic field as they travel through a vacuum towards the output phosphor. The output phosphor absorbs the electrons and emits visible light photons, which can be captured and recorded by various imaging devices."
    },

    {
        question: "How does decreasing the distance between the patient and the image intensifier affect image magnification ?",
        optionA: "It increases image magnification",
        optionB: "It decreases image magnification",
        optionC: "It has no effect on image magnification",
        optionD: "It depends on the size of the image intensifier",
        correctOption: "optionB",
        explanation:"The image intensifier should be placed as close to the patient as safely possible, thus decreasing both magnification and patient dose. Employing this practice will also result in increased resolution and image quality."
    },

    {
        question: "What is the main benefit of using a larger image intensifier in fluoroscopy ?",
        optionA: "It reduces patient radiation exposure",
        optionB: "output spatial resolution higher.",
        optionC: "image distortion lower",
        optionD: "none of these",
        correctOption: "optionA",
        explanation:"Image intensifiers can electronically vary the size of the input radiation field of view while keeping the output field fixed, equal to 2.54 cm. According to larger FOV the effects on the output image are higher minification gain, lower output spatial resolution, higher image distortions, lower radiation dose. "
    },

    {
        question: "What is the purpose of automatic brightness control (ABC) in fluoroscopy ?",
        optionA: "To maintain a consistent image brightness throughout the exam",
        optionB: "To reduce radiation dose to the patient",
        optionC: "To improve image resolution",
        optionD: "All of the above",
        correctOption: "optionD",
        explanation:"ABC helps to improve diagnostic accuracy while minimizing radiation exposure to the patient and medical personnel."
    },

    {
        question: "What is the purpose of high- and low-dose operation modes in fluoroscopy ?",
        optionA: "To provide the operator with flexibility in choosing the appropriate dose for the patient and the procedure",
        optionB: "To reduce the radiation dose to the patient",
        optionC: "To improve image resolution",
        optionD: "All of the above",
        correctOption: "optionA",
        explanation:"High-dose mode is typically used for procedures that require high image quality and real-time imaging, such as during interventional procedures or surgeries. Low-dose mode, on the other hand, is used for procedures that require less radiation exposure, such as routine diagnostic imaging. By providing the operator with the option to choose the appropriate dose mode, fluoroscopy systems can help to optimize radiation exposure while still achieving high-quality images."
    },

    {
        question: "The ABC circuit adjusts__________ to maintain__________",
        optionA: "mA and kV; high brightness",
        optionB: "mA and kV; constant brightness",
        optionC: "mA and kV; low brightness",
        optionD: "only kV; constant brightness",
        correctOption: "optionB",
        explanation:"Automatic brightness control (ABC) is used to ensure that the brightness of the image at the monitor is constant by automatic adjustment of kVp and/or mAs when moving the x-ray tube across different anatomical regions. ABC systems are analogous to the AEC systems used in radiography."
    },

    {
        question: "In an image intensifier tube, the ________ gain occurs because the input diameter is ________ than the output diameter.",
        optionA: "minification; smaller",
        optionB: "magnification; smaller",
        optionC: "minification; larger",
        optionD: "magnification; larger",
        correctOption: "optionC",
        explanation:"Minification is equal to the area of the input phosphor to the area of the output phosphor. The input phosphor releases a certain number of light photons, which are then condensed into a smaller area on the output phosphor. That's why minification gain happens."
    },

    {
        question: "When the output image is digitized and continuously displayed on the TV monitor, this is known as",
        optionA: "last image hold",
        optionB: "the automatic brightness control",
        optionC: "Image intensifier",
        optionD: "cine images",
        correctOption: "optionA",
        explanation:"Use “last image hold” rather than additional exposures, where appropriate."
    },

    {
        question: "Regarding magnification in fluoroscopy:",
        optionA: "In the magnified mode, the focal point is closer to the output screen.",
        optionB: "In magnification, both brightness and spatial resolution are increased.",
        optionC: "A change in voltage of the intermediate electrodes will magnify the image.",
        optionD: "In the magnified view, both patient skin dose and effective dose increase in comparison with the full field of view without any collimation.",
        correctOption: "optionC",
        explanation:"When in magnification mode, the focal point is brought closer to the input screen, which results in increased spatial resolution but reduced brightness or gain on the output screen. This decrease in brightness can be compensated for by increasing the exposure factors, which in turn increases the patient's skin dose. Despite the increase in skin dose, the effective dose is less compared to a full field of view without collimation because the surface area being exposed is reduced. This is because the magnification reduces the field of view and limits exposure to the region of interest."
    },

    {
        question: "Regarding the automatic brightness control (ABC) in fluoroscopy:",
        optionA: "In a high kV protocol, because the kV is at the maximum, the patient dose increases.",
        optionB: "In a contrast study, the mA is kept near constant while the kV increases with radiological thickness.",
        optionC: "A high kV mode is used in paediatric imaging.",
        optionD: "In a contrast study with near-constant kV, the kV will never increase when the tube current reaches a certain level.",
        correctOption: "optionC",
        explanation:"This technique can be used to minimize radiation dose while compromising image quality, making it a suitable option for pediatric patients. During a contrast study, the kV is typically maintained at a range of 60-65, with an increase in the mA required for thicker radiological sections. For a radiological thickness that would need higher tube currents, the system increases the kV while reducing the mA to ensure that the maximum power is not exceeded."
    },

    {
        question: "Radiological image unsharpness increases ",
        optionA: "as the object to receptor distance increases.",
        optionB: "as the source to object distance increases.",
        optionC: "if a grid is used.",
        optionD: "as the focal spot size decreases.",
        correctOption: "optionA",
        explanation:"The source-to-object distance is directly proportional to the sharpness of the image produced. A larger source-to-object distance results in a smaller penumbra and thus a sharper image. The object-to-receptor distance is inversely proportional to image sharpness. As the object-to-receptor distance increases, the penumbra also increases, resulting in a less sharp image. The apparent focal spot size is also inversely proportional to image sharpness. The larger the apparent focal spot size, the larger the penumbra, resulting in a less sharp image."
    },

    {
        question: "Which of the following parameters affects the sharpness of details of a digital image?",
        optionA: "Receptor exposure and contrast",
        optionB: "Spatial resolution and distortion",
        optionC: "Receptor exposure and spatial resolution",
        optionD: "Contrast and distortion",
        correctOption: "optionB",
        explanation:"The sharpness of details are improved when spatial resolution is increased and distortion is decreased."
    },

    {
        question: "Total brightness gain is the product of the ________ gains",
        optionA: "minification and FOV",
        optionB: "contrast and noise",
        optionC: "magnification and flux",
        optionD: "minification and flux",
        correctOption: "optionD",
        explanation:"Brightness gain results in a brighter image on the output phosphor. A brighter image is created on the output phosphor when the accelerated electrons strike a smaller output phosphor."
    },

    {
        question: "Which of the following techniques is usually used by the fluoroscopic imaging ?",
        optionA: "Low kVp, low mA",
        optionB: "High kVp, high mA",
        optionC: "High kVp, low mA",
        optionD: "Low kVp, high mA",
        correctOption: "optionC",
        explanation:"High kVp and low mA techniques help to reduce radiation exposure to the patient by using a higher voltage and lower current. This results in a higher energy beam that is more penetrative and can pass through the patient more easily, reducing the need for higher doses. Image intensification is another technique that can increase the brightness of the fluoroscopic image, which can help to reduce the dose required to obtain a clear image. "
    },

    {
        question: "Decreasing the tube voltage (kV), which of the following is incorrect ?",
        optionA: "It reduces the number of electrons colliding with the target",
        optionB: "It reduces the photon fluence",
        optionC: "It reduces the beam intensity",
        optionD: "The rate of photoelectric attenuation increases more than the rate of Compton attenuation",
        correctOption: "optionA",
        explanation:"The number of electrons (tube current, mA) is controlled by the filament voltage. Although the number of filament electrons produced are unaffected by kV, the number of photons created in the target per electron decreases with a reduction in kV"
    },

    {
        question: "Which of the following increase X-ray beam intensity at a given point from a source ?",
        optionA: "Increasing the filter thickness",
        optionB: "Increasing the distance",
        optionC: "Increasing the tube voltage",
        optionD: "Reducing the atomic number of the target material",
        correctOption: "optionC",
        explanation:"As a result of the increased absorption of low-energy photons, there is a decrease in beam intensity. The inverse square law states that the intensity of radiation from a point source is inversely proportional to the square of the distance, assuming no absorption or scatter. Increasing the tube voltage leads to an increase in the kinetic energy of electrons colliding with the target, resulting in an increase in the intensity of the photon beam."
    },

    {
        question: "Which of the following is incorrect with regard to X-ray production ?",
        optionA: "Increasing the tube voltage increases the heat production at the target",
        optionB: "Reducing the actual focal spot reduces the heat load on the target",
        optionC: "Increasing the target angle increases the effective focal spot",
        optionD: "A rotating anode can take a higher heat load than a stationary anode",
        correctOption: "optionB",
        explanation:"Increasing the tube voltage increases the kinetic energy of the electrons, the majority of which is lost as heat on collision with the target. Reducing the actual focal spot results in the heat being spread over a reduced area.  Use a rotating anode, which distributes the heat over a larger area and helps to prevent overheating of the target."
    },

    {
        question: "Which of the following factors increase the brightness of the fluoroscopic image ?",
        optionA: "increase Milliamperes",
        optionB: "decrease Kilovolts",
        optionC: "increase patient thickness and tissue density",
        optionD: "Automatic Brightness Control",
        correctOption: "optionA",
        explanation:"Increase of mA and kVp multiplies the number of x-ray photons incident on the image intensifier, and therefore image brightness increases. An increase in patient thickness reduces the number of x-ray photons reaching the image intensifier, thereby decreasing the image brightness. ABC allows the fluoroscopic unit to automatically maintain the brightness level of the image for variations of patient thickness and attenuation."
    },

    {
        question: "Reduction in brightness at the perphery of the image is termed ________.",
        optionA: "Contrast",
        optionB: "Noise",
        optionC: "Distortion",
        optionD: "Vignetting",
        correctOption: "optionD",
        explanation:"Vignetting is caused by the unequal collection of light at the center of the image intensifier compared with the light at its periphery."
    },

    {
        question: "What are the advantages of beam restriction using a collimator ?",
        optionA: "More scattered radiation is produced",
        optionB: "Less biologic material is irradiated and less scattered radiation is produced",
        optionC: "Less total filtration will be necessary",
        optionD: "It allows for higher radiation doses to be administered to the patient",
        correctOption: "optionB",
        explanation:"One advantage of using a collimator for beam restriction is that it reduces the amount of biologic material that is irradiated, which can lower the potential for harmful effects. Additionally, with less tissue being irradiated, less scattered radiation is produced, leading to improved image quality and contrast. However, total filtration requirements are not directly impacted by beam restriction, as they are instead designed to reduce patient skin dose and provide radiation protection."
    },
    
    {
        question: "Which of the following statements is (are) true concerning radiation safety in fluoroscopy?",
        optionA: "Tabletop radiation intensity must not exceed 100mGy/min.",
        optionB: "Tabletop radiation intensity must not exceed 21 mGy/min/mA.",
        optionC: "In high-level fluoroscopy, tabletop intensity up to 200 mGy/min is permitted.",
        optionD: "All of these",
        correctOption: "optionD",
        explanation:"The intensity of the fluoroscopic beam on the tabletop must not exceed 100 mGy/min (10 R/min) or 21 mGy/min/mA (2.1 R/min/mA). For high-level control fluoroscopy, the tabletop intensity must not exceed 200 mGy/min (20 R/min). When using undertable fluoroscopic tubes, a Bucky-slot cover with an equivalent of at least 0.25-mm Pb must be available to reduce scattered radiation. The milliamperes for fluoroscopy should not exceed 5, although image-intensified fluoroscopy usually operates between 1 and 3 mA."
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

    const quizName = "X-ray systems";

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