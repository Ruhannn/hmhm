function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  return average;
}
const assignment1Marks = 60;
const assignment2Marks = 56;
const assignment3Marks = 58;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log("My Average so far:", myAverage);

function getAverage(assignmentMarks) {
  const total = assignmentMarks.reduce((sum, mark) => sum + mark, 0);
  const average = total / assignmentMarks.length;
  return average;
}

const assignmentMarks = [60, 56, 58];


var myAverage = getAverage(assignmentMarks);
console.log("My Average so far:", myAverage);

