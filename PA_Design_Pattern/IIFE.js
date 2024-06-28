var Calculator = (function() {
    var res = 0

    function addition(x,y) {
        if (res != 0) {
            res += x + y
        } else {
            res = x + y
        }
    }

    function subtract(x,y) {
        if (res != 0) {
            res -= x - y
        } else {
            res = x - y
        }
    }

    return {
        add: addition,
        sub: subtract,
        getRes: function() {
            return res;
        },
        erase: function() {
            res = 0;
            this.getRes;
        }
    }

})();

Calculator.add(3,4);
console.log(Calculator.getRes());
Calculator.sub(2,1);
console.log(Calculator.getRes());
Calculator.erase();
console.log(Calculator.getRes());
