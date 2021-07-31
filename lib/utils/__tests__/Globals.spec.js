'use strict';

var _utils = require('../../../test/utils');

var _Globals = require('../Globals');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

beforeEach(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', (0, _utils.setupTest)());

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('isEmpty - should return true if null', function () {
  expect((0, _Globals.isEmpty)(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', function () {
  expect((0, _Globals.isEmpty)(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if invalid date', function () {
  expect((0, _Globals.isEmpty)(new Date('invalid date'))).toMatchSnapshot();
});

it('isEmpty - should return false if valid date', function () {
  expect((0, _Globals.isEmpty)(new Date())).toMatchSnapshot();
});

it('isEmpty - should return true if empty array', function () {
  expect((0, _Globals.isEmpty)([])).toMatchSnapshot();
});

it('isEmpty - should return false if filled array', function () {
  var value = ['john', 'doe'];
  expect((0, _Globals.isEmpty)(value)).toMatchSnapshot();
});

it('isEmpty - should return true if empty object', function () {
  expect((0, _Globals.isEmpty)({})).toMatchSnapshot();
});

it('isEmpty - should return false if filled object', function () {
  var value = { me: { john: 'doe' } };
  expect((0, _Globals.isEmpty)(value)).toMatchSnapshot();
});

it('isEmpty - should return true if empty string', function () {
  expect((0, _Globals.isEmpty)('')).toMatchSnapshot();
});

it('isEmpty - should return false if filled string', function () {
  expect((0, _Globals.isEmpty)('john')).toMatchSnapshot();
});