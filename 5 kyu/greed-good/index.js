function score( dice ) {
  let r = [0, 0, 0, 0, 0, 0];

  dice.map((v) => {
    r[v - 1]++;
  });

  return (
    (r[1] >= 3 ? 200 : 0) +
    (r[2] >= 3 ? 300 : 0) +
    (r[3] >= 3 ? 400 : 0) +
    (r[5] >= 3 ? 600 : 0) +
    (r[0] >= 3 ? (r[0] > 4 ? 1200 : r[0] > 3 ? 1100 : 1000) : r[0] * 100) +
    (r[4] >= 3 ? (r[4] > 4 ? 600 : r[4] > 3 ? 550 : 500) : r[4] * 50)
  );
}
