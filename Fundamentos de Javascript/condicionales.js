let piedra = "Piedra";
let papel = "Papel";
let tijera = "Tijera";

function winner(user, cpu) {
  if (user === cpu) {
    return "Empataron";
  } else {
    if ( user === piedra && 
        cpu === papel 
        || user === papel && 
        cpu === tijera 
        || user === tijera && 
        cpu === piedra ) {
      return "Perdiste";
    } else if ( user === piedra 
        && cpu === tijera 
        || user === papel 
        && cpu === piedra 
        || user === tijera 
        && cpu === papel ) {
      return "Ganaste";
    }
  }
}

console.log(winner(papel, tijera));
