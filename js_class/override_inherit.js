class Vehicle{

    constructor(make, model, year){
        
        if (typeof make !== 'string' || typeof model !== 'string' || typeof year !== 'number'){
            throw new Error(`Enter makes tring  type and  model strin  and year int type...`);
        }
        
    
        this.make = make;
        this.model = model;
        this.year = year;
        
    }

    displayDetails(){
        console.log(`Make: ${this.make}, model : ${this.model}, year: ${this.year}`)
    }
    make;
    model;
    year;

};


class Car extends Vehicle{

    numOfDoors;

    constructor(make, model, year, numOfDoor){
       
        if (typeof numOfDoor !== 'number'){
            throw new Error(`Type should be Integer`);
        }

        super(make, model, year); // call this vehicle
        this.numOfDoors = numOfDoor;
    }
   


    displayDetails(){
        super.displayDetails();
        console.log(`Doors : ${this.numOfDoors}`);
        
    }



};
console.log('****Vehicle Details:****');
const vec = new Vehicle('Ford', 'new', 2025);
vec.displayDetails()

console.log('\n')
console.log('***Car and Vehicle Details***:');
const car = new Car('Honda', 'Accord', 2023, 4);
car.displayDetails()
