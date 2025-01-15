function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Not a prime if divisible by any number up to its square root
    }
    return true;
}

function findPrimes() {
    const input = document.getElementById("numberInput").value; // Get input value
    const maxNumber = parseInt(input); // Convert to integer
    const resultDiv = document.getElementById("result");

    if (isNaN(maxNumber) || maxNumber < 1) {
        resultDiv.innerHTML = "Please enter a valid number greater than 0.";
        return;
    }

    const primes = [];
    for (let i = 1; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primes.push(i); // Add to list if it's prime
        }
    }

    resultDiv.innerHTML = `Prime numbers between 1 and ${maxNumber}: <br> ${primes.join(", ")}`;
}
