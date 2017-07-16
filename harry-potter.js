var harryPotter = [ 
    {title:"Harry Potter and the Philosopher's Stone", cost:15},
    {title:"Harry Potter and the Chamberof Secrets", cost:15},
    {title:"Harry Potter and the Prisoner of Azkaban", cost:15},
    {title:"Harry Potter and the Goblet of Fire", cost:15},
    {title:"Harry Potter and the Order of the Phoenix", cost:15},
    {title:"Harry Potter and the Half-Blood Prince", cost:15},
    {title:"Harry Potter and the Deathly Hallows", cost:15},
]



var totalCost = function(...titles) {
    var price = 0;
    var otherPrice = 0;
    var k = 0;
    var expensiveNovel = obj.sort(function(a, b){return b.cost - a.cost});
    if(titles.length == [...new Set(titles)].length && titles.length == 7) {
        price = obj.reduce((a, b) => ({cost: a.cost + b.cost}))
        return price.cost - expensiveNovel[0].cost;
    }
                
    for(var i = 0; i < obj.length; i++) {
        var unique = true;
        for(var j = 0; j < titles.length; j++) {
            if((obj[i].title == titles[j]) && unique) {
                price += obj[i].cost;
                unique = false;
                k += 1;
            }else if ((obj[i].title == titles[j]) && unique === false ) {
                otherPrice += obj[i].cost;
            }
        }
    }
    return discount(k, price, otherPrice);
}


var discount = function(nbrOfUniqueNovels, price, otherPrice) {
    if(nbrOfUniqueNovels == 2) {
        return price * 0.96 + otherPrice;
    }else if(nbrOfUniqueNovels == 3) {
        return price * 0.93 + otherPrice
    }else if(nbrOfUniqueNovels == 4) {
        return price * 0.90 + otherPrice;
    }else if(nbrOfUniqueNovels == 5) {
        return price * 0.87 + otherPrice;
    }else {
        return price * 0.84 + otherPrice;                                                            }
}
