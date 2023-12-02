class Vehicle{

    constructor(brand,prize){
        
        if (typeof brand !== 'string' || typeof prize !== 'number'){
            throw new Error(`Enter brand string  type and prize int type...`);
        }
        else{
            console.log(`prize is ${prize}`);
        }
        this.debugger;
        this._brand_name = brand;
        this._prize = prize;
        
    }
    debugger;

    _brand_name;
    _prize;

};


class Car extends Vehicle{

    #type;

    constructor(type, brand, prize){
       
        if (typeof type !== 'string'){
            throw new Error(`Type should be string`);
        }

        super(brand, prize); // call this vehicle
        this.#type = type
    }
   


    getType(){

        try{
            console.log(`Type: ${this.#type}`);
            
            return this.#type;
        }

        catch(err){
            console.log(`error is ${err}`)

        }
        
    }



};


class Bicycle extends Vehicle{

    #type;

    constructor(type, brand, prize){
        super(brand, prize); // call this vehicle
        this.#type = type
    }
   

    getType(){

        try{
            console.log(`TYpe: ${this.#type}`);
            
            return this.#type;
        }

        catch(err){
            console.log(`error is ${err}`)

        }
        
    }



};

let car = new Car("BMWXll", "BMW", 25);

let bc = new Bicycle("desla14", "desla", 2000)
car.getType()
bc.getType()