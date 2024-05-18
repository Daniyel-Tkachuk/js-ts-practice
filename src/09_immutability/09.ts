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

export type UserWithCompaniesType = UserType & {
   companies: Array<{id: number, title: string}>
}

export type NewObjectCompanies = {
   [key: string]: {id: number, title: string}[]
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
};

export const updateBooks = (u: UserWithBooksType & UserWithLaptopType,
                            oldBook: string,
                            newBook: string) => {
  return {
     ...u,
     books: u.books.map(b => b === oldBook ? newBook : b)
  }
};

export const removeBook = (u: UserWithBooksType & UserWithLaptopType, bookForDelete: string,) => {
   return {
      ...u,
      books: u.books.filter(b => b !== bookForDelete)
   }
};

export const addCompany = (u: UserWithLaptopType & UserWithCompaniesType, company: string) => {
   return {
      ...u,
      companies: [...u.companies, {id: 3, title: company}]
   }
}

export const updateCompanyTitle = (u: UserWithLaptopType & UserWithCompaniesType, companyId: number, newTitle: string) => {
   return {
      ...u,
      companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
   }
};

export const updateCompanyTitle2 = (company: NewObjectCompanies, userName: string, companyId: number, newTitle: string) => {
   return {
      ...company,
      [userName]: company[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
   }
}