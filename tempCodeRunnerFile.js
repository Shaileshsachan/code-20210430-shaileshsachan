classifyBMI = (bmi) => {
  let bmiCategory;
  let healthRisk;
  if (bmi <= 18.4) {
    bmiCategory = "Underweight";
    healthRisk = "Malnutrition risk";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal Weight";
    healthRisk = "Low Risk";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
    healthRisk = "Enhanced Risk";
  } else if (bmi >= 30 && bmi <= 34.9) {
    bmiCategory = "Moderately obese";
    healthRisk = "Medium Risk";
  } else if (bmi >= 35 && bmi <= 39.9) {
    bmiCategory = "Very severly obese";
    healthRisk = "Very high Risk";
  } else {
    bmiCategory = "Very Severly obese";
    healthRisk = "Very high Risk";
  }
  console.log(`${bmi}       ${bmiCategory}        ${healthRisk}`);
};