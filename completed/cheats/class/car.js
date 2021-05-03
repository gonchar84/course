class Car {
    year;
    color;
    type;

    drive(speed) {
        console.log('drive speed is ' + speed);
    }

    stop() {

    }
}

class Sedan extends Car {
    doors = 4;
    constructor() {
        super();
    }

    openDoor(number)
    {
        console.log(`door ${number} is opened`);
    }
}

class Toyota extends Sedan {
    constructor( params ) {
        super();
        let {color, year, type} = params;
        this.color = color;
        this.doors = 4;
        this.year = year;
        this.type = type;
    }
    broken()
    {
        console.log('your car is broken');
    }
}
let MyCar = new Toyota({
    color: 'red',
    year: '2021',
    type: 'Mechanic',
});

MyCar.drive(70)
