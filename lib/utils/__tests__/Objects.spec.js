'use strict';

var _utils = require('../../../test/utils');

var _Objects = require('../Objects');

var Objects = _interopRequireWildcard(_Objects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

it('concat - should return an empty object', function () {
  var objectOne = {};
  var objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should return objectOne', function () {
  var objectOne = { john: 'doe' };
  var objectTwo = {};

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should return objectTwo', function () {
  var objectOne = {};
  var objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should concat', function () {
  var objectOne = { john: 'doe' };
  var objectTwo = { jane: 'doe' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should override', function () {
  var objectOne = { john: 'doe' };
  var objectTwo = { john: 'doe awesome' };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should deep concat', function () {
  var objectOne = { me: { john: 'doe' } };
  var objectTwo = { wife: { jane: 'doe' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('concat - should deep override', function () {
  var objectOne = { me: { john: 'doe' } };
  var objectTwo = { me: { john: 'doe awesome' } };

  expect(Objects.concat(objectOne, objectTwo)).toMatchSnapshot();
});

it('clear - should return an empty object', function () {
  expect(Objects.clear({})).toMatchSnapshot();
});

it('clear - should clear the object', function () {
  expect(Objects.clear({
    john: 'doe',
    me: null,
    wife: {},
    children: [],
    role: ''
  })).toMatchSnapshot();
});

it('isEmpty - should return true if null', function () {
  expect(Objects.isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', function () {
  expect(Objects.isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if empty', function () {
  expect(Objects.isEmpty({})).toMatchSnapshot();
});

it('isEmpty - should return false if filled', function () {
  var value = { me: { john: 'doe' } };
  expect(Objects.isEmpty(value)).toMatchSnapshot();
});