class Developer {
    present() {
        return this.type;
    }
}

class FrontEndDev extends Developer {
    constructor(data) {
        super();
        this.type = "Frontend Developer";
    }
}

class BackendDev extends Developer {
    constructor(data) {
        super();
        this.type = "Backend Developer";
    }
}

class DevOps extends Developer {
    constructor(data) {
        super();
        this.type = "DevOps";
    }
}

class DatabaseSpecialist extends Developer {
    constructor(data) {
        super();
        this.type = "Database Specialist";
    }
}

class DeveloperFactory {

    createDeveloper(data) {
        switch (data.type) {
            case 'Frontend Developer':
              return new FrontEndDev(data);

            case 'Backend Developer':
                return new BackendDev(data);

            case 'DevOps':
                return new DevOps(data);

            case 'Database Specialist':
                return new DatabaseSpecialist(data);
              
            default:
              console.log("It's not a valid data");
          }
          
    }
}

dev_factory = new DeveloperFactory;
devOps = new DevOps;
front_dev = new FrontEndDev;
console.log(dev_factory.createDeveloper(devOps));
console.log(dev_factory.createDeveloper(front_dev));
