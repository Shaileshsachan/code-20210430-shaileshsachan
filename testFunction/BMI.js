function BMI(heightMeter, WeightKg) {
  bmi = (WeightKg / heightMeter ** 2).toFixed(2);
  return parseFloat(bmi);
}
module.exports = BMI;
