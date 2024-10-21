//inisiasi soal dalam quiz
const questions = [
    {
        question: "Jika y = tan -1 [(4x)/(1 + 5x 2 )] + tan -1 [(2 + 3x)/(3 - 2x)], carilah dy/dx. ?",
        optionA: "5/(1+16x^2)",
        optionB: "4/(1+25x^2)",
        optionC: "4/(1+16x^2)",
        optionD: "5/(1+25x^2)",
        correctOption: "optionD"
    },

    {
        question: "Temukan diferensial fungsi eksponensial dan logaritma e^x sec x",
        optionA: "1e^x tan x (sec x + 1)",
        optionB: " e^x sec x (tan x + 1)",
        optionC: "e^x sec x (sec x + 1)",
        optionD: "e^x tan x (tan x + 1)",
        correctOption: "optionB"
    },

    {
        question: "Diferensiasikan x^3 /(1 - x^3 ) terhadap x^3",
        optionA: "1/(1-x^3)^3",
        optionB: "3/(1-x^3)^2",
        optionC: "3/(1-x^3)^3",
        optionD: "1/(1-x^3)^2",
        correctOption: "optionD"
    },

    {
        question: "turunkan fungsi cos x^3 terhadap x",
        optionA: "-3x^2cos x^3",
        optionB: "3x^2sin x^3",
        optionC: "-3x^2sin x^3",
        optionD: "A-3x^2cos x^3",
        correctOption: "optionC"
    },

    {
        question: "turunkan fungsi sin4x terhadap x",
        optionA: "sin 4x",
        optionB: "cos 4x",
        optionC: "4 sin 4x",
        optionD: "4 cos 4x",
        correctOption: "optionD"
    },

    {
        question: "turunkan fungsi x^3 tan x terhadap x",
        optionA: "3x^2 + sec^2 x",
        optionB: "3x^2 + tan^2 x",
        optionC: "3x^3 + sec^3 x",
        optionD: "3x^3 + sec^3 x",
        correctOption: "optionA"
    },

    {
        question: "Jika f(x) = [cos x- sin x]/[cos x + sin x], berapa  f'(x) + [f(x)]^2?",
        optionA: "sin x",
        optionB: "-cos x",
        optionC: "-1",
        optionD: "1",
        correctOption: "optionC"
    },

    {
        question: "Diferensiasikan terhadap x: (2x + 1)/(2x + 3)",
        optionA: "4/(2x+3)^2",
        optionB: "3/(2x+3)^3",
        optionC: "4/(2x+3)^3",
        optionD: "3/(2x+3)^2",
        correctOption: "optionA"
    },

    {
        question: "Temukan diferensial fungsi eksponensial 3^x /(2+sin x)",
        optionA: "3^x[(2+sinx) log 3+cos x]/(2sinx)^2",
        optionB: "3^x[(2+sinx) log 3-cos x]/(2-sinx)^2",
        optionC: "3^x[(2+sinx) log 3+cos x]/(2+sinx)^2",
        optionD: "3^x[(2+sinx) log 3-cos x]/(2+sinx)^2",
        correctOption: "optionD"
    },

    {
        question: "Dimas yang berusia 30 tahun membeli polis asuransi dengan santunan Rp5.000.000,00. Jika pembayaran premi dilakukan setiap awal bulan maka tentukan besar premi bersih bila Dimas membeli polis asuransi jiwa seumur hidup",
        optionA: "Rp8.313.285,00",
        optionB: "Rp7.703.295,00",
        optionC: "Rp8.703.295,00",
        optionD: "Rp7.313.285,00",
        correctOption: "optionD"
    },

    {
        question: "Hitunglah nilai tunai suatu anuitas seumur hidup bagi seseorang yang berusia 40 tahun dengan pembayaran bulanan sebesar Rp 200.000,00 yang dibayar tiap akhir bulan",
        optionA: "Rp 3.787.633,304",
        optionB: "Rp 6.787.636,304",
        optionC: "Rp 3.878.363,304",
        optionD: "Rp 6.878.363,304",
        correctOption: "optionC"
    },

  
    {
        question: "Hitunglah nilai tunai suatu anuitas seumur hidup yang tertunda 5 tahun bagi seseorang yang berusia 30 tahun dengan pembayaran setiap 4 bulan sebesar Rp300.000,00 yang pembayarannya dilakukan setiap awal periode pembayaran",
        optionA: "Rp 5.878.695,715",
        optionB: "Rp 6.787.695,715",
        optionC: "Rp 5.787.695,715",
        optionD: "Rp 6.878.695,715",
        correctOption: "optionA"
    },


    {
        question: "Tika yang berusia 30 tahun membeli polis asuransi jiwa seumur hidup. Hitunglah santunan yang akan diterima pewaris bila Tika menyerahkan premi sebesar Rp 50.000,00 setiap permulaan tahun selama 10 tahun pertama dan Rp 100.000,00 setiap akhir tahun antara usia 40 dan 55 tahun",
        optionA: "Rp5.158.826,47",
        optionB: "Rp3.158.826,47",
        optionC: "Rp5.826.158,47",
        optionD: "Rp3.826.158,47",
        correctOption: "optionB"
    },

    {
        question: "Andi yang berusia 30 tahun membeli polis asuransi jiwa dengan uang santunan sebesar Rp 15.000.000,00 . Hitunglah besar premi awal tahunan yang harus dibayar Andi, bila Andi membeli polis asuransi berjangka selama 10 tahun yang tertunda selama 5 tahun",
        optionA: "Rp 55.821,92",
        optionB: "Rp 55.192,82",
        optionC: "Rp 55.821,92",
        optionD: "Rp 88.192,82",
        correctOption: "optionD"
    },

    {
        question: "Suatu keluarga mempunyai 2 anak, masing-masing  berusia 1 tahun dan 11 tahun. Carilah peluang tepat seorang anak akan mati sebelum usia 50 tahun",
        optionA: "0,29103",
        optionB: "0,10329",
        optionC: "0,63103",
        optionD: "0,36329",
        correctOption: "optionA"
    },

    {
        question: "Seorang	mahasiswa menemukan fakta	bahwa	probabilitas aliran	listrik	di	kos	tempat	tinggalnya terputus	(listrik	padam)	per	minggu	adalah	7%.	Apabila	listrik	padam	adalah	variabel	random	dan	dengan	memakai	pendekatan	distribusi	binomial,	hitunglah probabilitas terjadi	1 kali	listrik	padam dalam	periode	4	minggu",
        optionA: "0.5222",
        optionB: "0.2522",
        optionC: "0.2252",
        optionD: "0.5525",
        correctOption: "optionC"
    },

    {
        question: "Seorang	mahasiswa menemukan fakta	bahwa	probabilitas aliran	listrik	di	kos	tempat	tinggalnya terputus	(listrik	padam)	per	minggu	adalah	7%.	Apabila	listrik	padam	adalah	variabel	random	dan	dengan	memakai	pendekatan	distribusi	binomial,	hitunglah probabilitas	listrik	tidak	pernah	padam	dalam	periode	4	minggu",
        optionA: "0.7481",
        optionB: "0.4871",
        optionC: "0.7148",
        optionD: "0.4187",
        correctOption: "optionA"
    },

    {
        question: "Seorang	mahasiswa menemukan fakta	bahwa	probabilitas aliran	listrik	di	kos	tempat	tinggalnya	terputus	(listrik	padam)	per	minggu	adalah	7%.	Apabila	listrik	padam	adalah	variabel	random	dan	dengan	memakai	pendekatan	distribusi	binomial,	hitunglah probabilitas terjadi	maksimum	2	kali	listrik	padam dalam	perioda 4	minggu",
        optionA: "0,9879",
        optionB: "0,9798",
        optionC: "0,9987",
        optionD: "0,9789",
        correctOption: "optionC"
    },

    {
        question: "Seorang mahasiswa mencatat	volum	pemakaian	air bulanan	(Q) di	kos	tempat	tinggalnya	dan	mendapati	bahwa	volum air	rerata yang	dipakai adalah	100 m3 dengan	simpangan	baku	8 m3.	Dengan	asumsi	bahwa	volum air	tersebut	berdistribusi	normal,	hitunglah probabilitas	volum	pemakaian air	kurang	daripada	110 m3, prob(Q <	110 m3)",
        optionA: "prob(Z >	-1.25)",
        optionB: "prob(Z <	-1.25)",
        optionC: "prob(Z >	1.25)",
        optionD: "prob(Z <	1.25)",
        correctOption: "optionD"
    },

    {
        question: "Seorang mahasiswa mencatat	volum	pemakaian	air bulanan	(Q) di	kos	tempat	tinggalnya	dan	mendapati	bahwa	volum air	rerata yang	dipakai adalah	100 m3 dengan	simpangan	baku	8 m3.	Dengan	asumsi	bahwa	volum air	tersebut	berdistribusi	normal,	hitunglah probabilitas	volum	pemakaian air	antara	94 s.d.	102 m3, prob(94 <	Q [m3]	<	102),",
        optionA: "prob(Z <	0.25)- prob(Z <	-0.75)",
        optionB: "prob(Z <	0.25)- prob(Z <	0.75)",
        optionC: "prob(Z <	0.75)- prob(Z <	-1.25)",
        optionD: "prob(Z <	0.75)- prob(Z <	1.25)",
        correctOption: "optionA"
    },

    {
        question: "Seorang mahasiswa mencatat	volum	pemakaian	air bulanan	(Q) di	kos	tempat	tinggalnya	dan	mendapati	bahwa	volum air	rerata yang	dipakai adalah	100 m3 dengan	simpangan	baku	8 m3.	Dengan	asumsi	bahwa	volum air	tersebut	berdistribusi	normal,	hitunglah probabilitas	volum	pemakaian air melebihi	112 m3,	prob(Q >	112 m3)",
        optionA: "prob(Z <-1.5)",
        optionB: "prob(Z <1.5)",
        optionC: "1	- prob(Z <-1.5)",
        optionD: "1	- prob(Z <1.5)",
        correctOption: "optionD"
    },

    {
        question: "Tentukan dan urutkan pasangan bilangan berikut dari yang memiliki FPB paling kecil (247,299),(299,4453)",
        optionA: "(247, 299), (4453, 299)",
        optionB: "(299, 4453), (247, 299)",
        optionC: "(299, 247), (299, 4453), ",
        optionD: "(4453, 299), (299, 247)",
        correctOption: "optionB"
    },

    {
        question: "Tentukan dan urutkan pasangan bilangan berikut dari yang memiliki FPB paling besar (247,299),(299,4453)",
        optionA: "(4453, 299),(247, 299) ",
        optionB: "(247, 299), (4453, 299)",
        optionC: "(4453, 299), (299, 247)",
        optionD: "(299, 247), (299, 4453)",
        correctOption: "optionB"
    },

    {
        question: "Data Encryption Standard merupakan salah satu contoh kriptosistem",
        optionA: "Hush Key",
        optionB: "Public Key",
        optionC: "Konvensional",
        optionD: "asymmetric key",
        correctOption: "optionC"
    },

    {
        question: "Ketika pengguna nirkabel melakukan otentikasi ke AP mana pun, keduanya melalui proses otentikasi empat langkah yang disebut",
        optionA: "4-way connection",
        optionB: "4-way handshake",
        optionC: "AP handshaking",
        optionD: "wireless handshaking",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
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
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
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

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
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
}