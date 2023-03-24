// CALL BACK HELL TASK

let timer = document.createElement("div")
timer.style.textAlign = "center"
timer.style.webkitTextFillColor = "darkmagenta"
document.body.append(timer)
setTimeout(() => {
    timer.textContent = "10"
    setTimeout(() => {
        timer.textContent = "9"
        setTimeout(() => {
            timer.textContent = "8"
            setTimeout(() => {
                timer.textContent = "7"
                setTimeout(() => {
                    timer.textContent = "6"
                    setTimeout(() => {
                        timer.textContent = "5"
                        setTimeout(() => {
                            timer.textContent = "4"
                            setTimeout(() => {
                                timer.textContent = "3"
                                setTimeout(() => {
                                    timer.textContent = "2"
                                    setTimeout(() => {
                                        timer.textContent =  "1"  
                                        setTimeout(() => {
                                            timer.textContent = "Happy Independence Day"

                                        }, 1000)
                                    } ,1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

