import {UserType} from "./08.test";

export const increaseAge = (u: UserType) => {
   u.age++
}

export const letterSort = (arr: string[]) => {
   arr.sort();
   console.log(arr)
}