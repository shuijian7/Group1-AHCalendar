var { getUID } = require('../js/date');

getUID = jest.fn();

test("should generate date ID yyyy-mm-dd", () => {
    let id1 = getUID(5,2019,30);
    let id2 = getUID(10,2020,5);

    expect(id1).toBe("2019-05-30");
    expect(id2).toBe("2020-10-05");
});