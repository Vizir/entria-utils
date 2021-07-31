'use strict';

var _utils = require('../../../test/utils');

var _Colors = require('../Colors');

var Colors = _interopRequireWildcard(_Colors);

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

it('hexToRGBObject', function () {
  expect(Colors.hexToRGBObject('#ffffff')).toMatchSnapshot();
});

it('hexToRGBObject - bad hex', function () {
  function testHexToRGBObject() {
    Colors.hexToRGBObject('#fff');
  }

  expect(testHexToRGBObject).toThrowErrorMatchingSnapshot();
});

it('hexToRGB', function () {
  expect(Colors.hexToRGB('#ffffff')).toMatchSnapshot();
});

it('hexToRGBA - without alpha', function () {
  expect(Colors.hexToRGBA('#ffffff')).toMatchSnapshot();
});

it('hexToRGBA - with alpha', function () {
  expect(Colors.hexToRGBA('#ffffff', 0.5)).toMatchSnapshot();
});