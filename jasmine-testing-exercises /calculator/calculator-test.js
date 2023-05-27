
it('should calculate the monthly rate correctly', function () {
  // ...

  let valuess = {
    amount: 10000,
    rate: 8,
    year: 5.8
  }
  expect(calculateMonthlyPayment(valuess)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    amount: 10000,
    rate: 8,
    year: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44')
});

/// etc

it ("should add two numbers correctly", function () {

  let c = 4
  let d = 2

  expect(add(c, d)).toEqual(6)
})
