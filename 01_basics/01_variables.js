const accountId = 144553
let accountEmail = "abcd@google.com"
var accountPassword = 12345
accountCity = "Lahore"                  // You can use it to declare a variable in JS but not recommeded way to declare a variable
let accountState


accountEmail ="hc@hc.com"
accountPassword = "212121"
accountCity = "Islamabad"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// accountId = 2 // Not Allowed as variable is contant and cannot be modified

/*

Prefer not to use var
Because of issue in block scope and functional scope

*/


/*

Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])


*/