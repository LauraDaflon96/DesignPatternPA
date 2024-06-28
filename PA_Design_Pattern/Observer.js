// The Observer Design Pattern is a behavioral design pattern that defines a 
// one-to-many dependency between objects so that when one object (the subject) 
// changes state, all its dependents (observers) are notified and updated automatically.

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe_vet(f) {
        this.observers.push(f);
    }

    unsubscribe_vet(f) {
        if (this.observers.includes(f)) {
            this.observers.filter(subscriber => subscriber !== f)
        }
    }

    notify_vet(data) {
        this.observers.forEach(observer => {
            observer.update(data);
          });
    }
}

class Vet {
    constructor(name) {
      this.name = name;
    }
   
    update(animal) {
      console.log(`${this.name} knows that ${animal} needs help.`);
    }
}

observer = new Observable;
carlos = new Vet('Carlos');
observer.subscribe_vet(carlos);
observer.notify_vet("Loli");