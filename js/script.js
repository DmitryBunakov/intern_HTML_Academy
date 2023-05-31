import {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight, isFilledParameters, isExistParameter, clearParameters, isValidateParameters} from "./business-logic.js";
import {showAlert} from "./utils.js";
const buttonCalculate = document.querySelector(".form__submit-button");
const resetButton = document.querySelector(".form__reset-button");
const counterResultForm = document.querySelector(".counter__result");
const fieldEnergyNorm = counterResultForm.querySelector("#calories-norm");
const fieldEnergyMinimal = counterResultForm.querySelector("#calories-minimal");
const fieldEnergyMaximal = counterResultForm.querySelector("#calories-maximal");
const inputsGroup = document.querySelector(".inputs-group");
/**
 * включаем кнопку Рассчитать при заполненных параметрах
 * @param evt
 */
const inputsGroupChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilledParameters()) {
        buttonCalculate.disabled = false;
    }
}
inputsGroup.addEventListener("change", inputsGroupChangeHandler);
/**
 * после проверки рассчитываем нормы калорий или указываем ошибку
 * @param evt
 */
const buttonCalculateClickHandler = function (evt) {
    evt.preventDefault();
    if (isFilledParameters() && isValidateParameters()) {
        fieldEnergyNorm.textContent = getEnergyMaintainWeight().toLocaleString();
        fieldEnergyMinimal.textContent = getEnergyLossWeight().toLocaleString();
        fieldEnergyMaximal.textContent = getEnergyGainWeight().toLocaleString();
    } else {
        showAlert(`заполните все параметры: возраст (в годах), рост(в см), вес(в кг)`);
        fieldEnergyNorm.textContent = "не определено";
        fieldEnergyMinimal.textContent = "не определено";
        fieldEnergyMaximal.textContent = "не определено";
    }
    counterResultForm.classList.remove("counter__result--hidden");
}
buttonCalculate.addEventListener("click", buttonCalculateClickHandler);
/**
 * включаем кнопку Очистить при изменении любого параметра
 * @param evt
 */
const inputGroupForResetChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isExistParameter()) {
        resetButton.disabled = false;
    }
}
inputsGroup.addEventListener("change", inputGroupForResetChangeHandler);
/**
 * отключаем кнопки расчета и очистки, убираем форму результата, чистим параметры
 */
const resetButtonClickHandler = function () {
    buttonCalculate.disabled = true;
    resetButton.disabled = true;
    counterResultForm.classList.add("counter__result--hidden");
    clearParameters();
}

resetButton.addEventListener("click", resetButtonClickHandler)
