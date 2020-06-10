const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers){
  return drivers.slice(drivers.length-2,drivers.length);
}
const selectingDriver = [returnFirstTwoDrivers, returnLastTwoDrivers]