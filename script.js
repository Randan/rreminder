function timer() {
    const date = new Date();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); // TODO: remove seconds

    return { day, hours, minutes, seconds }; // TODO: remove seconds
};

function getData() {
    const requestURL = './db.json';
    const request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const data = request.response;
        init(data);
    }
};

function reminder(data) {
    const time = timer();
    const { day, hours, minutes, seconds } = time; // TODO: remove seconds
    const { reminders } = data;

    $('#timer').text(`${hours}:${minutes}:${seconds}`);
    $('.item').remove();

    reminders.forEach(reminder => {
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

        $('#reminders')
            .append(`
                <div class="item">
                    time: ${reminder.time.hours}:${reminder.time.minutes} /// ${reminder.name} /// was reminded: ${reminder.wasReminded}
                </div>
            `);
    });

};

function init(data) {
    setInterval(() => reminder(data), 1000);
};

// Init
getData();