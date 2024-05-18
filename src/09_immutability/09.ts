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

export type UserWithBooksType = UserType & {
   books: string[]
}


export const makeHairstyle = (u: UserType, power: number) => {
   return {
      ...u,
      hair: u.hair / power
   };
};

export const moveUser = (u: UserWithLaptopType, city: string) => {
   return {
      ...u,
      address: {
         ...u.address,
         city: city
      }
   }
};

export const upgradeUserLaptop = (u: UserWithLaptopType, laptopTitle: string) => {
   return {
      ...u,
      laptop: {
         ...u.laptop,
         title: laptopTitle
      }
   }
};

export const addNewBooksToUser = (u: UserWithBooksType & UserWithLaptopType, arr: string[]) => {
   return {
      ...u,
      books: [...u.books, ...arr]
   }
}