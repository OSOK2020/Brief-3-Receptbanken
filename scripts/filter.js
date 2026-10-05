// skapa filter funktion

const recept = [
    { namn: "Spaghetti carbonara", kategori: "pasta" },
    { namn: "Lövbiffspasta", kategori: "pasta" },
    { namn: "Cowboysoppa", kategori: "soppa" },
    { namn: "Tomatsoppa", kategori: "soppa" },
    { namn: "Ceasarsallad", kategori: "sallad" },
    { namn: "Ost och skinksallad", kategori: "sallad"},
];

function filterByCategory(recept, kategori) {
    return recept.filter(recept => recept.kategori === kategori)
}