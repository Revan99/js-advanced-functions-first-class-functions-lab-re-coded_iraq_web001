const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers){
  return drivers.slice(drivers.length-2,drivers.length);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num){
  return function(fare){
    return fare*num
  }
}
function fareDoubler(dub){
  const a = createFareMultiplier(10)
  return a(dub)
}