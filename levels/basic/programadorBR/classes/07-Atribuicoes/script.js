// =    x = y     x = y
// +=   x += y    x = x + y
// -=   x -= y    x = x - y
// *=   x *= y    x = x * y
// /=   x /= y    x = x / y     
// %=   x %= y    x = x % y

var a = 10;
let b = 2;
let result;

console.log("A = " + a + " e B = " + b);
result = a += b;
console.log("\nCom 'A += B' o resultado é " + result);
result = a -= b;
console.log("\nCom 'A -= B' o resultado é " + result);
result = a *= b;
console.log("\nCom 'A *= B' o resultado é " + result);
result = a /= b;
console.log("\nCom 'A /= B' o resultado é " + result);
result = a %= b;
console.log("\nCom 'A %= B' o resultado é " + result);










