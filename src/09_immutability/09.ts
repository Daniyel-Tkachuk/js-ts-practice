export type UserType = {
   name: string
   hair: number
   address: {
      city: string
      house: number
   }
};

export type LaptopType = {
   title: string
}

export type UserWithLaptopType = UserType & {
   laptop: LaptopType
}


export const makeHairstyle = (u: UserType, power: number) => {
   return {
      ...u,
      hair: u.hair / 2
   };
};

export const moveUser = (u: UserWithLaptopType, city: string) => {
   return {
      ...u,
      address: {
         ...u.address,
         title: city
      }
   }
};
