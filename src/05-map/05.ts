export type ManType = {
   name: string
   age: number
}

export const createGreetingMessages = (peoples: ManType[]) => {
   return peoples.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`);
};