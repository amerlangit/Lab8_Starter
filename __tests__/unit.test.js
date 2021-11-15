// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('checks if (303)234-5432 is a phone number', () => {
    expect(functions.isPhoneNumber('(303)234-5432')).toBe(true);
});
test('checks if 234-5432 is a phone number', () => {
    expect(functions.isPhoneNumber('234-5432')).toBe(true);
});
test('checks if sdfw45e is a phone number', () => {
    expect(functions.isPhoneNumber('sdfw45e')).toBe(false);
});
test('checks if 8888-88 is a phone number', () => {
    expect(functions.isPhoneNumber('8888-88')).toBe(false);
});


//isEmail
test('checks if amerlan@ucsd.edu is an email', () => {
    expect(functions.isEmail('amerlan@ucsd.edu')).toBe(true);
});
test('checks if hi@yahoo.com is an email', () => {
    expect(functions.isEmail('hi@yahoo.com')).toBe(true);
});
test('checks if 43532e3r is an email', () => {
    expect(functions.isEmail('43532e3r')).toBe(false);
});
test('checks if hi@bye@.com.net is an email', () => {
    expect(functions.isEmail('hi@bye@.com.net')).toBe(false);
});


//isStrongPassword
test('checks if helloworld is a strong password', () => {
    expect(functions.isStrongPassword('helloWorld')).toBe(true);
});
test('checks if hi_there is a strong password', () => {
    expect(functions.isStrongPassword('hi_there')).toBe(true);
});
test('checks if lol is a strong password', () => {
    expect(functions.isStrongPassword('lol')).toBe(false);
});
test('checks if ###morethan15characterslong is a strong password', () => {
    expect(functions.isStrongPassword('###morethan15characterslong')).toBe(false);
});


//isDate
test('checks if 09/28/1990 is a date', () => {
    expect(functions.isDate('09/28/1990')).toBe(true);
});
test('checks if 4/5/2020 is a date', () => {
    expect(functions.isDate('4/5/2020')).toBe(true);
});
test('checks if 345/34/1970 is a date', () => {
    expect(functions.isDate('345/34/1970')).toBe(false);
});
test('checks if 08/17/22334 is a date', () => {
    expect(functions.isDate('08/17/22334')).toBe(false);
});

//isHexColor
test('tests #FC0 is a Hex Color', () => {
    expect(functions.isHexColor('#FC0')).toBe(true);
  }); 
  test('tests #FC0456 is a Hex Color', () => {
    expect(functions.isHexColor('#FC0456')).toBe(true);
  });
  test('tests #ggff4e is a Hex Color', () => {
    expect(functions.isHexColor('#ggff4e')).toBe(false);
  });
  test('tests #FCZ is a Hex Color', () => {
    expect(functions.isHexColor('#FCZ')).toBe(false);
  });
