// skapa filter funktion

// const recept = [
//     { namn: "Spaghetti carbonara", kategori: "pasta" },
//     { namn: "Lövbiffspasta", kategori: "pasta" },
//     { namn: "Cowboysoppa", kategori: "soppa" },
//     { namn: "Tomatsoppa", kategori: "soppa" },
//     { namn: "Högrevsgryta", kategori: "gryta" },
//     { namn: "Lövbiffsgryta", kategori: "gryta" },
//     { namn: "Ceasarsallad", kategori: "sallad" },
//     { namn: "Ost och skinksallad", kategori: "sallad" },
// ];

// function filterByCategory(recept, kategori) {
//     if (kategori === "alla") return recept;
//     return recept.filter(recept => recept.kategori === kategori);

// }
//     document.getElementById("filter-alla").addEventListener("click", () => {
//         const resultat = filterByCategory(recept, "alla");
//         console.log(resultat);
//     });

//     document.getElementById("filter-pasta").addEventListener("click", () => {
//         const resultat = filterByCategory(recept, "pasta");
//         console.log(resultat);
//     });

//     document.getElementById("filter-soppa").addEventListener("click", () => {
//         const resultat = filterByCategory(recept, "soppa");
//         console.log(resultat);
//     });

//     document.getElementById("filter-gryta").addEventListener("click", () => {
//         const resultat = filterByCategory(recept, "gryta");
//         console.log(resultat);
//     });

//     document.getElementById("filter-sallad").addEventListener("click", () => {
//         const resultat = filterByCategory(recept, "sallad");
//         console.log(resultat);
//     });


// En array indelad i titel och kategori.
const recept = [
    {id: 1, titel: "Spaghetti carbonara", kategori: "pasta" },
    {id: 2, titel: "Lövbiffspasta", kategori: "pasta" },
    {id: 3, titel: "Cowboysoppa", kategori: "soppa" },
    {id: 4, titel: "Tomatsoppa", kategori: "soppa" },
    {id: 5, titel: "Högrevsgryta", kategori: "gryta" },
    {id: 6, titel: "Lövbiffsgryta", kategori: "gryta" },
    {id: 7, titel: "Caesarsallad", kategori: "sallad" },
    {id: 8, titel: "Ost och skinksallad", kategori: "sallad" }
];

const filterKnappar = document.querySelectorAll(
    "#filter-header button"
);

filterKnappar.forEach(knapp => {
    knapp.addEventListener("click", () => {
        const kategori = knapp.id;

        const filtreradeRecept = kategori === "alla"
        ? recept
        : recept.filter(recept => recept.kategori === kategori);
    })
})

function visaRecept(receptLista) {
    const receptContainer = document.querySelector("#receptlista");

    receptContainer.innerHTML = "";

    receptLista.forEach(recept => {
        const kort = document.createElement("article");
        kort.classList.add("receptkort")

        const titel = document.createElement("h3");
        titel.textContent = recept.titel;

        kort.appendChild(titel);
        receptContainer.appendChild(kort);
    })
}

visaRecept(recept)