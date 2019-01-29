const { modal } = require('../js/modal');

test("check module behavior/property", () => {
    expect(modal).toBeInstanceOf(HTMLElement);
});