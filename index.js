// Write your solution in this file!
customerName = "bob"
const leastFavoriteCustomer = 'some initial value'
bestCustomer

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  //notice that there is no return statement
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!
}

function setBestCustomer() {
  return bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'
}