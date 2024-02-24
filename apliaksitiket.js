var nama = prompt("Masukkan nama Anda:");
var umur = parseInt(prompt("Masukkan umur Anda:"));

if (umur > 13) {
    var pilihanStudio = prompt("Anda boleh masuk studio. Silakan pilih studio (A, B, atau C):").toUpperCase();
    alert(`Tiket ${nama}, Studio ${pilihanStudio}, umur ${umur}`);
} else {
    alert("Maaf, Anda tidak diizinkan masuk studio karena usia Anda kurang dari 13 tahun.");
}
