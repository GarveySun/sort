module.exports =  function quickSort (arr, compareFn) {

  if (arr.length <= 1) return arr

  var k_index = Math.floor(arr.length / 2)
  var k = arr[k_index]
  var l_arr = [], r_arr = []

  arr.forEach((item, index) => {
    if (index !== k_index) {
      if (compareFn(item, k) >= 0) {
        r_arr.push(item)
      } else {
        l_arr.push(item)
      }
    }
  })

  return quickSort(l_arr, compareFn).concat(k, quickSort(r_arr, compareFn))
}
