import {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight} from "./business-logic.js";
const buttonCalculate = document.querySelector(".form__submit-button");
const counterResultForm = document.querySelector(".counter__result");
const fieldEnergyNorm = document.querySelector("#calories-norm");

console.log(getEnergyMaintainWeight(), getEnergyLossWeight(), getEnergyGainWeight())

buttonCalculate.addEventListener("click", () => {
    console.log(getEnergyMaintainWeight(), getEnergyLossWeight(), getEnergyGainWeight())
    fieldEnergyNorm.textContent = String(getEnergyMaintainWeight());
})


