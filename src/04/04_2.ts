import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
   city.houses = city.houses.filter(el => el.address.street.title !== street);
};

export const getHousesOnTheStreet = (houses: HouseType[], street: string) => {
   return houses.filter(el => el.address.street.title === street);
};

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], number: number) => {
   return buildings.filter(b => b.staffCount > number);
}