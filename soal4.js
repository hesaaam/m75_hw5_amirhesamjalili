
class circle {
    constructor(radius) {
        this.radius = radius;

    }
    area = function () {
        return Math.PI * this.radius **2
    };
    perimeter = function () {
        return 2 * Math.PI * this.radius;
    }
}

let c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));