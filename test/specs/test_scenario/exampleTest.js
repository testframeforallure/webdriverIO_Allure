const assert = require('assert');

describe('First suit', () => {
    beforeEach(() => {
        browser.setTimeout({'implicit': 5000});
        browser.url('https://trueautomation.i');
        throw new Error();
    });

    it('Test example 1', () => {
        $("a.login-btn").click();
        $("div.sign-up-container > a").click();
        $("[name='email']").setValue('your@gmail.com');
    });

});
describe('Second suit', () => {
    beforeEach(() => {
        browser.setTimeout({'implicit': 5000});
        browser.url('https://trueautomation.io');
    });

    it('Test example 2', () => {
        throw new Error("tut dolzna byt oshibka");
    });

    it('Test example 3', () => {

    });

    it('Test example 5', () => {
        assert.equal(1,2);
    });

    it('Test example 4', () => {
        $("a.login-btn").click();
        $("div.sign-up-container > a").click();
        $("[name='email']").setValue('your@gmail.com');
    });
});
