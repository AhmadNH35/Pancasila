document.getElementById("moreBtn").addEventListener("click", function () {
    alert(
        "Pelajar Pancasila adalah generasi yang berlandaskan nilai-nilai Pancasila untuk menghadapi tantangan global!"
    );
});

document.getElementById("searchBtn").addEventListener("click", function () {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const result = document.getElementById("searchResult");
    const profiles = [
        "beriman",
        "berkebhinekaan",
        "gotong royong",
        "mandiri",
        "bernalar kritis",
        "kreatif",
    ];

    if (profiles.includes(input)) {
        result.textContent = `Profil "${input}" ditemukan dalam Pelajar Pancasila.`;
    } else {
        result.textContent = "Profil tidak ditemukan. Coba lagi!";
    }
});
