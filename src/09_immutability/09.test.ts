import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./09";


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
   expect(result.address.title).toBe("Grodno");
   expect(user.address.city).toBe("Minsk");
})