var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, months = _a.months;
    // Your code here...
    var discountPrice = price - (price * (discount / 100));
    if (isInstallment) {
        return discountPrice / months;
    }
    return discountPrice;
};
var price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
