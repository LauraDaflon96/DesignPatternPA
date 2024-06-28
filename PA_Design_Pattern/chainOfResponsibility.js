// Each handler in the chain decides either to process the request or 
// to pass it along the chain to the next handler.

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dogs {
    constructor(name, dogs_list = [Dog]) {
        this.name = name;
        this.dogs_list = dogs_list;
        this.next = null;
    }

    search_dog(dog_name) {
        var index = this.dogs_list.map(item => item.name).indexOf(dog_name)
        return this.dogs_list[index]
    }

    setNext(storage) {
        this.next = storage;
    }

    find_dog_by_name(dog_name) {
        var index = this.dogs_list.map(item => item.name).indexOf(dog_name)
        var found = this.dogs_list[index]

        if (found) {
            return "found " + found.name + " in " + this.name
        } else if (this.next) {
            return this.next.find_dog_by_name(dog_name)
        } else {
            return "Dog not found."
        }
    }
}

class Vet {
    constructor() {
        
        // the closest vet
        var vet_sunshine = new Dogs(
            'Sunshine', 
            [new Dog('Carlitos', 2), new Dog('Lucinda', 1), new Dog('Zara', 1)])

        // the middle
        var vet_moonlight = new Dogs(
            'Moonlight', 
            [new Dog('Luke', 1), new Dog('Crowell', 9), new Dog('Lick', 4)]
        )

        // the farther vet
        var vet_grass = new Dogs(
            'Grass', 
            [new Dog('Luke', 1), new Dog('Crowell', 9), new Dog('Lick', 4)]
        )

        this.storage = vet_sunshine;

        vet_sunshine.setNext(vet_moonlight);

        vet_moonlight.setNext(vet_grass);

    }

    find(dog) {
        return this.storage.find_dog_by_name(dog)
    }

}

vet = new Vet();
console.log(vet.find("Carlitos"))
console.log(vet.find("xx"))