// Create a constructor function to implement a car.
// 2. It should have model speed and maxSpeed properties.
// 3. speed is the current speed of the car in km/h.
// 4. Implement "accelerate" method that will increase the speed by 10 and log new speed to the console.
// 5. Implement another method "brake" that will decrease the car's speed by 5 and log new speed to the console.
// 6. Create 2 car objects BMW, and Mercedes and drive them around accelerating till you reach maxSpeed and then apply brakes to slowdown.

class Car {
    constructor(model, speed, maxSpeed) {
        this.model = model;
        this.speed = speed;
        this.maxSpeed = maxSpeed;
    }
    accelerate() {
        if (this.speed < this.maxSpeed) {
            this.speed += 10;
            console.log(this.speed);
            this.accelerate();
        }
        else {
            console.log("Speed is at max");
            this.brake();
        }

    }
    brake() {
        if (this.speed > 0) {
            this.speed -= 5;
            console.log(this.speed);
            this.brake();
        }
    }
}
car1 = new Car("BMW", 0, 200);
car2 = new Car("Mercedes", 0, 200);
car1.accelerate();
