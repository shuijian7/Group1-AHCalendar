var { getUID } = require('../js/date');
var { fillPartialMonthData } = require('../js/date');
var { appendSpriteToCellAndTooltip } = require('../js/date');

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
