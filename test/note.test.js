// const { getRandom } = require('../js/note');

// test("check module behavior/property", () => {
//     expect(getRandom).toBeDefined;
//     expect(getRandom).toBeInstanceOf(Function);
//     expect(getRandom).toHaveReturned;
//     expect(getRandom).toHaveBeenCalled;    
// });

// test("should return a number based on min and max", () => {
//     const random1 = getRandom(1,10);
//     const random2 = getRandom(-1, 10);
//     const random3 = getRandom(-10, -1);
//     const random4 = getRandom(-10, 1);
//     const random5 = getRandom(0, 0);

//     expect(random1).toBeGreaterThanOrEqual(1);
//     expect(random1).toBeLessThanOrEqual(10);
//     expect(random2).toBeGreaterThanOrEqual(-1);
//     expect(random3).toBeGreaterThanOrEqual(-10);
//     expect(random4).toBeLessThanOrEqual(1);
//     expect(random5).toEqual(0);
// });

const { dayClicked } = require('../js/note');
const { openPostIt } = require('../js/note');



test("check dayClicked behavior/property", () => {
    expect(dayClicked).toBeDefined;
    expect(dayClicked).toBeInstanceOf(Function);
    expect(dayClicked).toHaveReturned;
    expect(dayClicked).toHaveBeenCalled;
});

test("check openPostIt behavior/property", () => {
    expect(openPostIt).toBeDefined;
    expect(openPostIt).toBeInstanceOf(Function);
    expect(openPostIt).toHaveReturned;
    expect(openPostIt).toHaveBeenCalled;    
});
