// leaderboard.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("leaderboard-container");

  // Temporary dummy data (later we'll connect to real scores)
  const players = [
    { name: "Jaheen", score: 480 },
    { name: "Aman", score: 420 },
    { name: "Riya", score: 390 },
    { name: "Tanishq", score: 350 },
    { name: "Neha", score: 310 },
    { name: "Sahil", score: 290 },
    { name: "Pooja", score: 270 },
    { name: "Ankit", score: 260 },
    { name: "Kriti", score: 240 },
    { name: "Rohit", score: 210 }
  ];

  players.sort((a, b) => b.score - a.score);

  let html = `
    <table>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  players.forEach((p, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${p.name}</td>
        <td>${p.score}</td>
      </tr>
    `;
  });

  html += `</table>`;
  container.innerHTML = html;
});
