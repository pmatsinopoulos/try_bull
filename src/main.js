import longRunningFunction from "./longRunningFunction.js";

console.log("Background long running jobs with Bull...");

const main = function () {
  longRunningFunction();
};

export default main;

