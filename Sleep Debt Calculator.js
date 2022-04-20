const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
    }
    else if (day === 'thirsday'){
      return 6;
    }
    else if (day === 'wednesday'){
      return 7;
    }
    else if (day === 'tuesday'){
      return 8;
    }
    else if (day === 'friday'){
      return 6;
    }
    else if (day === 'saturday'){
      return 10;
    }
    else{
      return 6;
    }
    }
  
  const getActualSleepHours = () => {
   let sum = getSleepHours('monday') + getSleepHours('thirsday') + getSleepHours('wednesday') + getSleepHours('tuesday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  return sum;
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours > idealSleepHours) {
    console.log ('You got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours){
    console.log ('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    console.log ('You got the perfect amount of sleep');
  }
  
  }
  calculateSleepDebt();
  