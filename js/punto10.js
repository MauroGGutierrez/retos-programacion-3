let five = 5;
let Multiplicador = 1;
console.log(`La tabla del 5:`);

for (i = 1; i <= 10; i++) {
  console.log(`5 x ${Multiplicador} =`);
  five = 5 * Multiplicador;
  Multiplicador++;
  console.log (five)
}
