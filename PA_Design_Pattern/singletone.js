//It is one of the most simple design patterns in terms of modeling but on the other hand, 
// this is one of the most controversial patterns in terms of complexity of usage.

class Singleton {

    constructor() {
        this.instance;
        this.data = Math.random();

        console.log("Singleton is instantiated.")
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new Singleton();
        }

        return this.instance
    }

    getData() {
        return this.data
    }
}

val1 = Singleton.getInstance()
val2 = Singleton.getInstance()

console.log(val1.getData())
console.log(val2.getData())