function isPrime(num) {
    if (num < 2) return false; // اعداد کمتر از ۲ اول نیستند
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // اگر عددی بر یکی از اعداد تا جذر خودش بخش‌پذیر باشد، اول نیست
    }
    return true;
}

function toPersianNumber(number) {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function findPrimes() {
    const input = document.getElementById("numberInput").value; // دریافت مقدار وارد شده
    const maxNumber = parseInt(input); // تبدیل به عدد صحیح
    const resultDiv = document.getElementById("result");

    if (isNaN(maxNumber) || maxNumber < 1) {
        resultDiv.innerHTML = "لطفاً یک عدد معتبر بزرگ‌تر از ۰ وارد کنید.";
        return;
    }

    const primes = [];
    for (let i = 1; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primes.push(toPersianNumber(i)); // اگر اول بود به لیست اضافه کن
        }
    }

    resultDiv.innerHTML = `اعداد اول بین ۱ تا ${toPersianNumber(maxNumber)}: <br> ${primes.join("، ")}`;
}
