


document.getElementById('backToStore1').addEventListener('click', function () {
    window.location.href = 'index.html'; // هنا قم بتغيير 'index.html' إلى رابط الصفحة الرئيسية الخاصة بك
});




document.getElementById('backToStore2').addEventListener('click', function () {
    window.location.href = 'index.html'; // هنا قم بتغيير 'index.html' إلى رابط الصفحة الرئيسية الخاصة بك
});





// حدث لتغيير حجم النافذة
window.addEventListener('resize', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.getElementById('mainContent');
    const backArrow = document.getElementById('backArrow');

    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden'); // اجعل الشريط الجانبي مخفيًا على الأجهزة المحمولة
        mainContent.classList.add('expanded'); // اجعل المحتوى الأساسي يأخذ 100%
        setTimeout(() => {
            backArrow.classList.add('show'); // إضافة الفئة لإخفاء السهم
        }, 300);     } else {
        sidebar.classList.remove('hidden'); // إظهار الشريط الجانبي على الشاشات الأكبر
        mainContent.classList.remove('expanded'); // استعادة الحجم الأصلي للمحتوى
        setTimeout(() => {
            backArrow.classList.remove('show'); // إضافة الفئة لإخفاء السهم
        }, 0);     }
    renderItems();
});

// تنفيذ الكود عند تحميل الصفحة
window.addEventListener('load', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.getElementById('mainContent');
    const backArrow = document.getElementById('backArrow');

    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden'); // اجعل الشريط الجانبي مخفيًا على الأجهزة المحمولة
        mainContent.classList.add('expanded'); // اجعل المحتوى الأساسي يأخذ 100%
        setTimeout(() => {
            backArrow.classList.add('show'); // إضافة الفئة لإخفاء السهم
        }, 300);
    } else {
        sidebar.classList.remove('hidden'); // إظهار الشريط الجانبي على الشاشات الأكبر
        mainContent.classList.remove('expanded'); // استعادة الحجم الأصلي للمحتوى
        setTimeout(() => {
            backArrow.classList.remove('show'); // إضافة الفئة لإخفاء السهم
        }, 0);
    }
    renderItems();
});


// عند الضغط على "x"
document.querySelector('.fa-xmark').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.getElementById('mainContent');
    const backArrow = document.getElementById('backArrow');

    sidebar.classList.add('hidden'); // إخفاء الشريط الجانبي
    sidebar.classList.remove('expanded'); // إزالة فئة التوسيع
    mainContent.classList.add('expanded'); // توسيع المحتوى الرئيسي ليأخذ 100%
    setTimeout(() => {
        backArrow.classList.add('show'); // إضافة الفئة لإخفاء السهم
    }, 300);
});


// عند الضغط على السهم للخلف
document.getElementById('backArrow').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.getElementById('mainContent');
    const backArrow = document.getElementById('backArrow');

    sidebar.classList.remove('hidden'); // إظهار الشريط الجانبي
    mainContent.classList.remove('expanded'); // استعادة الحجم الأصلي للمحتوى
    setTimeout(() => {
        backArrow.classList.remove('show'); // إضافة الفئة لإخفاء السهم
    }, 0);
});


// const itemsData = [
//     {
//         image: 'Images/Macbook Pro 16 with iPhone 11 Pro Max Mockup.jpeg',
//         name: 'Product 1',
//         description: 'Lorem, ipsum dolor.',
//         size: '225 ml',
//         quantity: 1,
//         price: 40,
//         currency: 'LE'
//     },
//     {
//         image: 'Images/Macbook Pro 16 with iPhone 11 Pro Max Mockup.jpeg',
//         name: 'Product 2',
//         description: 'Another description.',
//         size: '500 ml',
//         quantity: 2,
//         price: 80,
//         currency: 'LE'
//     },
//     {
//         image: 'Images/Macbook Pro 16 with iPhone 11 Pro Max Mockup.jpeg',
//         name: 'Product 2',
//         description: 'Another description.',
//         size: '500 ml',
//         quantity: 2,
//         price: 80,
//         currency: 'LE'
//     },
//     {
//         image: 'Images/Macbook Pro 16 with iPhone 11 Pro Max Mockup.jpeg',
//         name: 'Product 2',
//         description: 'Another description.',
//         size: '500 ml',
//         quantity: 2,
//         price: 80,
//         currency: 'LE'
//     }
// ];

let counter = document.getElementById('count');
counter.innerHTML = itemsData.length;


// الحصول على عنصر الجدول حيث سيتم إدخال الصفوف


let subtotalElements = document.querySelectorAll('.subtotal');
let shippingElements = document.querySelectorAll('.shipping');
let taxElements = document.querySelectorAll('.tax');


function getSubTotalValue() {
    let getSubtotal = 0;
    for (let index = 0; index < itemsData.length; index++) {
        const item = itemsData[index];
        getSubtotal += item.price * item.quantity;
    }
    return getSubtotal;
}



function getPrice(getSubtotal = 0) {

    if (getSubtotal != 0) {
        getSubtotal = getSubTotalValue();
    }

    // مثال على القيم
    let subtotalValue = getSubtotal; // يمكنك تعيين القيمة الفعلية هنا
    let shippingValue = 0.00; // قيمة الشحن
    let taxValue = 39.00; // قيمة الضريبة

    // تعيين القيم للعناصر باستخدام حلقة
    subtotalElements.forEach(el => el.innerHTML = subtotalValue.toFixed(2)); // تعيين subtotal وتنسيقه إلى رقم عشري
    shippingElements.forEach(el => el.innerHTML = shippingValue.toFixed(2)); // تعيين shipping وتنسيقه إلى رقم عشري
    taxElements.forEach(el => el.innerHTML = taxValue.toFixed(2)); // تعيين tax وتنسيقه إلى رقم عشري

    // إذا كنت تريد التحقق من القيم
    subtotalElements.forEach(el => console.log(el.innerHTML));
    shippingElements.forEach(el => console.log(el.innerHTML));
    taxElements.forEach(el => console.log(el.innerHTML));

    // حساب total وجمع القيم
    let totalValue = subtotalValue + shippingValue + taxValue; // جمع القيم كأرقام
    let totalElement = document.querySelectorAll('.total');
    totalElement.forEach(el => el.innerHTML = totalValue.toFixed(2)); // تعيين total وتنسيقه إلى رقم عشري

}


function changeQuantity(index, change) {
    if (itemsData[index].quantity + change > 0) { // التأكد من أن الكمية لا تصبح سلبية
        itemsData[index].quantity += change; // تغيير الكمية
        document.getElementById(`quantity-${index}`).textContent = itemsData[index].quantity; // تحديث العرض في DOM
    }

    getPrice(getSubTotalValue());
}

// دالة لإزالة العنصر
function removeItem(index) {
    itemsData.splice(index, 1); // إزالة العنصر من المصفوفة

    renderItems(); // إعادة رسم العناصر
    // counter.innerHTML = itemsData.length;
}

var cartona = document.getElementById('inner-table');

function renderItems() {
    let getSubtotal = 0;
    let content = ''; // متغير لتخزين محتوى الصفوف
    for (let index = 0; index < itemsData.length; index++) {
        const item = itemsData[index]; // الحصول على العنصر الحالي

        // التحقق من حجم الشاشة لتحديد الشكل المناسب
        if (window.innerWidth <= 768) { // إذا كانت الشاشة صغيرة
            content += `
            <div class="row my-3 px-3 ">
                <div class="col-4 ">
                    <div class="square-cover">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                </div>
    
                <div class="col-4 d-flex flex-column justify-content-between ">
                    <p class="p-0 m-0 fs-6">${item.name}</p>
                    <p class="p-0 m-0 fs-7"><span>${item.size}</span> ${item.description}</p>
                    <div class="pt-2">
                        <div class="d-flex p-0 m-0">
                            <div class="cover-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-minus" onclick="changeQuantity(${index}, -1)"></i>
                            </div>
                            <p class="p-0 m-0 px-3 fs-6 " id="quantity-${index}">${item.quantity}</p>
                            <div class="cover-icon d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-plus" onclick="changeQuantity(${index}, 1)"></i>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-4  py-1 d-flex flex-column justify-content-between align-items-end ">
                    <i class="fa-solid fa-xmark fs-5" onclick="removeItem(${index})"></i>
                    <div class=" ">
                        <p class="fs-6 p-0 m-0">${item.price} ${item.currency}</p>
                    </div>
                </div>
            </div>
            `;
        } else { // إذا كانت الشاشة أكبر
            content += `
            <div class="row my-3  ">
                <div class="col-2 ">
                    <div class="square-cover ">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                </div>

                <div class="col-2 ">
                    <h5>${item.name}</h5>
                    <p>${item.description}</p>
                </div>

                <div class="col-2 text-center ">
                    <p>${item.size}</p>
                </div>

                <div class="col-2 ">
                    <div class="d-flex justify-content-center">
                        <div class="cover-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-minus" onclick="changeQuantity(${index}, -1)"></i>
                        </div>
                        <p class="px-3" id="quantity-${index}">${item.quantity}</p>
                        <div class="cover-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus" onclick="changeQuantity(${index}, 1)"></i>
                        </div>
                    </div>
                </div>

                <div class="col-2 text-center ">
                    <p>${item.price} ${item.currency}</p>
                </div>

                <div class="col-2 text-center d-flex justify-content-center">
                    <i class="fa-solid fa-xmark fs-3" onclick="removeItem(${index})"></i>
                </div>
            </div>
            `;
        }
        getSubtotal += item.price * item.quantity;

    }
    getPrice(getSubtotal);
    counter.innerHTML = itemsData.length;

    cartona.innerHTML = content; // تعيين المحتوى النهائي للعنصر
}


// رسم العناصر في البداية
renderItems();







// document.addEventListener('DOMContentLoaded', function() {
//     // الحصول على المحتوى الجديد (يفترض أن لديك عنصر يحمل هذا الصنف)
//     const content = document.querySelector('.new-content'); // استبدل بالصنف الصحيح

//     // إضافة تأثير دخول المحتوى
//     content.classList.add('content-enter');

//     // بعد فترة قصيرة، نضيف الفئة الفعالة
//     setTimeout(() => {
//         content.classList.add('content-enter-active');
//     }, 10); // وقت قصير لبدء التأثير
// });

// عند الضغط على الزر، إضافة تأثير الخروج
const checkoutButtons = document.querySelectorAll('.goToCheckout');
checkoutButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // منع الانتقال الفوري

        // إضافة تأثير الخروج للصفحة الحالية
        // document.body.classList.add('page-exit');

        // الانتظار حتى ينتهي تأثير الخروج
        // setTimeout(() => {
            // الانتقال إلى الصفحة الجديدة
            window.location.href = '../HTML/checkout.html'; // تغيير الرابط إلى صفحة الدفع
        // }, 750); // تأخير لمدة 0.75 ثانية
    });
});


