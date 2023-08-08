let darkBtn = document.querySelector("button")
let hrHand = document.querySelector(".hr-hand")
let minHand = document.querySelector(".min-hand")
let secHand = document.querySelector(".sec-hand")
let timeText = document.querySelector(".display-time")
let dateText = document.querySelector(".date")
let body = document.querySelector("body")
let clock = document.querySelector(".clock")
let span = document.querySelector(".date-display .day")



function darkMode() {
    body.classList.toggle("toggle")
    clock.classList.toggle("active")
    span.classList.toggle("active")
    if (darkBtn.innerHTML === 'Dark mode') {
        darkBtn.innerHTML = 'Light mode'
        darkBtn.style.background = 'white'
        darkBtn.style.color = 'black'
        minHand.style.background = 'white'
        hrHand.style.background = 'white'
    } else {
        darkBtn.innerHTML = 'Dark mode'
        darkBtn.style.background = 'black'
        darkBtn.style.color = 'white'
        minHand.style.background = 'black'
        hrHand.style.background = 'black'
    }
    
}

darkBtn.addEventListener("click", darkMode)



function displayTime() {
    let date = new Date()
    let currDayWk = date.toLocaleDateString('en-US', {weekday: 'long'})
    let currMth = date.toLocaleDateString("en-US", { month: 'short' })
    let currDay = date.toLocaleDateString("en-US", {day: '2-digit'})
    let hr = date.getHours()
    let min = date.getMinutes()
    let secs = date.getSeconds()
    
    secHand.style.transform = `translate(-50%, -100%) rotate(${(secs / 60) * 360}deg)`
  minHand.style.transform = `translate(-50%, -100%) rotate(${(min + (secs / 60)) / 60 * 360}deg)`
    hrHand.style.transform = `translate(-50%, -100%) rotate(${((hr - 12) + min / 60 + secs / 3600) / 12 * 360}deg)`


    if (hr >= 12) {
        timeText.innerHTML = `${hr - 12}:${min} PM`
        if (min > 0 && min < 10){
            timeText.innerHTML = `${hr - 12}:0${min} PM`
        }
        else{
            timeText.innerHTML = `${hr - 12}:${min} PM`
        }
    }
    else {
     
        timeText.innerHTML = `${hr}:${min} AM`
    }
    dateText.innerHTML = `${currDayWk}, ${currMth}`
    span.innerHTML = `${currDay}`
}
window.addEventListener("load", displayTime)
setInterval(displayTime, 1000)