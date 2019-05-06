function timer() {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return { day, hours, minutes };
}

let wasReminded = false;

function reminder() {
    const time = timer();
    console.log(time);
    console.log(wasReminded);
    const { day, hours, minutes } = time;

    if (day < 6 && hours === 18 && minutes === 8 && wasReminded === false) {
        wasReminded = true;
        alert('Go and have some food');
    }
}

setInterval(reminder, 1000);
