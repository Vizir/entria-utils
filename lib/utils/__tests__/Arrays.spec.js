'use strict';

var _utils = require('../../../test/utils');

var _Arrays = require('../Arrays');

var Arrays = _interopRequireWildcard(_Arrays);

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

it('isEmpty - should return true if null', function () {
  expect(Arrays.isEmpty(null)).toMatchSnapshot();
});

it('isEmpty - should return true if undefined', function () {
  expect(Arrays.isEmpty(undefined)).toMatchSnapshot();
});

it('isEmpty - should return true if empty', function () {
  expect(Arrays.isEmpty([])).toMatchSnapshot();
});

it('isEmpty - should return false if filled', function () {
  var value = ['john', 'doe'];
  expect(Arrays.isEmpty(value)).toMatchSnapshot();
});