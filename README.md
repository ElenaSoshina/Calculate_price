TotalPrice Calculator

This repository contains a simple TypeScript program that calculates the total price of an item after applying a discount. It also determines the installment payment amount if the purchase is made on an installment basis.

Features

Discount Calculation: Applies a percentage discount to the original price.
Installment Calculation: Divides the discounted price into monthly installment payments if the installment option is selected.
TypeScript Interface: Uses a TypeScript interface to ensure correct data structure for input parameters.
Interface

The program uses an interface ITotalPrice to define the structure of the input object:
interface ITotalPrice {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

Function

The main function totalPrice calculates the total price based on the given parameters:

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    const discountPrice = price - (price * (discount / 100));
	
	if (isInstallment) {
		return discountPrice / months;
	}
	
	return discountPrice;
};

Example Usage

Here's an example of how to use the totalPrice function:

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250


