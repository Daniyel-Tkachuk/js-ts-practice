import {CityType, GovernmentBuildingsType, HouseType} from "../02_objects/02";

export const addMoneyBudget = (building: GovernmentBuildingsType, num: number) => {
    building.budget += num;
};

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};

export const toFireStaff = (building: GovernmentBuildingsType, num: number) => {
    building.staffCount -= num;
};

export const toHireStaff = (building: GovernmentBuildingsType, num: number) => {
    building.staffCount += num;
};

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`;
};