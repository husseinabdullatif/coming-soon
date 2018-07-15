const countDown = document.querySelector(`.count-down`);
let launchDate = new Date(`Jul 2,2019,20:44:40`);
let intVl = setInterval(()=>{
    let now = new Date();
    let distance = launchDate-now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds = Math.floor((distance%(1000*60))/(1000));
    countDown.innerHTML = `<div class="bg-primary">${days}<p>Days</p></div></div>
                           <div>${hours}<p class="text-primary">Hours</p></div></div>
                           <div>${minutes}<p class="text-primary">Minutes</p></div></div>
                           <div>${seconds}<p class="text-primary">seconds</p></div></div>`;
    if (distance < 0){
        clearInterval(intVl);
        countDown.innerHTML = `<h1 class="display-4 text-primary">congratulation</h1>`
    }
},1000);