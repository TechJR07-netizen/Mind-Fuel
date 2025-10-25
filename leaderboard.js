document.addEventListener("DOMContentLoaded", () => {
  const leaderboardData = [
    { name: "Aarav", score: 985 },
    { name: "Priya", score: 960 },
    { name: "Rohan", score: 940 },
    { name: "Simran", score: 910 },
    { name: "Kabir", score: 890 },
    { name: "Ananya", score: 870 },
    { name: "Dev", score: 860 },
    { name: "Isha", score: 850 },
    { name: "Tanish", score: 830 },
    { name: "Aditi", score: 810 },
  ];

  const tbody = document.querySelector("#leaderboard tbody");
  leaderboardData.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
    `;
    tbody.appendChild(row);
  });
});
