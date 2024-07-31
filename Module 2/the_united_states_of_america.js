const USA = {
  population: "333.3 Million",
  favoriteColor: "blue",
  weight: "181 lbs",
  favoriteFood: "hamburger",
};

const countries = [
  {
    name: "USA",
    population: "333.3 Million",
    favoriteColor: "blue",
    weight: "181 lbs",
    favoriteFood: "hamburger",
  },
  {
    name: "Neverneverland",
    population: "20",
    favoriteColor: "green",
    weight: "150 lbs",
    favoriteFood: "captain hook's tears",
  },
  {
    name: "secret world",
  },
];

for (country of countries) {
  for (const property in country) {
    if (property === "name") {
      if (country[property] === "secret world") {
        console.log("it's a secret! we don't actually know anything");
        break;
      }
      console.log("name of country: " + country[property]);
    } else {
      console.log(`property: ${country[property]}`);
    }
  }
}
