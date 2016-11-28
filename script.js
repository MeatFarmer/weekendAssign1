console.log('start');

var employeeArray= [];

var monthlySalaryTotal = function () {
  var salariesTotal = 0;
  for (var i = 0; i < employeeArray.length; i++){
  salariesTotal += Number(employeeArray[i][4]);
}
salariesTotal = salariesTotal/12;
console.log("Salary total:", salariesTotal);
document.getElementById("monthlySal").innerHTML = salariesTotal;
return (salariesTotal/12);
};

var myFunction = function() {
// stores the information from the input and stores it into the array
var firstName = document.getElementById('fname').value;
var lastName = document.getElementById('lname').value;
var idNum = document.getElementById('idnum').value;
var jobTitle = document.getElementById('title').value;
var annSal = document.getElementById('salary').value;
// pushes to the array
newEmployee = [firstName, lastName, idNum, jobTitle, annSal];
console.log(newEmployee);
employeeArray.push(newEmployee);
// clearing the input fields
document.getElementById('fname'). value = '';
document.getElementById('lname').value = '';
document.getElementById('idnum').value = '';
document.getElementById('title').value = '';
document.getElementById('salary').value = '';
console.log(employeeArray);
monthlySalaryTotal();
document.getElementById('MST').innerHTML = employeeArray;
};
