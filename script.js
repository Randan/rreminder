const reminders = [
    {
        name: "breakfast",
        time: {
            hours: 21,
            minutes: 13
        },
        week: [1, 2, 3, 4, 5],
        message: "Go and have a breakfast",
        wasReminded: false
    },
    {
        name: "lunch",
        time: {
            hours: 21,
            minutes: 14
        },
        week: [1, 2, 3, 4, 5],
        message: "Go and have a lunch",
        wasReminded: false
    },
    {
        name: "dinner",
        time: {
            hours: 21,
            minutes: 15
        },
        week: [1, 2, 3, 4, 5],
        message: "Go and have a dinner",
        wasReminded: false
    }
];

// console.log(reminders);

function timer() {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); // TODO: remove seconds

    return { day, hours, minutes, seconds }; // TODO: remove seconds
}

// let wasReminded = false;

function reminder() {
    const time = timer();
    // console.log(time);
    const { day, hours, minutes, seconds } = time; // TODO: remove seconds
    $('#timer').text(`${hours}:${minutes}:${seconds}`);
    
    $('.item').remove();

    reminders.forEach(reminder => {

        // console.log(reminder.name, reminder.wasReminded);
        $('#reminders').append(`<div class="item">time: ${reminder.time.hours}:${reminder.time.minutes} - "${reminder.message}" - was reminded: ${reminder.wasReminded}</div>`);

        reminder.wasReminded === false
            ? (
                day < 6 && hours === reminder.hours && minutes === reminder.minutes
                    && (reminder.wasReminded = true)
                    && console.log(reminder.name, reminder.wasReminded)
                    // && alert(reminder.message) // TODO: uncomment
            )
            : (
                minutes === reminder.minutes + 1
                    && (reminder.wasReminded = false)
                    && console.log(reminder.name, reminder.wasReminded)
            );
    });

}

setInterval(reminder, 1000);
