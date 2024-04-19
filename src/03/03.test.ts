import {addSkill, doesStudentLiveIn, makeStudentActive, StudentType} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
    expect(student.technologies[0].title).toBe("HTML");
    expect(student.technologies[1].title).toBe("CSS");
});
test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
});
test('does student live in city', () => {
    let res_1 = doesStudentLiveIn(student, "Moscow");
    let res_2 = doesStudentLiveIn(student, "Minsk");

    expect(res_1).toBeFalsy();
    expect(res_2).toBeTruthy();
});
