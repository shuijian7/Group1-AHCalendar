const { getUID } = require('../js/date');
const { appendSpriteToCellAndTooltip } = require('../js/date');
const { fillPartialMonthData } = require('../js/date');

test("check module behavior/property", () => {
    expect(getUID).toBeDefined;
    expect(getUID).toBeInstanceOf(Function);
    expect(getUID).toHaveReturned;
    expect(getUID).toHaveBeenCalled;
});

test("should generate date ID yyyy-mm-dd", () => {
    const id1 = getUID(5,2019,30);
    const id2 = getUID(10,2020,5);
    const id3 = getUID(12,2019,3);
    const id4 = getUID(9,2018,7);
    expect(id1).toBe("2019-05-30");
    expect(id2).toBe("2020-10-05");
    expect(id3).toBe("2020-00-03");
    expect(id4).toBe("2018-09-07");
});