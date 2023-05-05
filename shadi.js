const showTeamButton = document.getElementById('show-team');
const teamDiv = document.getElementById('team');
showTeamButton.addEventListener('click', function() {
  teamDiv.classList.toggle('hidden');
});

const showAwardsButton = document.getElementById('show-awards');
const awardsDiv = document.getElementById('awards');
showAwardsButton.addEventListener('click', function() {
  awardsDiv.classList.toggle('hidden');
});