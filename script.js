const countDownElement = document.getElementById('countDown');
const resetValue = document.querySelector('.resetValue');
let startCount = 0;
let intervalId;
var a;
var isStopped = true;

const startTimer = () => {
    if (isStopped){
        intervalId = setInterval(() => {
            countDownElement.innerText = startCount++;
        }, 1000)
        console.log(intervalId);
        isStopped = false;
    }
};

const stopTimer = () => {
    // for stoping the timeiner we are using clear interval
    console.log(intervalId);
    clearInterval(intervalId);
    isStopped = true;
};

const resetTimer = () => {
    startCount = 0;
    clearInterval(intervalId);
    isStopped = true;
    countDownElement.innerText = startCount;
};

const getTimer = () => {
    const newPara = document.createElement('p');
    newPara.innerText = `The time stops at ${startCount-1}`;
    resetValue.append(newPara);
};

const clearTimer = () =>{
    resetValue.innerText = "";
}

document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".time_btn").addEventListener("click", getTimer);
document.querySelector(".clear_btn").addEventListener("click", clearTimer);