const grossIncome = 0
let payee =0
const nhifDeductions=0
const nssfDeduction=0
  
  // paye rates
    const payeRates = {
      "until 24,000": 10,
      "24,001 - 40,000": 15,
      "40,001 - 60,000": 20,
      "60,001 - 80,000": 25,
      "Above 80,000": 30
    };
      // nhif rates
    const nhifRates = {
      "until 5,999": 150,
      "6,000 - 7,999": 300,
      "8,000 - 11,999": 400,
      "12,000 - 14,999": 500,
      "15,000 - 19,999": 600,
      "20,000 - 24,999": 750,
      "25,000 - 29,999": 850,
      "30,000 - 34,999": 900,
      "35,000 - 39,999": 950,
      "40,000 - 44,999": 1000,
      "45,000 - 49,999": 1100,
      "50,000 - 59,999": 1200,
      "60,000 - 69,999": 1300,
      "70,000 - 79,999": 1400,
      "80,000 - 89,999": 1500,
      "90,000 - 99,999": 1600,
      "100,000 - 109,999": 1700,
      "110,000 - 119,999": 1800,
      "Above 120,000": 2000
    };
  
  
    // Calculate payee

    function payeecalc(grossIncome) {
      if (grossIncome <= 24000) {
        return payee= (grossIncome * 0.1);
      } else if (grossIncome > 24000 && grossIncome <= 32333) {
        return payee=(grossIncome * 0.25);
      } else if ( grossIncome > 32333 && grossIncome <= 500000) {
        return payee= (grossIncome * 0.3);
      } else if (grossIncome > 500000 && grossIncome <= 800000) {
        return payee = (grossIncome * 0.325);
      } else if (grossIncome >800000) {
        return payee = (grossIncome * 0.35);
      } else {
        return
      }
    } 
    // function to calculate nssf deductions
    function nssfrates(grossIncome) {
        return (grossIncome * 0.06);
      }
    
    //nhif calculation
    function calculatenhif(grossIncome) {
      let deduction = 0;
        if (grossIncome <= 5999) {
          deduction = 150;
        } 
        else if (grossIncome >= 6000 && grossIncome <= 7999) {
          deduction = 300;
        } 
        else if (grossIncome >= 8000 && grossIncome <= 11999) {
          deduction = 400;
        } 
        else if (grossIncome >= 12000 && grossIncome <= 14999) {
          deduction = 500;
        } 
        else if (grossIncome >= 15000 && grossIncome <= 19999) {
          deduction = 600;
        } 
        else if (grossIncome >= 20000 && grossIncome <= 24999) {
          deduction = 750;
        } 
        else if (grossIncome >= 25000 && grossIncome <= 29999) {
          deduction = 850;
        } 
        else if (grossIncome>= 30000 && grossIncome <= 34999) {
          deduction = 900;
        } 
        else if (grossIncome >= 35000 && grossIncome <= 39999) {
          deduction = 950;
        } 
        else if (grossIncome >= 40000 && grossIncome <= 44999) {
          deduction = 1000;
        } 
        else if (grossIncome >= 45000 && grossIncome <= 49999) {
          deduction = 1100;
        } 
        else if (grossIncome >= 50000 && grossIncome <= 59999) {
          deduction = 1200;
        } 
        else if (grossIncome >= 60000 && grossIncome <= 69999) {
          deduction = 1300;
        } 
        else if (grossIncome >= 70000 && grossIncome <= 79999) {
          deduction = 1400;
        } 
        else if (grossIncome >= 80000 && grossIncome <= 89999) {
          deduction = 1500;
        } 
        else if (grossIncome >= 90000 && grossIncome <= 99999) {
          deduction = 1600;
        } 
        else {
          deduction = 1700;
      }
      return deduction;
    }

    //  net salary calculation
    function netSalary(grossIncome)
    {
     const payee = payeecalc(grossIncome);
     const nhifDeductions= calculatenhif(grossIncome);
     const nssfDeduction= nssfrates(grossIncome);

      const netSalary = grossIncome -( payee + nhifDeductions + nssfDeduction); 

      return netSalary;
    }
  
  
    //testing 

    console.log("Your net Salary is ",netSalary(70000))