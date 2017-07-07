let module = (function () {
    let stratege = {
      metod : function () {

      }
    };
    let goods = [
        {name:'Car', price:1999, rate:2},
        {name:'Book', price:100, rate:3},
        {name:'Plate', price:20, rate:1},
    ];
    function printGoods () {
        let ul = document.querySelector('#rez');
        ul.innerHTML ='';
        goods.forEach((good)=>{
            let li = document.createElement('li');
            li.innerText = `${good.name}  ${good.price}  ${good.rate}`;
            ul.appendChild(li);
        });

    }

    return {
        print : printGoods,
        strateg : stratege,
        goods : goods
    };
})();

let sortName = {
    metod:function (arr) {
        arr.sort(function (a,b) {
            return (a.name>b.name)? 1:-1;
        });
    }
};
let sortPrice= {
    metod:function (arr) {
        arr.sort(function (a,b) {
            return a.price-b.price;
        });
    }
};
let sortRate= {
    metod:function (arr) {
        arr.sort(function (a,b) {
            return a.rate-b.rate;
        });
    }
};

document.querySelector('.do_sort').addEventListener('click', function () {
   let sel=document.querySelector('#sort').value;
   if(sel === 'name'){
       module.strateg = sortName;
   }
   else if (sel === 'price'){
       module.strateg = sortPrice;
   }
   else if (sel === 'rate'){
       module.strateg = sortRate;
   }
    module.strateg.metod(module.goods);
    module.print();
});
module.print();