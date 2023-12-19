//Grade Calculator
function calculateGrade(score) {

    let grade;
    if (score > 79){
       grade = "A"
    }
    else if (score >= 60){
      grade="B"
    }
    else if (score >=50){
      grade="C"
    }
    else if (score >=40){
      grade="D"
    }
    else{
        grade ="E"
        
    }
    console.log(`YOur grade is,${grade}`)
    }
    calculateGrade(71)