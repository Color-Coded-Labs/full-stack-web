const cars = [
  {
    make: "ford",
    model: "mustang",
    year: "2004",
    trim: "GT",
    transmission: "manual",
  },
  {
    make: "honda",
    model: "civic",
    year: "2012",
    trim: "LX",
    transmission: "automatic",
  },
  {
    make: "toyota",
    model: "highlander",
    year: "2000",
    trim: "XLE",
    transmission: "automatic",
  },
];

const trimLevelContainsX1 = cars.filter((car) => car.trim.endsWith("X"));

const trimLevelContainsX2 = cars.filter((car) =>
  car.trim.split("").includes("X")
);

const trimLevelContainsX3 = cars.filter((car) => car.trim === "X");

trimLevelContainsX1.forEach((car) => console.log(car));
console.log("========================================================");
trimLevelContainsX2.forEach((car) => console.log(car));
console.log("========================================================");
trimLevelContainsX3.forEach((car) => console.log(car));
