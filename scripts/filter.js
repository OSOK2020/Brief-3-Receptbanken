
const recept = [
  { id: 1, titel: "Spaghetti carbonara", kategori: "pasta" },
  { id: 2, titel: "Lövbiffspasta", kategori: "pasta" },
  { id: 3, titel: "Cowboysoppa", kategori: "soppa" },
  { id: 4, titel: "Tomatsoppa", kategori: "soppa" },
  { id: 5, titel: "Högrevsgryta", kategori: "gryta" },
  { id: 6, titel: "Lövbiffsgryta", kategori: "gryta" },
  { id: 7, titel: "Caesarsallad", kategori: "sallad" },
  { id: 8, titel: "Ost och skinksallad", kategori: "sallad" }
];

function renderList(receptAttVisa) {
  const lista = document.getElementById("lista");

  lista.innerHTML = receptAttVisa.map(recept => `
    <div class="receptkort">
      <h3>${recept.titel}</h3>
      <p>Kategori: ${recept.kategori}</p>
    </div>
  `).join("");
}

// Visa alla recept när sidan öppnas
renderList(recept);

// Filtrera recepten när en kategori klickas
document.querySelectorAll(".filter-knapp").forEach(knapp => {
  knapp.addEventListener("click", () => {
    const kategori = knapp.dataset.kategori;

    const resultat = kategori === "alla"
      ? recept
      : recept.filter(r => r.kategori === kategori);

    if (resultat.length === 0) {
      document.getElementById("lista").innerHTML =
        "<p>Inga recept matchar den här kategorin.</p>";
    } else {
      renderList(resultat);
    }
  });
});
