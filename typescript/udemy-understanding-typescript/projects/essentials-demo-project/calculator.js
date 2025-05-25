"use strict";
// data;
// initial amount
// annual contribution
// expected return
// duration
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return "Duration must be greater than zero.";
    }
    if (expectedReturn < 0) {
        return "Expected return must be at least zero.";
    }
    let total = initialAmount;
    let totalInterestEarned = 0;
    let totalContributions = 0;
    const annualResults = [];
    for (let i = 1; i <= duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i}`,
            totalInvestment: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
}
function printResult(result) {
    if (typeof result === "string") {
        console.log(result);
        return;
    }
    for (const yearEndResult of result) {
        console.log(yearEndResult.year);
        console.log(`Total Investment: ${yearEndResult.totalInvestment.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log("-------------------------");
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const results = calculateInvestment(investmentData);
printResult(results);
