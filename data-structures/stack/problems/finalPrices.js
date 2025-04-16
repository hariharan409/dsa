// 1475. Final Prices With a Special Discount in a Shop

/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = (prices) => {
    let i=0;
    let j=i+1;

    while(i < prices.length) {
        if(prices[j] <= prices[i]) {
            prices[i] -= prices[j];
            i++;
            j = i+1;
        } else {
            if(j < prices.length) {
                j++;
            } else {
                i++;
                j = i+1;
            }
        }
    }
    return prices;
};

console.log(finalPrices(prices = [10,1,1,6]));