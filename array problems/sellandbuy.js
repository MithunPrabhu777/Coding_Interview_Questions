var maxProfit = function(prices) {
    let minStock = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        if(price < minStock){
            minStock = price;
        } else if(price - minStock > maxProfit){
            maxProfit = price - minStock;
        }
    }
    return maxProfit;
};

var prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));