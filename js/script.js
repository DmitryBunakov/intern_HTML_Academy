import {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight, isFilledParameters, isExistParameter, clearParameters} from "./business-logic.js";
import {showAlert} from "./utils.js";
const buttonCalculate = document.querySelector(".form__submit-button");
const resetButton = document.querySelector(".form__reset-button");
const counterResultForm = document.querySelector(".counter__result");
const fieldEnergyNorm = counterResultForm.querySelector("#calories-norm");
const fieldEnergyMinimal = counterResultForm.querySelector("#calories-minimal");
const fieldEnergyMaximal = counterResultForm.querySelector("#calories-maximal");
const inputsGroup = document.querySelector(".inputs-group");

const inputsGroupChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilledParameters()) {
        buttonCalculate.disabled = false;
    }
}
inputsGroup.addEventListener("change", inputsGroupChangeHandler);

const buttonCalculateClickHandler = function (evt) {
    evt.preventDefault();
    if (isFilledParameters()) {
        fieldEnergyNorm.textContent = getEnergyMaintainWeight().toLocaleString();
        fieldEnergyMinimal.textContent = getEnergyLossWeight().toLocaleString();
        fieldEnergyMaximal.textContent = getEnergyGainWeight().toLocaleString();
    } else {
        showAlert(`заполните все параметры: возраст, рост, вес`);
        fieldEnergyNorm.textContent = "не определено";
        fieldEnergyMinimal.textContent = "не определено";
        fieldEnergyMaximal.textContent = "не определено";
    }
    counterResultForm.classList.remove("counter__result--hidden");
}
buttonCalculate.addEventListener("click", buttonCalculateClickHandler);

const inputGroupForResetChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isExistParameter()) {
        resetButton.disabled = false;
    }
}
inputsGroup.addEventListener("change", inputGroupForResetChangeHandler);

const resetButtonClickHandler = function () {
    buttonCalculate.disabled = true;
    resetButton.disabled = true;
    counterResultForm.classList.add("counter__result--hidden");
    clearParameters();
}

resetButton.addEventListener("click", resetButtonClickHandler)
