interface ITotalPrice {
	price: number
	discount: number
	isInstallment: boolean
	months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    // Your code here...
	const discountPrice = price - (price * (discount/100))
	
	if (isInstallment) {
		return discountPrice / months
	}
	
	return discountPrice
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
