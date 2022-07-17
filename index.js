
const input = '02/01/1900' // Input date format "DD/MM/YYYY".

/* Split '/' for get day, month and year from Input. */
const dayInput = input.split('/')[0]
const monthInput = input.split('/')[1]
const yearInput = input.split('/')[2]

/* [1] This fucntion for get year from 1990 to year input. */
const findAllYear = () => {
    let arrYear = new Array;  // Variable declaration arrYear for save value all year.

    for (let i = yearInput; i >= 1900; i--) {
        arrYear.unshift(i) // Unshift for push before current value in array.
    }

    return arrYear;
}

/* [2] This fucntion for get year is leap year or not leap year. */
const findYearIsLeapOrNot = (isLeapYear) => {
    let allYear = findAllYear(yearInput); // Variable declaration allYear recieve value from function [1]findAllYear.
    let leapYear = new Array;  // Variable declaration leapYear for save value leap year.
    let notLeapYear = new Array; // Variable declaration notLeapYear for save value not leap year.

    /* this loop for sort value that modulate whit 4 */
    for (let i in allYear) {
        if (i % 4 == 0) {
            leapYear.push(allYear[i]) // Divisible by 4 and settle value will save in leapYear.
        } else {
            notLeapYear.push(allYear[i]) // But not value will save in notLeapYear.
        }
    }

    /* Check if you want leap yeay will return leapYear or want not leap year will retuen notLeapYear .*/
    return isLeapYear ? leapYear : notLeapYear;
}

/* [3] This fucntion for check year input is leap year or not leap year. */
const checkCurrentYearIsLeapYear = () => {

    let leapYear = findYearIsLeapOrNot(true) // Get leap year value from function [0]findYearIsLeapOrNot.
    let isLeapYear = leapYear.some((el) => el == yearInput) // Check year input in leapYear  ... will return value is boolean
    return isLeapYear ? true : false;
}

/* [4] This fucntion for sum day in all year, except current year. */
const getAllDayBeforeCurrentYear = () => {
    let isLeapYear = checkCurrentYearIsLeapYear(); // Get status of year input is leapYear or not, fron function [3]checkCurrentYearIsLeapYear.
    let leapYear = findYearIsLeapOrNot(true) // Get leap year value from function [0]findYearIsLeapOrNot.
    let notLeapYear = findYearIsLeapOrNot(false) // Get not leap year value from function [0]findYearIsLeapOrNot.

    /* This condition for remove current year */
    if (isLeapYear) {
        leapYear.pop();
    } else {
        notLeapYear.pop();
    }

    let dayInLeap = leapYear.length * 366; // caluldate day in leap year
    let dayNotLeap = notLeapYear.length * 365; // caluldate day in not leap year

    // return summary day
    return dayInLeap + dayNotLeap;
}

/* [5] This fucntion for sum day in current year. */
const getDayInCurrentYear = () => {
    let isLeapYear = checkCurrentYearIsLeapYear(); // Get status of year input is leapYear or not, fron function [3]checkCurrentYearIsLeapYear.
    const dayInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Variable declaration value day in month

    /* Sum value day in month check from input month */
    let day = 0;
    for (let i = 0; i < monthInput - 1; i++) {
        day += dayInMonth[i]
    }
    // return summary day + day input we will receive amount day in input year.
    return day + dayInput;
}

/* [6] This fucntion for sum all day form 01/01/1900 to input date */
const getTotalDay = () => {
    return getAllDayBeforeCurrentYear() + getDayInCurrentYear()
}

/* [7] This fucntion for find day in week */
const findDayInWeek = (amountDay) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[amountDay % 7]
}

console.log(`Day in week of ${input} is `, findDayInWeek(getTotalDay()))


