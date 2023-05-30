import {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight} from "./business-logic.js";
const buttonCalculate = document.querySelector(".form__submit-button");
const counterResultForm = document.querySelector(".counter__result");
const fieldEnergyNorm = document.querySelector("#calories-norm");


buttonCalculate.addEventListener("click", (evt) => {
    evt.preventDefault();
    const weight = document.querySelector("#weight").value;
    fieldEnergyNorm.textContent = getEnergyMaintainWeight();
})


