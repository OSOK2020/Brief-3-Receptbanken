// skapa filter funktion

const recept = [
    { namn: "Spaghetti carbonara", kategori: "pasta" },
    { namn: "Lövbiffspasta", kategori: "pasta" },
    { namn: "Cowboysoppa", kategori: "soppa" },
    { namn: "Tomatsoppa", kategori: "soppa" },
    { namn: "Högrevsgryta", kategori: "gryta" },
    { namn: "Lövbiffsgryta", kategori: "gryta" },
    { namn: "Ceasarsallad", kategori: "sallad" },
    { namn: "Ost och skinksallad", kategori: "sallad" },
];

function filterByCategory(recept, kategori) {
    if (kategori === "alla") return recept;
    return recept.filter(recept => recept.kategori === kategori);

}
    document.getElementById("filter-alla").addEventListener("click", () => {
        const resultat = filterByCategory(recept, "alla");
        console.log(resultat);
    });

    document.getElementById("filter-pasta").addEventListener("click", () => {
        const resultat = filterByCategory(recept, "pasta");
        console.log(resultat);
    });

    document.getElementById("filter-soppa").addEventListener("click", () => {
        const resultat = filterByCategory(recept, "soppa");
        console.log(resultat);
    });

    document.getElementById("filter-gryta").addEventListener("click", () => {
        const resultat = filterByCategory(recept, "gryta");
        console.log(resultat);
    });

    document.getElementById("filter-sallad").addEventListener("click", () => {
        const resultat = filterByCategory(recept, "sallad");
        console.log(resultat);
    })
