type StreetType = {
    title: string
}
type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}