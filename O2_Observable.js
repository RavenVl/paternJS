function Observable() {
    this.observers = [];
    
}
Observable.prototype.addObserver = function (obs) {
    this.observers.push(obs);
};

Observable.prototype.sendMessage = function (mes) {
    for (let obs of this.observers) {
        obs.doEvent(mes);
    }  
};

function Observer(fun) {
    this.fun = fun;
}

Observer.prototype.doEvent = function (mes) {
    this.fun(mes);
};

let observable = new Observable();
let obs1 = new Observer((mes)=>console.log(mes));
let obs2 = new Observer((mes)=>console.warn(mes));
observable.addObserver(obs1);
observable.addObserver(obs2);
observable.sendMessage("test message");
let mass = [1,0,0,0,2,0,0,3];
for(let i = 0; i<mass.length; i++){
    while (mass[i]===0) {
        mass.splice(i,1);
    }
}
console.dir(mass);