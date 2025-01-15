async function getGoldPrice() {
    try {
        // ارسال درخواست به API برای دریافت قیمت طلا
        const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY' // کلید API خودت رو اینجا وارد کن
            }
        });

        // تبدیل داده‌های دریافتی به فرمت JSON
        const data = await response.json();

        // نمایش قیمت طلا در صفحه
        if (data.price) {
            document.getElementById('gold-price').innerText = data.price + ' USD';
        } else {
            document.getElementById('gold-price').innerText = 'خطا در دریافت قیمت';
        }
    } catch (error) {
        // در صورت بروز خطا در درخواست
        console.error('Error fetching gold price:', error);
        document.getElementById('gold-price').innerText = 'خطا در ارتباط با سرور';
    }
}

// فراخوانی تابع برای دریافت قیمت طلا
getGoldPrice();

// به‌روزرسانی قیمت هر 60 ثانیه
setInterval(getGoldPrice, 60000);
