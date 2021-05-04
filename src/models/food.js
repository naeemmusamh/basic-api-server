'use strict';

//use the class constructors and make it path in the routes food
class Food {

    //The record that was added to the database.
    constructor() {
        this.id = 0;
        this.database = [];
    }

    //get all and one food
    get(id) {
        if (id) {
            return this.database.find(record => {
                record.id === id;
            });
        } else {
            return this.database;
        }
    }

    //create new food
    create(object) {
        let record = {
            id: ++this.id,
            record: object
        };
        this.database.push(record);
        return record;
    }

    //update the food
    update(id, object) {
        for (let x = 0; x < this.database.length; x++) {
            if (this.database[x].id == id) {
                this.database[x].record = object;
                return this.database[x];
            }
        }
    }

    //delete the food
    delete(id) {
        let deleted = false;
        this.database = this.database.filter((object) => {
            if (object.id != id) {
                return true;
            } else {
                deleted = true;
                return false;
            }
        });
        return deleted;
    }

}

//middleware for the Food
module.exports = Food;