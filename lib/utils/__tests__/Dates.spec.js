'use strict';

var _utils = require('../../../test/utils');

var _Dates = require('../Dates');

var Dates = _interopRequireWildcard(_Dates);

var _Locale = require('../Locale');

var Locale = _interopRequireWildcard(_Locale);

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

var brazilConfig = {
  locale: Locale.BRAZIL
};

it('extract', function () {
  expect(Dates.extract('2000-01-01')).toMatchSnapshot();
});

it('extract - Locale.BRAZIL', function () {
  expect(Dates.extract('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('parse', function () {
  expect(Dates.parse('2000-01-01')).toMatchSnapshot();
});

it('parse - Locale.BRAZIL', function () {
  expect(Dates.parse('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('parse - another date', function () {
  expect(Dates.parse(new Date('01/01/2000'))).toMatchSnapshot();
});

it('isValid - valid date', function () {
  expect(Dates.isValid('2000-01-01')).toMatchSnapshot();
});

it('isValid - invalid date', function () {
  expect(Dates.isValid('2000-01-35')).toMatchSnapshot();
});

it('isValid - valid leap date', function () {
  expect(Dates.isValid('2000-02-29')).toMatchSnapshot();
});

it('isValid - invalid leap date', function () {
  expect(Dates.isValid('2001-02-29')).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - valid date', function () {
  expect(Dates.isValid('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - invalid date', function () {
  expect(Dates.isValid('35/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - valid leap date', function () {
  expect(Dates.isValid('29/02/2000', brazilConfig)).toMatchSnapshot();
});

it('isValid - Locale.BRAZIL - invalid leap date', function () {
  expect(Dates.isValid('29/02/2001', brazilConfig)).toMatchSnapshot();
});

it('isFuture - future date', function () {
  expect(Dates.isFuture('2050-01-01')).toMatchSnapshot();
});

it('isFuture - past date', function () {
  expect(Dates.isFuture('2000-01-01')).toMatchSnapshot();
});

it('isFuture - Locale.BRAZIL - future date', function () {
  expect(Dates.isFuture('01/01/2050', brazilConfig)).toMatchSnapshot();
});

it('isFuture - Locale.BRAZIL - past date', function () {
  expect(Dates.isFuture('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isPast - past date', function () {
  expect(Dates.isPast('2000-01-01')).toMatchSnapshot();
});

it('isPast - future date', function () {
  expect(Dates.isPast('2050-01-01')).toMatchSnapshot();
});

it('isPast - Locale.BRAZIL - past date', function () {
  expect(Dates.isPast('01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isPast - Locale.BRAZIL - future date', function () {
  expect(Dates.isPast('01/01/2050', brazilConfig)).toMatchSnapshot();
});

it('compare - left date greater', function () {
  expect(Dates.compare('2010-01-01', '2000-01-01')).toMatchSnapshot();
});

it('compare - right date greater', function () {
  expect(Dates.compare('2000-01-01', '2010-01-01')).toMatchSnapshot();
});

it('compare - same dates', function () {
  expect(Dates.compare('2000-01-01', '2000-01-01')).toMatchSnapshot();
});

it('compare - Locale.BRAZIL - left date greater', function () {
  expect(Dates.compare('01/01/2010', '01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('compare - Locale.BRAZIL - right date greater', function () {
  expect(Dates.compare('01/01/2000', '01/01/2010', brazilConfig)).toMatchSnapshot();
});

it('compare - Locale.BRAZIL - same dates', function () {
  expect(Dates.compare('01/01/2000', '01/01/2000', brazilConfig)).toMatchSnapshot();
});

it('isEmpty - should return true if invalid date', function () {
  expect(Dates.isEmpty(new Date('invalid date'))).toMatchSnapshot();
});

it('isEmpty - should return false if valid date', function () {
  expect(Dates.isEmpty(new Date())).toMatchSnapshot();
});