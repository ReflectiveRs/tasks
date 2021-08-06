function humanReadableTime(seconds) {
    let hour = Math.floor(seconds/3600);
    let minute = Math.floor((seconds%3600)/60);
    let second = Math.floor((seconds%3600)%60);

    hour = hour.toString().length < 2 ? "0"+hour : hour;
    minute = minute.toString().length < 2 ? "0"+minute : minute;
    second = second.toString().length < 2 ? "0"+second : second;

    return hour + ':' + minute + ':' + second;
}

console.log(humanReadable(86399));	// '23:59:59'