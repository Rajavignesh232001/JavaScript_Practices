// Array Iteration

let dailyRoutine = ["Wake up", "Eat", "Workout", "Sleep"];
// for of
for (let routine of dailyRoutine) {
  console.log(routine);
}
// for in
for (let routine in dailyRoutine) {
  console.log(routine, dailyRoutine[routine]);
}
// for each
dailyRoutine.forEach(function (routine, routineIndex) {
  console.log(routineIndex, routine);
});
