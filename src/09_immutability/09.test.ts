import {
   addCompany,
   addNewBooksToUser,
   makeHairstyle,
   moveUser, NewObjectCompanies, removeBook, updateBooks, updateCompanyTitle, updateCompanyTitle2,
   upgradeUserLaptop,
   UserType,
   UserWithBooksType, UserWithCompaniesType,
   UserWithLaptopType
} from "./09";


test("reference type test", () => {
   const user: UserType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6,
      }
   };

   const result = makeHairstyle(user, 2);

   expect(result.hair).toBe(16);
   expect(user.hair).toBe(32);
});

test("change address title", () => {
   const user: UserWithLaptopType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      }
   };

   const result = moveUser(user, "Grodno");

   expect(user).not.toBe(result);
   expect(user.address).not.toBe(result.address)
   expect(user.laptop).toBe(result.laptop);
   expect(result.address.city).toBe("Grodno");
   expect(user.address.city).toBe("Minsk");
});


test("upgrade laptop to macbook", () => {
   const user: UserWithLaptopType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      }
   };

   const result = upgradeUserLaptop(user, "Macbook");

   expect(user).not.toBe(result);
   expect(user.laptop).not.toBe(result.laptop)
   expect(user.address).toBe(result.address);
   expect(result.laptop.title).toBe("Macbook");
   expect(user.laptop.title).toBe("Lenovo");
});

test("add new books to user", () => {
   const user: UserWithLaptopType & UserWithBooksType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      },
      books: ["css", "js", "html", "react"],
   };

   const result = addNewBooksToUser(user, ["ts", "restAPI"]);

   expect(user).not.toBe(result);
   expect(user.books).not.toBe(result.books)
   expect(user.address).toBe(result.address);
   expect(result.laptop).toBe(user.laptop);
   expect(user.address).toBe(result.address);
   expect(result.books[4]).toBe("ts");
   expect(result.books[5]).toBe("restAPI");
   expect(user.books.length).not.toBe(result.books.length);
});

test("change books to user", () => {
   const user: UserWithLaptopType & UserWithBooksType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      },
      books: ["css", "js", "html", "react"],
   };

   const result = updateBooks(user, "js", "ts");

   expect(user).not.toBe(result);
   expect(user.books).not.toBe(result.books)
   expect(user.address).toBe(result.address);
   expect(result.laptop).toBe(user.laptop);
   expect(result.books[1]).toBe("ts");
   expect(user.books.length).toBe(4);
   expect(result.books.length).toBe(4)
});

test("remove js book to user", () => {
   const user: UserWithLaptopType & UserWithBooksType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      },
      books: ["css", "js", "html", "react"],
   };

   const result = removeBook(user, "js");

   expect(user).not.toBe(result);
   expect(user.books).not.toBe(result.books)
   expect(user.address).toBe(result.address);
   expect(result.laptop).toBe(user.laptop);
   expect(result.books.length).toBe(3);
   expect(user.books.length).toBe(4);
});

test("add new company to user", () => {
   const user: UserWithLaptopType & UserWithCompaniesType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      },
      companies: [
         {id: 1, title: "Epam"},
         {id: 2, title: "it-incubator"}
      ]
   };

   const result = addCompany(user, "Google");

   expect(user).not.toBe(result);
   expect(user.address).toBe(result.address);
   expect(result.laptop).toBe(user.laptop);
   expect(user.companies.length).toBe(2);
   expect(result.companies.length).toBe(3);
   expect(result.companies[2].title).toBe("Google");
});

test("update company for user", () => {
   const user: UserWithLaptopType & UserWithCompaniesType = {
      name: "Daniyel",
      hair: 32,
      address: {
         city: "Minsk",
         house: 6
      },
      laptop: {
         title: "Lenovo"
      },
      companies: [
         {id: 1, title: "Епам"},
         {id: 2, title: "it-incubator"}
      ]
   };

   const result = updateCompanyTitle(user, 1, "Epam");

   expect(user).not.toBe(result);
   expect(user.address).toBe(result.address);
   expect(result.laptop).toBe(user.laptop);
   expect(user.companies).not.toBe(result.companies);
   expect(user.companies[0].title).toBe("Епам");
   expect(result.companies[0].title).toBe("Epam");
   expect(result.companies[0]).not.toBe(user.companies[0]);
});

test("update company title", () => {
   const companies: NewObjectCompanies = {
      "Dimych": [
         {id: 1, title: "Epam"},
         {id: 2, title: "Google"},
      ],
      "Daniyel": [
         {id: 3, title: "It-incubator"},
         {id: 4, title: "Яндекс"}
      ]
   };

   const result = updateCompanyTitle2(companies, "Daniyel", 4, "Yandex");

   expect(companies).not.toBe(result);
   expect(companies["Daniyel"]).not.toBe(result["Daniyel"]);
   expect(companies["Daniyel"][1].title).toBe("Яндекс");
   expect(result["Daniyel"][1].title).toBe("Yandex");
});