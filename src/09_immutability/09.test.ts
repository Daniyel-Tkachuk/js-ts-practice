import {
   addNewBooksToUser,
   makeHairstyle,
   moveUser,
   upgradeUserLaptop,
   UserType,
   UserWithBooksType,
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