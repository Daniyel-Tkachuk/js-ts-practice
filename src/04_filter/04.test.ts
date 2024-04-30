test("should take old man older 90", () => {
   const ages = [18, 20, 22, 1, 100, 90, 14];

   const oldAges = ages.filter((age: number) => age > 90);

   expect(oldAges.length).toBe(1);
   expect(oldAges[0]).toBe(100);
});

test("should take courses chipper 160$", () => {
   const courses = [
      {title: "CSS", price: 110},
      {title: "JS", price: 200},
      {title: "REACT", price: 150}
   ];

   const cheapCourses = courses.filter((course) => course.price < 160);

   expect(cheapCourses.length).toBe(2);
   expect(cheapCourses[0].price).toBe(110);
   expect(cheapCourses[0].title).toBe("CSS");
   expect(cheapCourses[1].title).toBe("REACT");
});

test("get only completed tasks", () => {
   const tasks = [
      {id: 1, title: "Bread", isDone: false},
      {id: 2, title: "Milk", isDone: true},
      {id: 3, title: "Salt", isDone: false},
      {id: 4, title: "Sugar", isDone: true},
   ];

   const completedTasks = tasks.filter(t => t.isDone);

   expect(Array.isArray(completedTasks)).toBeTruthy();
   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].title).toBe("Milk");
   expect(completedTasks[1].title).toBe("Sugar");
});


test("get only uncompleted tasks", () => {
   const tasks = [
      {id: 1, title: "Bread", isDone: false},
      {id: 2, title: "Milk", isDone: true},
      {id: 3, title: "Salt", isDone: false},
      {id: 4, title: "Sugar", isDone: true},
   ];

   const uncompletedTasks = tasks.filter(t => !t.isDone);

   expect(Array.isArray(uncompletedTasks)).toBeTruthy();
   expect(uncompletedTasks.length).toBe(2);
   expect(uncompletedTasks[0].title).toBe("Bread");
   expect(uncompletedTasks[1].title).toBe("Salt");
});