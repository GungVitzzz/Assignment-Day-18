# Mini Project Day 18

Kumpulan jawaban assignment **Empowering JavaScript Development with Functions and Lodash**. Proyek ini berlatih mengolah array dan object, menggunakan function dengan parameter, serta memakai Lodash untuk mengelompokkan data.

## Persiapan

Pastikan Node.js dan npm sudah terpasang. Instal dependency proyek terlebih dahulu:

```bash
npm install
```

Jalankan setiap jawaban secara terpisah dari direktori proyek:

```bash
node Soal-1.js
node Soal-2.js
node Soal-3.js
node Soal-4.js
```

`Soal-4.js` menggunakan Lodash, yang sudah tercantum sebagai dependency di `package.json`. File JavaScript menggunakan ES modules.

## Isi Jawaban

### Soal 1 — Manipulasi nilai siswa

`Soal-1.js` mengolah nilai delapan semester dengan `reduce`. Indeks array genap mewakili semester ganjil, sedangkan indeks ganjil mewakili semester genap. Function `calculateStudentScores` mengembalikan total dan rata-rata masing-masing kelompok; jika array kosong, semua hasil bernilai `0`.

Dengan data contoh, hasilnya:

```text
totalOddSem: 316
totalEvenSem: 354.77
averageOddSem: 79
averageEvenSem: 88.6925
```

Nama key di atas mengikuti implementasi pada file JavaScript.

### Soal 2 — Memisahkan bilangan genap dan ganjil

`Soal-2.js` memakai rest parameter, `flat`, dan `filter` untuk menghasilkan object berisi dua array: `evenNumberArray` dan `oddNumberArray`.

Untuk input contoh, bilangan genapnya adalah `[2, 14, 62, 8, 32]` dan bilangan ganjilnya `[25, 33, 15, 21, 67]`.

### Soal 3 — Mengolah data siswa

`Soal-3.js` menggunakan `map` dan `reduce` untuk menambahkan `rataRataNilai` serta mengubah nama menjadi huruf kapital. Data kemudian difilter agar hanya siswa dengan rata-rata di atas `85` yang tersisa, lalu diurutkan berdasarkan `id` secara menurun.

Data contoh yang lolos adalah Andi (`id: 1232`, rata-rata `86`), Siti (`id: 1210`, rata-rata sekitar `85.67`), dan Sari (`id: 972`, rata-rata sekitar `98.33`).

### Soal 4 — Filter dan group data dengan Lodash

`Soal-4.js` memfilter data orang dengan usia di bawah `35`, lalu menggunakan `_.groupBy` untuk mengelompokkan hasil berdasarkan `nationality`. Berdasarkan data contoh, kelompok yang dihasilkan adalah Indonesia (Joko, Angelina Christie, Ivan) dan Canada (Frank Ocean).

## Struktur Proyek

| File | Keterangan |
| --- | --- |
| `Soal-1.js` | Menghitung total dan rata-rata nilai semester ganjil dan genap |
| `Soal-2.js` | Memisahkan bilangan genap dan ganjil |
| `Soal-3.js` | Menghitung rata-rata, memfilter, dan mengurutkan data siswa |
| `Soal-4.js` | Memfilter usia dan mengelompokkan data dengan Lodash |
| `package.json` | Metadata proyek dan dependency |
