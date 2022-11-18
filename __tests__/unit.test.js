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
  expect(isPhoneNumber('858-521-8622')).toBe(true);
})

// False match
test('falsely matches a non-phone number', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(false);
})

// False match
test('falsely doesn\'t match an unsplit phone number', () => {
  expect(isPhoneNumber('4155218666')).toBe(true);
})

/** isEmail() tests */

// True match
test('matches gmail', () => {
  expect(isEmail('bryandhmin@gmail.com')).toBe(true);
})

// True match
test('doesn\'t match non-email', () => {
  expect(isEmail('858-521-8622')).toBe(false);
})

// False match
test('falsely matches a non-email', () => {
  expect(isEmail('im@yourhouse.rn')).toBe(false);
})

// False match
test('falsely doesn\'t match an email', () => {
  expect(isEmail('bdmin (at) ucsd (dot) com')).toBe(true);
})

/** isStrongPassword() tests */

// True match
test('matches a strong password', () => {
  expect(isEmail('password4life')).toBe(true);
})

// True match
test('doesn\'t match a weak passowrd', () => {
  expect(isEmail('hi')).toBe(false);
})

// False match
test('falsely matches a weak password', () => {
  expect(isEmail('aaaa')).toBe(false);
})

// False match
test('falsely doesn\'t a match strong password', () => {
  expect(isEmail('th1s1sastr0ngpwEvenThoughItsLong')).toBe(true);
})

/** isDate() tests */

// True match
test('matches a date', () => {
  expect(isEmail('11/18/2000')).toBe(true);
})

// True match
test('doesn\'t match a wrong date', () => {
  expect(isEmail('Friday :D')).toBe(false);
})

// False match
test('falsely matches a wrong date', () => {
  expect(isEmail('13/13/1313')).toBe(false);
})

// False match
test('falsely doesn\'t match a date', () => {
  expect(isEmail('Nov 18, 2000')).toBe(true);
})

/** isHexColor() tests */

// True match
test('matches a hexcolor', () => {
  expect(isEmail('FFFFFF')).toBe(true);
})

// True match
test('doesn\'t match a wrong hexcolor', () => {
  expect(isEmail('GGGGGG')).toBe(false);
})

// False match
test('falsely matches a non-hexcolor', () => {
  expect(isEmail('256')).toBe(false);
})

// False match
test('falsely doesn\'t match a hexcolor', () => {
  expect(isEmail('color: #FFFFFF')).toBe(true);
})
