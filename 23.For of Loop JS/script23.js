let names = ["DEV", "SRI", "SAI", "HARI", "VIJAY", "SATHISH"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("---------------------------");

for (let name of names) {
  console.log(name);
}
