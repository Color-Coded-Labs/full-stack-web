let people = [
  {
    id: 1,
    first_name: "Rosita",
    last_name: "Claeskens",
    email: "rclaeskens0@typepad.com",
    gender: "Female",
    ip_address: "87.244.108.4",
  },
  {
    id: 2,
    first_name: "Elroy",
    last_name: "Spears",
    email: "espears1@wikimedia.org",
    gender: "Male",
    ip_address: "119.251.140.43",
  },
  {
    id: 3,
    first_name: "Erminie",
    last_name: "Dran",
    email: "edran2@xrea.com",
    gender: "Female",
    ip_address: "39.161.98.157",
  },
  {
    id: 4,
    first_name: "Dasie",
    last_name: "Flinn",
    email: "dflinn3@clickbank.net",
    gender: "Female",
    ip_address: "85.151.17.65",
  },
  {
    id: 5,
    first_name: "Hettie",
    last_name: "Hainning",
    email: "hhainning4@qq.com",
    gender: "Female",
    ip_address: "193.77.212.101",
  },
  {
    id: 6,
    first_name: "Mauricio",
    last_name: "Jarritt",
    email: "mjarritt5@nsw.gov.au",
    gender: "Male",
    ip_address: "42.38.236.124",
  },
  {
    id: 7,
    first_name: "Inge",
    last_name: "Rosenwald",
    email: "irosenwald6@abc.net.au",
    gender: "Female",
    ip_address: "176.210.177.71",
  },
  {
    id: 8,
    first_name: "Karin",
    last_name: "Petre",
    email: "kpetre7@irs.gov",
    gender: "Female",
    ip_address: "153.55.122.247",
  },
];

let governmentOfficials = people.filter((person) =>
  person.email.endsWith(".gov")
);

console.log("government officials:");
console.log(governmentOfficials);
