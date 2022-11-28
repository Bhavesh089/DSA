// console.log("hello");

// const moment = require("moment/moment");
var moment = require("moment-timezone");
// let i = 20;

// for (let j = 1; j <= i; j++) {
//   if ((j + "").length == 1) {
//     j = "0" + j;
//   }
//   console.log(j);
// }

// const h = moment("2022-11-16 02:05").utc().format("YYYY-MM-DD HH:mm");
// const i = moment("2022-11-16 02:05").format("YYYY-MM-DD HH:mm").valueOf();
//server time
const OFFSET = "+08:00";

const serverTimeUtc = moment().utc().format("YYYY-MM-DD HH:mm");
const serverTime = moment().local().format("YYYY-MM-DD HH:mm");
console.log(serverTimeUtc, serverTime, "this is servertime------>");
console.log(new Date("2022-11-16 01:00").getTimezoneOffset());
//convert time to utc
var utcStart = moment("2022-11-16 22:00", "YYYY-MM-DD HH:mm")
  .utc()
  .format("YYYY-MM-DD HH:mm");

console.log(utcStart, "utc");
var isoDateString = new Date("2022-11-16 01:00").toISOString().split("T");
console.log(isoDateString[0], "utc date iso");
console.log(isoDateString[1].substring(0, 5), "utc time iso");
console.log(
  isoDateString[0] + " " + isoDateString[1].substring(0, 5),
  "mixed--->"
);
const guess = moment("2022-11-17 15:00", "YYYY-MM-DD HH:mm")
  .utc()
  .tz(moment.tz.guess());
var utcDate = moment
  .tz("2022-11-17 05:30", "YYYY-MM-DD HH:mm", moment.tz.guess())
  .utc()
  .format("YYYY-MM-DD HH:mm");
console.log(utcDate, "this is guess-->");
console.log(moment.tz.guess(), "this is guess-->");
// var offset = new Date().getTimezoneOffset();

// const offseeet = moment().format("Z");
// console.log(offset, "off");
// console.log(moment().format("Z"), "uuu");

// moment().utcOffset("+08:00");;
//covert utc to local
var stillUtc = moment.utc("2022-11-18 09:17").toDate();
var localTime = moment(stillUtc).local().format("YYYY-MM-DD HH:mm");
console.log(
  moment(localTime).format("YYYY-MM-DD HH:mm"),
  "after converting local-->"
);
console.log(utcStart);
console.log(localTime, "------------->");
// var f = moment(localTime)
//   .subtract(moment().utcOffset(), "minutes")
//   .format("YYYY-MM-DD HH:mm");
// console.log(f, "this--->");
// // let date = new Date("2022-11-16 15:50 UTC");
// // console.log(date, "thisi");
// console.log(stillUtc, "utc--->");
// console.log(utcStart);
// console.log(moment().utcOffset(), "hi");
// console.log(localTime, "this is local time");

// var localDate = moment
//   .utc("2022-11-17 16:00")
//   .utcOffset(moment().format("Z"))
//   .format("YYYY-MM-DD HH:mm");

// console.log(localDate, "locakhfaslkdhfkl---->");
// var localDate2 = moment
//   .utc("2022-11-17 16:00")
//   .tz(moment().format("Z"))
//   .format();

// console.log(localDate2);
// let localDate1 = moment("2022-11-15 08:30")
//   .subtract(moment().utcOffset(), "minutes")
//   .format("2022-11-15 08:30");
// console.log(localDate, localDate2, "this is local date==>");

/* eslint new-cap: ["error", { "newIsCap": false }] */
import moment from "moment-timezone";

export const convertUtcLocalTime = (time) => {
  // localTime = moment.utc(time).utcOffset(offset).local().format('YYYY-MM-DD');
  const guess = moment.utc(time).tz(moment.tz.guess());
  const localTime = guess.format("YYYY-MM-DD HH:mm");

  return localTime;
};

export const convertUtc = (time) => {
  const isoDateString = new Date(time).toISOString().split("T");
  return `${isoDateString[0]} ${isoDateString[1].substring(0, 5)}`;
};

// export default convertUtcLocalTime;
