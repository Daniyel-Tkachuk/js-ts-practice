import {increaseAge, letterSort} from "./08";

export type UserType = {
   name: string
   age: number
}

type NewUserType = {
   name: string
   age: number
   address: {
      title: string
   }
}

test("age should be increase", () => {
   const user: UserType = {
      name: "Daniyel",
      age: 27,
   };

   const testObj = user;
   increaseAge(testObj);

   expect(user.age).toBe(28);
   expect(testObj.age).toBe(28);

});

test("array test", () => {
   const users: UserType[] = [
      {name: "Daniyel", age: 27},
      {name: "Viktoriya", age: 28},
   ];

   const admins = users;
   admins.push({name: "Zakhar", age: 2})

   expect(users[2]).toEqual({name: "Zakhar", age: 2});
});

test("reference type test", () => {
   let user: NewUserType = {
      name: "Dimych",
      age: 32,
      address: {
         title: "Minsk"
      }
   };


   let user2: NewUserType = {
      name: "Daniyel",
      age: 27,
      address: user.address
   };

   user2.address.title = "Grodno";

   expect(user.address).toEqual(user2.address);
   expect(user.address?.title).toBe("Grodno")
});

test("sort array test", () => {
   const letters = ['c', 'd', 'a', 'z', 'e'];

   letterSort(letters);

   expect(letters).toEqual(['a', 'c', 'd', 'e', 'z']);
})