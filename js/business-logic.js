const LOSS_WEIGHT_RATE = 0.15;
const GAIN_WEIGHT_RATE = 0.15;
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const getNormMale = () => {
    return (10 * parseInt(weight.textContent, 10) + (6.25 * parseInt(height.textContent, 10)) - (5 * parseInt(age.textContent, 10)) + 5);
}
const getNormFemale = () => {
    return (10 * parseInt(weight.textContent, 10) + (6.25 * parseInt(height.textContent, 10)) - (5 * parseInt(age.textContent, 10)) - 161);
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
    return getActivityRate() * getNorm();
}
const getEnergyLossWeight = () => {
    return getEnergyMaintainWeight() - getEnergyMaintainWeight() * LOSS_WEIGHT_RATE;
}
const getEnergyGainWeight = () => {
    return getEnergyMaintainWeight() + getEnergyMaintainWeight() * GAIN_WEIGHT_RATE;
}

export {getEnergyMaintainWeight, getEnergyLossWeight, getEnergyGainWeight}

