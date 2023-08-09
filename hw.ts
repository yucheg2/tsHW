interface PriceParamsObj {
    price: number,
    discount: number,
    isInstallment: boolean, 
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: PriceParamsObj): number => {
    const withDiscount: number = price - (price * (discount/100))
    if (isInstallment) {
        return withDiscount / months
    }
    return withDiscount
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250