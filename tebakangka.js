alert("GAME TEBAK ANGKA! antara 1-10 \n Anda punya 3 kesempatan");
const angkaBenar = 5;

for (let nyawa = 3; nyawa >= 1; nyawa--) {
    const angkaTebakan = parseInt(prompt("Masukkan angka tebakan Anda:"));
    if (angkaTebakan == angkaBenar) {
        alert(`Tebakan anda benar! \n Angka yang dicari adalah ${angkaBenar}`);
        break;
    } else if (angkaTebakan > angkaBenar) {
        nyawa--;
        alert(`Tebakan anda terlalu besar! \n Anda masih punya ${nyawa - 1} kesempatan`);
    } else if (angkaTebakan < angkaBenar) {
        nyawa--;
        alert(`Tebakan anda terlalu kecil! \n Anda masih punya ${nyawa - 1} kesempatan`);
    }
    
    if (nyawa === 1) {
        alert(`Game over \n Angka yang dicari adalah ${angkaBenar}`);
    }
    
    
}
