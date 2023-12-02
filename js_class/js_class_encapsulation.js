class Person{

    /*private member*/
    #name;
    #age
    _job_position;

    constructor(nam, ag, pos){
        this.#name = nam;
        this.#age = ag;
        this._job_position = pos;
    }

    /** PUBlic */
    getName(){
        return this.#name;
    }
       /** PUBlic */
    getAge(){
        return this.#age;
    }
       /** PUBlic */
    getJob(){
        return this._job_position;
    }

}

let person = new Person("Fikrat", "28", "Developer");
console.log(person.getName());
console.log(person.getAge());
console.log(person.getJob());