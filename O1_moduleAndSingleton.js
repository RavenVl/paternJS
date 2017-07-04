//Module
var Bascet = (function () {
    var kol = 0;
    var sum = 0;
    var goods = [];
    return {
        getKol: function () {
            return kol;
        },
        getSum: function () {
            return sum;
        },
        addGood: function (good) {
            kol++;
            sum += good.price;
            goods.push(good);
        },
        printGoods: function () {
            for (let good of goods) {
                console.log(good.name, good.price);
            }
        }

    };
})();

let solt = {
    name: 'Solt',
    price: +22
};
let sugar = {
    name: 'Sugar',
    price: +10
};
Bascet.addGood(solt);
Bascet.addGood(sugar);
console.log('Number goods =' + Bascet.getKol());
console.log('Summ goods =' + Bascet.getSum());
Bascet.printGoods();

//Singleton
let Singleton = (function () {
    let instance;
    let SERVER = 'localhost';
    function Singleton() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }
    }
Singleton.prototype.connect = function () {
    console.log('Connect to '+SERVER);
};
    return Singleton;
})();
let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2);
obj1.connect();
