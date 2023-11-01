let cond = true;
let count = 0;
function isprime(n) {
  for (let i = 2; i < n / 2 + 1; i++) {
    if (n % i === 0) return false;
  }
  // if(n%2 === 0) return true;
  return true;
}
function* primegg() {
  let n = 2;
  while (true) {
    if (isprime(n)) {
      yield n;
    }
    n++;
  }
}
const pitr = primegg();
for (let i = 0; i < 10; i++) {
  let nextPrime = pitr.next().value;
  console.log(nextPrime);
}
