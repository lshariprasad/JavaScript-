let groups = [
  ["DEV", "SRI", "HARI"],
  ["VASAVI", "PRASAD", "NAVYA"],
  ["KRISHNA", "SATHISH", "DEVAN"],
];

for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("K")) {
      console.log("Found One Starting With K:", member);
      break inner;
    }
  }
}
