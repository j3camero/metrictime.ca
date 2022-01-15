document.addEventListener('DOMContentLoaded', (event) => {
    Update();
    setInterval(Update, 200);
});

function Update() {
    const now = new Date();
    const gregorianYear = now.getFullYear();
    const holoceneYear = gregorianYear + 10000;
    const start = new Date(gregorianYear, 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const dateAndYearText = `Day ${dayOfYear} of year ${holoceneYear}`;
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const msSinceMidnight = now - midnight;
    const secondsSinceMidnight = Math.floor(msSinceMidnight / 1000);
    const ks = secondsSinceMidnight / 1000;
    let formatted = ks.toFixed(3);
    if (formatted.length === 5) {
	formatted = '0' + formatted;
    }
    const timeOfDayLabel = document.getElementById('timeofday');
    timeOfDayLabel.innerText = formatted;
    const dateAndYearLabel = document.getElementById('dateandyear');
    dateAndYearLabel.innerText = dateAndYearText;
}
