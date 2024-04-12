export const DAYS_IN_WEEK = 7;


export const TOTAL_WEEKS = 52;

export const SQUARE_SIZE = 10;

export const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

export function getRange(count) {
    const arr = [];
    for (let idx = 0; idx < count; idx += 1) {
      arr.push(idx);
    }
  return arr;
}

export function getDifferenceBetweenTwoDates(startDate, endDate){
  var startDateinUTC = new Date (Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()));
  var endDateinUTC = new Date (Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()));

  return Math.ceil(Math.abs(endDateinUTC - startDateinUTC) / MILLISECONDS_IN_A_DAY);
}

//testing the multiple github account