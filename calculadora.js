const nickname = "Cataclisma";
const raca = "Anjo"
const casta = "Querubim"

function calcularXp(vitorias, derrotas) {
  const xpAcumulada = vitorias * 100 - derrotas * 25;
  return xpAcumulada;
}

function calculadoraNivel(partidas) {
    if (partidas < 1000) return "Novato";
    if (partidas < 2000) return "Ferro";
    if (partidas < 3000) return "Bronze";
    if (partidas < 4000) return "Prata";
    if (partidas < 5000) return "Ouro";
    if (partidas < 6000) return "Safira";
    if (partidas < 7000) return "Rubi";
    if (partidas < 8000) return "Diamante";
    if (partidas < 9000) return "Imortal";
    if (partidas < 10000) return "Entidade";
    if (partidas >= 10000) return "One-Above-All";
  }

function calculadoraPartidasRankeadas(vitorias, derrotas) {
  const xp = calcularXp(vitorias, derrotas);
  const nivel = calculadoraNivel(xp);

 if (nivel <= 0) {
    console.log(`O Heroi ${nickname}, tem o saldo de ${xp} pontos de xp e esta no nivel ${nivel}`);    
  } else {
    console.log(`O Herói de nome ${nickname} tem que Upar mais!`);
  }

  
}

calculadoraPartidasRankeadas(1, 42);