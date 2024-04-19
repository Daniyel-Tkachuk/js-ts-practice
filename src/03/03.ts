type TechnologiesType = {
    id: number
    title: string
}
type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
};

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
};

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName;
};