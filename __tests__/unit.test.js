// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = functions;

/** isPhoneNumber() tests */

// True match
test('matches an SF phone number', () => {
  expect(isPhoneNumber('(415) 521-8622')).toBe(true);
})

// True match
test('matches an SD phone number', () => {
  expect(isPhoneNumber('858-231-4124')).toBe(true);
})

// False match
test('does not matche a non-phone number', () => {
  expect(isPhoneNumber('asdf')).toBe(false);
})

// False match
test('doesn\'t match an unsplit phone number', () => {
  expect(isPhoneNumber('4155218666')).toBe(false);
})

/** isEmail() tests */

// True match
test('matches gmail', () => {
  expect(isEmail('bryandhmin@gmail.com')).toBe(true);
})

// True match
test('matches ucsd email', () => {
  expect(isEmail('bdmin@ucsd.edu')).toBe(true);
})

// False match
test('does not matche a non-email', () => {
  expect(isEmail('bryanmin.me')).toBe(false);
})

// False match
test('does not match a worded email', () => {
  expect(isEmail('bdmin (at) ucsd (dot) com')).toBe(false);
})

/** isStrongPassword() tests */

// True match
test('matches a strong password', () => {
  expect(isStrongPassword('password4life')).toBe(true);
})

// True match
test('matches a starred strong passowrd', () => {
  expect(isStrongPassword('fasofpn13ie')).toBe(true);
})

// False match
test('does not match a weak password', () => {
  expect(isStrongPassword('abc')).toBe(false);
})

// False match
test('does not match an invalid password', () => {
  expect(isStrongPassword('fsdoiajf+@!)!@$')).toBe(false);
})

/** isDate() tests */

// True match
test('matches a date', () => {
  expect(isDate('11/18/2000')).toBe(true);
})

// True match
test('matches another date', () => {
  expect(isDate('01/01/2023')).toBe(true);
})

// False match
test('does not match a wrong date', () => {
  expect(isDate('13/13/20000')).toBe(false);
})

// False match
test('does not match a wrongly formatted date', () => {
  expect(isDate('Nov 18, 2000')).toBe(false);
})

/** isHexColor() tests */

// True match
test('matches a hexcolor', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
})

// True match
test('matches a 3 digit hexcolor', () => {
  expect(isHexColor('#AAA')).toBe(true);
})

// False match
test('does not match a non-hexcolor', () => {
  expect(isHexColor('rgb(0,245,126)')).toBe(false);
})

// False match
test('does not match a CSS color line', () => {
  expect(isHexColor('color: #FFFFFF')).toBe(false);
})
