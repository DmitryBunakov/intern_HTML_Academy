const LOSS_WEIGHT_RATE = 0.15;
const GAIN_WEIGHT_RATE = 0.15;
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const genderMale = document.querySelector("#gender-male");
const activityMinimal = document.querySelector("#activity-minimal");

const clearParameters = () => {
    age.value = 0;
    height.value = 0;
    weight.value = 0;
    genderMale.checked = true;
    activityMinimal.checked = true;
}

const isFilledParameters = () => {
    return age.value && height.value && weight.value;
}

const isExistParameter = () => {
    return age.value || height.value || weight.value;
}
const getNormMale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) + 5);
}
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
const getEnergyMaintainWeight = () => {
    return Math.round(getActivityRate() * getNorm());
}
const getEnergyLossWeight = () => {
    return Math.round(getEnergyMaintainWeight() - getEnergyMaintainWeight() * LOSS_WEIGHT_RATE);
}
const getEnergyGainWeight = () => {
    return Math.round(getEnergyMaintainWeight() + getEnergyMaintainWeight() * GAIN_WEIGHT_RATE);
}

export {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight, isFilledParameters, isExistParameter, clearParameters}

