const LOSS_WEIGHT_RATE = 0.15;
const GAIN_WEIGHT_RATE = 0.15;
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const genderMale = document.querySelector("#gender-male");
const activityMinimal = document.querySelector("#activity-minimal");
/**
 * очистка параметров
 */
const clearParameters = () => {
    age.value = "";
    height.value = "";
    weight.value = "";
    genderMale.checked = true;
    activityMinimal.checked = true;
}
/**
 * проверка на корректность введенных параметров
 * @returns {boolean}
 */
const isValidateParameters = () => {
    return age.value > 0 && age.value < 130 && height.value > 60 && height.value < 250 && weight.value > 2 && weight.value < 500
}
/**
 * проверка заполненности всех параметров
 * @returns {string}
 */
const isFilledParameters = () => {
    return age.value && height.value && weight.value;
}
/**
 * проверка заполненности хотя бы одного параметра
 * @returns {string}
 */
const isExistParameter = () => {
    return age.value || height.value || weight.value;
}
/**
 * рассчитать норму калорий для мужчин
 * @returns {number}
 */
const getNormMale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) + 5);
}
/**
 * рассчитать норму калорий для женщин
 * @returns {number}
 */
const getNormFemale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) - 161);
}
const getNorm = () => {
    const genderMale = document.querySelector("#gender-male");
    if (genderMale.checked) {
        return getNormMale();
    }
    return getNormFemale();
}
/**
 * определение коэффициента активности
 * @returns {number}
 */
const getActivityRate = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    switch (activityValue) {
        case "min":
            return 1.2;
        case "low":
            return 1.375;
        case "medium":
            return 1.55;
        case "high":
            return 1.725;
        case "max":
            return 1.9;
    }
}
/**
 * рассчет калорий для поддержания веса
 * @returns {number}
 */
const getEnergyMaintainWeight = () => {
    return Math.round(getActivityRate() * getNorm());
}
/**
 * рассч
 * @returns {number}
 */
const getEnergyLossWeight = () => {
    return Math.round(getEnergyMaintainWeight() - getEnergyMaintainWeight() * LOSS_WEIGHT_RATE);
}
const getEnergyGainWeight = () => {
    return Math.round(getEnergyMaintainWeight() + getEnergyMaintainWeight() * GAIN_WEIGHT_RATE);
}

export {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight, isFilledParameters, isExistParameter, clearParameters, isValidateParameters}

