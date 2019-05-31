const expect = require('chai').expect;
const sort = require('../index.js')

const compareFn = function (a, b) {
  return a - b
}

// 测试case
const cases = [
  {
    name: '标准数组',
    in: [85, 24, 63, 45, 17, 31, 96, 50],
    out: [17, 24, 31, 45, 50, 63, 85, 96]
  },
  {
    name: '数组有相等',
    in: [85, 24, 45, 45, 17, 31, 96, 50],
    out: [17, 24, 31, 45, 45, 50, 85, 96]
  },
  {
    name: '短数组',
    in: [85, 24],
    out: [24,85]
  }
]

describe('快排', function () {

  cases.forEach(item => {
    it(item.name, function () {
      expect(sort.quick(item.in, compareFn)).to.deep.equal(item.out)
    })
  })

})
