function incrementer(num) {
  return num.map((n, i) => (n + i + 1) % 10);
}
