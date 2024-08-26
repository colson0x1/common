interface Car {
  manufacturer: string;
  model: string;
  production: number;
  class: string;
}

const car: Car = {
  manufacturer: 'Lamborghini',
  model: 'Veneno Roadster',
  production: 2013,
  class: 'Sports Car',
};

console.log(car);

export default car;
