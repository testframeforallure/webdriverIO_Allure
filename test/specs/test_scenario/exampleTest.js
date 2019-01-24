describe('TrueAutomation.IO page', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://trueautomation.io');
    $("a.login-btn").click();
    $("div.sign-up-container > a").click();
    $("[name='email']").setValue('your@gmail.com');
  });
});
