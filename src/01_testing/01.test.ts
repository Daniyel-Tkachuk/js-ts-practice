import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 2;
    b = 4;
    c = 5;
})
test("sum should be correct", () => {
    // actions
    const result_1 = sum(a, b);
    const result_2 = sum(a, c);
    const result_3 = sum(b, c);

    // expect result
    expect(result_1).toBe(6);
    expect(result_2).toBe(7);
    expect(result_3).toBe(9);
});

test("multiply should be correct", () => {
    // actions
    const result_1 = mult(a, b);
    const result_2 = mult(a, c);
    const result_3 = mult(b, c);

    // expect result
    expect(result_1).toBe(8);
    expect(result_2).toBe(10);
    expect(result_3).toBe(20);
});

test("splitting into words should be correct", () => {
    const sent_1 = "hello my friends";
    const sent_2 = "my name is Daniyel";
    const sent_3 = "Hi, js - the best programming language!"

    const res_1 = splitIntoWords(sent_1);
    const res_2 = splitIntoWords(sent_2);
    const res_3 = splitIntoWords(sent_3);

    // res_1
    expect(res_1.length).toBe(3);
    expect(res_1[0]).toBe("hello");
    expect(res_1[1]).toBe("my");
    expect(res_1[2]).toBe("friends");

    // res_2
    expect(res_2.length).toBe(4);
    expect(res_2[0]).toBe("my");
    expect(res_2[1]).toBe("name");
    expect(res_2[2]).toBe("is");
    expect(res_2[3]).toBe("daniyel");

    // res_3
    expect(res_3.length).toBe(6);
    expect(res_3[0]).toBe("hi");
    expect(res_3[1]).toBe("js");
    expect(res_3[2]).toBe("the");
    expect(res_3[3]).toBe("best");
    expect(res_3[4]).toBe("programming");
    expect(res_3[5]).toBe("language");
})
