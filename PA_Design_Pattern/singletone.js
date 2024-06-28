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
