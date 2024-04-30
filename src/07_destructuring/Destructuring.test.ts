import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
   props = {
      name: "Daniyel",
      age: 27,
      lessons: [{title: 1}, {title: 2}],
      address: {
         street: {
            title: "Dubravnaya"
         }
      }
   }
})

test("", () => {
   // const age = props.age;
   // const lessons = props.lessons;
   // const {title} = props.address.street;

   const {age, lessons} = props;
   const {address: {street: {title}}} = props;

   expect(age).toBe(27);
   expect(lessons.length).toBe(2);
   expect(title).toBe("Dubravnaya");
});

test("", () => {
   const lesson_1 = props.lessons[0];
   const lesson_2 = props.lessons[1];

   const [ls1, ls2] = props.lessons;

   expect(lesson_1.title).toBe(1);
   expect(lesson_2.title).toBe(2);

   expect(ls1.title).toBe(1);
   expect(ls2.title).toBe(2);
});