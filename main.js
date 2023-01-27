let team1Score = 0;
let team2Score = 0;
let roundsRemaining = 5;

document.getElementById("team1-score").innerHTML = team1Score;
document.getElementById("team2-score").innerHTML = team2Score;
document.getElementById("rounds-count").innerHTML = roundsRemaining;

function updateScore(team) {
  if (team === "team1") {
    team1Score++;
    document.getElementById("team1-score").innerHTML = team1Score;
  } else if (team === "team2") {
    team2Score++;
    document.getElementById("team2-score").innerHTML = team2Score;
  }
  roundsRemaining--;
  document.getElementById("rounds-count").innerHTML = roundsRemaining;
}
function setTeamName(team1Name, team2Name) {
  document.getElementById("team1").getElementsByClassName("name")[0].innerHTML = team1Name;
  document.getElementById("team2").getElementsByClassName("name")[0].innerHTML = team2Name;
}
setTeamName("Time 1", "Time 2") 




