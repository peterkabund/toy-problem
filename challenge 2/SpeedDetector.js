//We declare a function that takes the recorded speed as an argument 
function Speedchecker(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
   
    //Checking if the speed limit is "ok"
    if (speed <= speedLimit) {
      return "ok"
    }
      //Excess speed calculation according to criteria
      const abovelimit= speed - speedLimit;
      const demeritPoints = Math.floor(abovelimit / kmPerDemeritPoint);
      //We disqualify the driver if the demerit points>12
      if (demeritPoints >= maxDemeritPoints) {
        return "License suspended";
      } else {
        //we display the demerit points
        return ("Your demerit points are " + demeritPoints);
      }
    //We try testing by calling the function while passing a speed
      //Speedchecker(100);
     }
    console.log(Speedchecker(100))