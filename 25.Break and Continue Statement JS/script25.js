// || Break || //
for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}

// || Continue || //
for (let i = 1; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i);
}

// || EXAMPLE-1 || //
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
