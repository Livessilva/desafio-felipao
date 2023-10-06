//Classificador de Nível de Herói

let heroi = "batman";
let xp = 15000;
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp > 2000 && xp <= 5000 ) {
  nivel = "Prata";
} else if (xp > 5000 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
  nivel = "Platina";
} else if (xp > 8000 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp > 9000 && xp <= 10000 ) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
} else {
  // Código padrão se nenhuma das condições anteriores for atendida
}

console.log("O herói de nome " + heroi + " está no nível de " + nivel);
